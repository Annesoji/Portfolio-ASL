import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, ChevronDown, Menu, PanelLeft, X } from 'lucide-react';
import type { UIStrings } from '../data/i18n';
import type { ModelId } from '../types';

const MODEL_IDS: ModelId[] = ['express', 'standard', 'deepdive'];

interface Props {
  t: UIStrings;
  title: string;
  model: ModelId;
  setModel: (m: ModelId) => void;
  onMenu: () => void;
  onToggleSidebar: () => void;
  /** Documents ouverts dans un onglet, à côté de la conversation (CV, Design System) */
  docTabs?: { id: string; label: string; active: boolean; closeLabel: string; onSelect: () => void; onClose: () => void }[];
  chatActive?: boolean;
  onSelectChat?: () => void;
  /** Remplace le choix du niveau de détail quand un document a sa propre action */
  docAction?: ReactNode;
}

const TAB = 't-all flex min-w-0 items-center rounded-full text-[12.5px] font-medium';
const tabState = (active: boolean) => (active ? 'bg-surface-2 text-ink' : 'text-muted hover:text-ink');

export default function TopBar({ t, title, model, setModel, onMenu, onToggleSidebar, docTabs = [], chatActive = true, onSelectChat, docAction }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-4">
      <button onClick={onMenu} aria-label={t.openMenu} className="icon-btn md:hidden">
        <Menu size={19} aria-hidden />
      </button>
      <button onClick={onToggleSidebar} aria-label={t.toggleSidebar} title={t.toggleSidebar} className="icon-btn hidden md:inline-flex">
        <PanelLeft size={18} aria-hidden />
      </button>
      {docTabs.length > 0 ? (
        <div role="tablist" className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          <button role="tab" aria-selected={chatActive} onClick={onSelectChat} className={`${TAB} px-3 py-1.5 ${tabState(chatActive)}`}>
            <span className="truncate">{title}</span>
          </button>
          {docTabs.map((d) => (
            <span key={d.id} className={`${TAB} shrink-0 ${tabState(d.active)}`}>
              <button role="tab" aria-selected={d.active} onClick={d.onSelect} className="whitespace-nowrap rounded-full py-1.5 pl-3 pr-1.5">
                {d.label}
              </button>
              <button
                onClick={d.onClose}
                aria-label={d.closeLabel}
                title={d.closeLabel}
                className="t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink"
              >
                <X size={13} aria-hidden />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <h2 className="eyebrow min-w-0 flex-1 truncate text-ink">{title}</h2>
      )}

      {docAction ?? (!chatActive ? null : (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={t.model}
          className="t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule"
        >
          <span className="h-2 w-2 rounded-full bg-vermillion" aria-hidden />
          <span className="font-semibold text-ink">{t.models[model].name}</span>
          <span className="hidden font-light text-muted lg:inline">({t.models[model].hint})</span>
          <ChevronDown size={15} className={`t-all text-muted ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>
        {open && (
          <ul
            role="listbox"
            aria-label={t.model}
            className="rise absolute right-0 top-full z-20 mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-3xl border border-rule bg-elevated p-1.5"
          >
            {MODEL_IDS.map((id) => (
              <li key={id} role="option" aria-selected={id === model}>
                <button
                  onClick={() => {
                    setModel(id);
                    setOpen(false);
                  }}
                  className="t-all flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink">
                      {t.models[id].name} <span className="font-normal text-muted">· {t.models[id].hint}</span>
                    </span>
                    <span className="mt-0.5 block text-xs font-light text-muted">{t.models[id].desc}</span>
                  </span>
                  {id === model && <Check size={16} className="mt-0.5 shrink-0 text-accent-text" aria-hidden />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      ))}
    </header>
  );
}
