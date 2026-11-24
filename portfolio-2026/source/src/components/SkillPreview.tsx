import { useState } from 'react';
import { Check, Copy, FileText, FolderOpen } from 'lucide-react';
import { SKILL_FOLDER, skillFiles } from '../data/skillExample';
import type { UIStrings } from '../data/i18n';

function lineClass(line: string, inFrontmatter: boolean) {
  if (line === '---') return 'text-code-muted';
  if (inFrontmatter) return 'text-[var(--code-key)]';
  if (/^#{1,3}\s/.test(line)) return 'font-semibold text-[var(--code-heading)]';
  if (/^\s*- \[ \]/.test(line)) return 'text-code-ink';
  return 'text-code-ink';
}

/** Aperçu interactif du skill réel du portfolio (onglets de fichiers + copie). */
export default function SkillPreview({ t }: { t: UIStrings }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const file = skillFiles[active];
  const lines = file.content.replace(/\n$/, '').split('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(file.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  let fm = 0; // compteur de délimiteurs de frontmatter

  return (
    <figure className="rise my-6 overflow-hidden rounded-3xl border border-line bg-code-bg">
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--code-line)] px-4 py-3">
        <FolderOpen size={15} className="text-code-muted" aria-hidden />
        <span className="font-mono text-xs text-code-muted">{SKILL_FOLDER}</span>
        <span className="ml-auto rounded-full bg-[var(--code-key-tint)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--code-key)]">
          {t.skill.badge}
        </span>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto border-b border-[var(--code-line)] px-2 pt-2" role="tablist">
        {skillFiles.map((f, i) => (
          <button
            key={f.path}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`t-all flex shrink-0 items-center gap-1.5 rounded-t-xl px-3 py-2 font-mono text-xs ${
              i === active ? 'bg-[var(--code-line)] text-code-ink' : 'text-code-muted hover:text-code-ink'
            }`}
          >
            <FileText size={13} aria-hidden />
            {f.path}
          </button>
        ))}
        <button
          onClick={copy}
          className="t-all ml-auto mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-code-muted hover:bg-[var(--code-line)] hover:text-code-ink"
        >
          {copied ? t.skill.copied : t.skill.copy}
          {copied ? <Check size={13} aria-hidden /> : <Copy size={13} aria-hidden />}
        </button>
      </div>

      <pre className="max-h-[380px] overflow-auto py-3 font-mono text-[12.5px] leading-[1.65]" role="tabpanel">
        {lines.map((line, i) => {
          const isDelim = line === '---';
          const inFm = active === 0 && fm === 1 && !isDelim;
          if (isDelim) fm++;
          return (
            <div key={i} className="flex px-4 hover:bg-[var(--code-hover)]">
              <span className="w-8 shrink-0 select-none pr-3 text-right text-code-muted opacity-60" aria-hidden>
                {i + 1}
              </span>
              <span className={`min-w-0 whitespace-pre-wrap break-words ${lineClass(line, inFm)}`}>{line || ' '}</span>
            </div>
          );
        })}
      </pre>

      <figcaption className="border-t border-[var(--code-line)] px-4 py-2.5 text-xs font-light text-code-muted">
        {t.skill.caption}
      </figcaption>
    </figure>
  );
}
