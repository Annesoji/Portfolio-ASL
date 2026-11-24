import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUp, Slash, Square } from 'lucide-react';
import type { UIStrings } from '../data/i18n';

interface Props {
  t: UIStrings;
  isStreaming: boolean;
  onSend: (text: string) => void;
  onStop: () => void;
}

export default function PromptInput({ t, isStreaming, onSend, onStop }: Props) {
  const [value, setValue] = useState('');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [menuIdx, setMenuIdx] = useState(0);
  const [menuDismissed, setMenuDismissed] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  // Placeholder dynamique
  useEffect(() => {
    const id = window.setInterval(() => setPlaceholderIdx((i) => i + 1), 4500);
    return () => window.clearInterval(id);
  }, []);

  // Textarea auto-extensible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [value]);

  const commands = useMemo(() => {
    if (!value.startsWith('/') || /\s/.test(value)) return [];
    return t.slash.filter((c) => c.cmd.startsWith(value.toLowerCase()));
  }, [value, t]);
  const menuOpen = commands.length > 0 && !menuDismissed;

  useEffect(() => setMenuIdx(0), [value]);

  const submit = (text = value) => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;
    onSend(trimmed);
    setValue('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (menuOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const d = e.key === 'ArrowDown' ? 1 : -1;
        setMenuIdx((i) => (i + d + commands.length) % commands.length);
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        submit(commands[menuIdx].cmd);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuDismissed(true);
        return;
      }
    }
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
    }
  };

  const toggleSlash = () => {
    setMenuDismissed(false);
    setValue((v) => (v.startsWith('/') ? '' : '/'));
    ref.current?.focus();
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-3xl px-3 pb-3 sm:px-6 sm:pb-5">
      <div className="relative">
        {menuOpen && (
          <ul
            role="listbox"
            aria-label={t.commands}
            className="rise absolute bottom-full left-0 z-10 mb-2 w-full max-w-sm overflow-hidden rounded-3xl border border-rule bg-elevated p-1.5"
          >
            {commands.map((c, i) => (
              <li key={c.cmd} role="option" aria-selected={i === menuIdx}>
                <button
                  onMouseEnter={() => setMenuIdx(i)}
                  onClick={() => submit(c.cmd)}
                  className={`t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm ${
                    i === menuIdx ? 'bg-surface-2' : ''
                  }`}
                >
                  <code className="rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-text">
                    {c.cmd}
                  </code>
                  <span className="text-muted">{c.desc}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="t-all flex items-end gap-2 rounded-[28px] border border-line bg-elevated p-2 pl-2.5 shadow-signature focus-within:border-rule">
          <button
            type="button"
            onClick={toggleSlash}
            aria-label={t.commands}
            title={t.commands}
            className="t-all mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink hover:bg-line"
          >
            <Slash size={15} aria-hidden />
          </button>
          <textarea
            ref={ref}
            rows={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setMenuDismissed(false);
            }}
            onKeyDown={onKeyDown}
            placeholder={t.placeholders[placeholderIdx % t.placeholders.length]}
            aria-label={t.placeholders[0]}
            className="max-h-[200px] min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[15px] leading-relaxed text-ink outline-none placeholder:font-light placeholder:text-muted"
          />
          {isStreaming ? (
            <button
              type="button"
              onClick={onStop}
              aria-label={t.stop}
              title={t.stop}
              className="t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85 active:scale-95"
            >
              <Square size={14} className="fill-current" aria-hidden />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => submit()}
              disabled={!value.trim()}
              aria-label={t.send}
              title={t.send}
              className="t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
            >
              <ArrowUp size={18} strokeWidth={2.5} aria-hidden />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
