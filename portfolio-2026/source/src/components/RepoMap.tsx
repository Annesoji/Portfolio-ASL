import { ArrowDown, ArrowRight, FileText, Folder, Link2, RefreshCw } from 'lucide-react';
import type { Lang, Localized } from '../types';

/**
 * Schéma « organisation cross team » : comment le dépôt UX nourrit l'IA et les développeurs.
 * Repris de la slide conçue par Anne-Sophie pour le retour d'expérience de son équipe.
 */

const ENTRY: Localized<{ kicker: string; title: string; goal: string; parts: { title: string; detail: string }[] }> = {
  fr: {
    kicker: 'Dépôt UX · Design',
    title: 'Le fichier d’entrée de toutes les règles IA',
    goal: 'Objectif : que l’IA sache où chercher, sans charger tout le dépôt.',
    parts: [
      { title: 'Rôle & mission de l’IA', detail: 'Rôle, missions, posture' },
      { title: 'Normes & formats de fichiers', detail: 'Guidelines de composants, tokens, branches' },
      { title: 'Directives UX & Design System', detail: 'Accessibilité, UX writing, gestion des états' },
      { title: 'Directives Git & workflow', detail: 'Convention de commit, demande d’intégration' },
      { title: 'Cartographie du dépôt', detail: 'Où se trouve chaque type de contenu' },
    ],
  },
  en: {
    kicker: 'UX · Design repository',
    title: 'The entry file for all AI rules',
    goal: 'Goal: the AI knows where to look, without loading the whole repository.',
    parts: [
      { title: 'AI role & mission', detail: 'Role, missions, posture' },
      { title: 'File standards & formats', detail: 'Component guidelines, tokens, branches' },
      { title: 'UX & Design System directives', detail: 'Accessibility, UX writing, state handling' },
      { title: 'Git & workflow directives', detail: 'Commit convention, pull request' },
      { title: 'Repository map', detail: 'Where each type of content lives' },
    ],
  },
};

const TREE: { group: Localized; items: string[] }[] = [
  { group: { fr: 'Design System', en: 'Design System' }, items: ['template_guidelines.md', 'tokens.md'] },
  { group: { fr: 'Composants', en: 'Components' }, items: ['styles_hybride.md', 'component_guidelines.md'] },
  { group: { fr: 'Utilisateurs & règles', en: 'Users & rules' }, items: ['personas/', 'business-rules/'] },
  { group: { fr: 'Livrables UX', en: 'UX deliverables' }, items: ['sitemap/', 'user-flows/', 'journeys/', 'ux-specs/'] },
  { group: { fr: 'Références', en: 'Reference' }, items: ['benchmark/', 'decisions/', 'context/'] },
];

const FLOW: Localized<{ tree: string; auto: string; autoDetail: string; dev: string; devDetail: string; preview: string; previewDetail: string }> = {
  fr: {
    tree: 'Arborescence par usage',
    auto: 'Automatisation',
    autoDetail: 'Synchronisation des tokens, demandes d’intégration préparées pour les développeurs',
    dev: 'Dépôt technique · Devs',
    devDetail: 'Consomme ce que le dépôt UX produit',
    preview: 'Lien de prévisualisation',
    previewDetail: 'Chaque demande d’intégration génère une adresse où voir le prototype',
  },
  en: {
    tree: 'A tree organised by use',
    auto: 'Automation',
    autoDetail: 'Token sync, pull requests prepared for developers',
    dev: 'Technical repository · Devs',
    devDetail: 'Consumes what the UX repository produces',
    preview: 'Preview link',
    previewDetail: 'Every pull request generates an address where the prototype can be seen',
  },
};

function Chip({ name }: { name: string }) {
  const isFile = name.endsWith('.md');
  const Icon = isFile ? FileText : Folder;
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-ink">
      <Icon size={11} className="shrink-0 text-muted" aria-hidden /> {name}
    </li>
  );
}

export default function RepoMap({ lang }: { lang: Lang }) {
  const e = ENTRY[lang];
  const f = FLOW[lang];
  return (
    <figure className="my-5 overflow-hidden rounded-3xl border border-line bg-elevated">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Le fichier d'entrée */}
        <div className="border-b border-line p-5 sm:border-b-0 sm:border-r">
          <p className="eyebrow text-muted">{e.kicker}</p>
          <p className="mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent-text">
            <FileText size={14} aria-hidden /> CLAUDE.md
          </p>
          <p className="mt-1 text-[13px] font-medium leading-snug text-ink">{e.title}</p>
          <ol className="mt-4 space-y-2.5">
            {e.parts.map((p, i) => (
              <li key={p.title} className="flex gap-2.5">
                <span className="font-display text-[12px] font-medium italic leading-[1.5] text-accent-text">0{i + 1}</span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold leading-snug text-ink">{p.title}</span>
                  <span className="block text-[12px] font-light leading-snug text-muted">{p.detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 border-t border-line pt-3 text-[12px] font-medium leading-snug text-olive-text">{e.goal}</p>
        </div>

        {/* L'arborescence */}
        <div className="p-5">
          <p className="eyebrow text-muted">{f.tree}</p>
          <ul className="mt-3 space-y-3">
            {TREE.map((g) => (
              <li key={g.group.en}>
                <p className="mb-1.5 text-[12px] font-semibold text-ink">{g.group[lang]}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <Chip key={it} name={it} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ce que le dépôt UX déclenche */}
      <div className="flex flex-col items-stretch gap-2 border-t border-line p-5 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3">
          <RefreshCw size={14} className="mt-0.5 shrink-0 text-olive-text" aria-hidden />
          <p className="min-w-0 text-[12px] leading-snug">
            <span className="block font-semibold text-ink">{f.auto}</span>
            <span className="font-light text-muted">{f.autoDetail}</span>
          </p>
        </div>
        <span className="flex justify-center text-muted" aria-hidden>
          <ArrowRight size={16} className="hidden sm:block" />
          <ArrowDown size={16} className="sm:hidden" />
        </span>
        <div className="flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3">
          <Folder size={14} className="mt-0.5 shrink-0 text-muted" aria-hidden />
          <p className="min-w-0 text-[12px] leading-snug">
            <span className="block font-semibold text-ink">{f.dev}</span>
            <span className="font-light text-muted">{f.devDetail}</span>
          </p>
        </div>
        <span className="flex justify-center text-muted" aria-hidden>
          <ArrowRight size={16} className="hidden sm:block" />
          <ArrowDown size={16} className="sm:hidden" />
        </span>
        <div className="flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3">
          <Link2 size={14} className="mt-0.5 shrink-0 text-muted" aria-hidden />
          <p className="min-w-0 text-[12px] leading-snug">
            <span className="block font-semibold text-ink">{f.preview}</span>
            <span className="font-light text-muted">{f.previewDetail}</span>
          </p>
        </div>
      </div>
    </figure>
  );
}
