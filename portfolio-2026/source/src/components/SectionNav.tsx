export interface SectionLink {
  /** id de l'élément cible dans la page */
  id: string;
  label: string;
}

/**
 * Barre d'ancres d'une longue réponse : reste collée en haut de la conversation
 * et fait défiler jusqu'à la section choisie.
 */
export default function SectionNav({ links, label }: { links: SectionLink[]; label: string }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <nav aria-label={label} className="sticky top-0 z-10 -mx-1 mb-5 bg-bg px-1 py-2.5">
      <ul className="flex gap-1.5 overflow-x-auto">
        {links.map((l, i) => (
          <li key={l.id} className="shrink-0">
            <button
              onClick={() => go(l.id)}
              className="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink hover:border-rule hover:bg-surface-2"
            >
              <span className="font-display text-[11px] italic opacity-60">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
