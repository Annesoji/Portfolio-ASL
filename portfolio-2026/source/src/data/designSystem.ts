/**
 * Page « Design System » : elle n'a pas de contenu à elle.
 * Elle lit les fichiers du skill (`.claude/skills/asl-design-system/`), qui sont la seule source des règles :
 * ce que l'agent IA lit est exactement ce que la page affiche.
 * L'anglais est une traduction alignée (`src/data/design-system-en/`), vérifiée par `npm run check:ds`.
 */
import skillFr from '../../.claude/skills/asl-design-system/SKILL.md?raw';
import composantsFr from '../../.claude/skills/asl-design-system/references/composants.md?raw';
import fondationsFr from '../../.claude/skills/asl-design-system/references/fondations.md?raw';
import stylesFr from '../../.claude/skills/asl-design-system/references/styles.md?raw';
import { parseDs, type DsRawPage } from '../lib/dsParser';
import type { Lang, Localized } from '../types';

const english = import.meta.glob('./design-system-en/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export type DsGroupId = 'start' | 'foundations' | 'styles' | 'components';
export type DsSectionKind = 'text' | 'anatomy' | 'do' | 'dont';

export interface DsPage {
  id: string;
  group: DsGroupId;
  /** Famille du composant (Actions, Communication…) */
  category?: string;
  title: string;
  lead: string;
  sections: { title: string; body: string; kind: DsSectionKind }[];
}

export const dsStrings: Localized<{
  title: string;
  subtitle: string;
  pages: string;
  previous: string;
  next: string;
  source: string;
  openTitle: string;
  openText: string;
  open: string;
  link: string;
}> = {
  fr: {
    title: 'Design System',
    subtitle: 'Les règles et les composants de ce portfolio',
    pages: 'Pages',
    previous: 'Précédent',
    next: 'Suivant',
    source: 'Cette page affiche le fichier que l’agent IA lit',
    openTitle: 'Le Design System de ce portfolio',
    openText: 'Fondations, styles et composants : la page lit directement les fichiers du skill.',
    open: 'Voir le Design System',
    link: 'Design System',
  },
  en: {
    title: 'Design System',
    subtitle: 'The rules and components of this portfolio',
    pages: 'Pages',
    previous: 'Previous',
    next: 'Next',
    source: 'This page displays the file the AI agent reads',
    openTitle: 'This portfolio’s Design System',
    openText: 'Foundations, styles and components: the page reads the skill files directly.',
    open: 'View the Design System',
    link: 'Design System',
  },
};

export const dsGroups: { id: DsGroupId; title: Localized }[] = [
  { id: 'start', title: { fr: 'Démarrer', en: 'Get started' } },
  { id: 'foundations', title: { fr: 'Fondations', en: 'Foundations' } },
  { id: 'styles', title: { fr: 'Styles', en: 'Styles' } },
  { id: 'components', title: { fr: 'Composants', en: 'Components' } },
];

/** Du SKILL.md, la page ne montre que ce qui parle à un lecteur humain. */
const SKILL_PAGES = ['Les quatre règles non négociables', 'Quand la demande contredit une règle', 'Avant de livrer'];

const SOURCES: { file: string; path: string; fr: string; group: DsGroupId; level: 2 | 3; only?: string[] }[] = [
  { file: 'SKILL.md', path: 'SKILL.md', fr: skillFr, group: 'start', level: 2, only: SKILL_PAGES },
  { file: 'fondations.md', path: 'references/fondations.md', fr: fondationsFr, group: 'foundations', level: 2 },
  { file: 'styles.md', path: 'references/styles.md', fr: stylesFr, group: 'styles', level: 2 },
  { file: 'composants.md', path: 'references/composants.md', fr: composantsFr, group: 'components', level: 3 },
];

const KINDS: Record<string, DsSectionKind> = { Anatomie: 'anatomy', 'À faire': 'do', 'À éviter': 'dont' };

/** La traduction n'est utilisée que si elle a exactement la structure du fichier français. */
function sameShape(a: DsRawPage[], b: DsRawPage[]) {
  return a.length === b.length && a.every((p, i) => p.sections.length === b[i].sections.length);
}

function build(lang: Lang): (DsPage & { path: string })[] {
  return SOURCES.flatMap((src) => {
    const fr = parseDs(src.fr, src.level);
    const enText = english[`./design-system-en/${src.file}`];
    const en = lang === 'en' && enText ? parseDs(enText, src.level) : null;
    const shown = en && sameShape(fr, en) ? en : fr;
    return fr
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => !src.only || src.only.includes(p.title))
      .map(({ p, i }) => ({
        id: `${src.group}-${i}`,
        group: src.group,
        path: src.path,
        category: shown[i].family,
        title: shown[i].title,
        lead: shown[i].lead,
        sections: p.sections.map((s, j) => ({
          title: shown[i].sections[j].title,
          body: shown[i].sections[j].body,
          kind: KINDS[s.title] ?? 'text',
        })),
      }));
  });
}

const cache: Partial<Record<Lang, (DsPage & { path: string })[]>> = {};
export const getDsPages = (lang: Lang) => (cache[lang] ??= build(lang));
