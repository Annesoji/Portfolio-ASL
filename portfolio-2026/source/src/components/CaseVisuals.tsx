import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Bot, Check, ChevronsLeftRight, ClipboardList, Code2, PenTool, UserCheck, X } from 'lucide-react';
import { GRDF_PROTOTYPE, GRDF_PROTOTYPE_LINK, GRDF_SITE, grdfStrings } from '../data/grdfFlow';
import type { Lang, Localized } from '../types';

/**
 * Blocs visuels insérés dans l'étude de cas « équipe UX augmentée » (lignes `[[nom]]` du texte).
 * Ils remplacent des paragraphes : chiffres, principes, rôles, relais, résultat du test du skill.
 */

/* ------------------------------------------------------------------ Chiffres */

const FIGURES: Localized<{ value: string; label: string }[]> = {
  fr: [
    { value: '+5 / 17', label: 'modules optimisés par l’IA' },
    { value: '~1 500', label: 'utilisateurs concernés' },
    { value: '1 an', label: 'de delivery en banque régulée' },
  ],
  en: [
    { value: '+5 / 17', label: 'modules optimised with AI' },
    { value: '~1,500', label: 'users reached' },
    { value: '1 year', label: 'of delivery in regulated banking' },
  ],
};

export function FigureTiles({ lang }: { lang: Lang }) {
  return (
    <ul className="my-4 grid grid-cols-3 gap-2 sm:gap-3">
      {FIGURES[lang].map((f) => (
        <li key={f.label} className="rounded-2xl border border-line bg-elevated p-3 sm:p-4">
          <span className="block font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[1.7rem]">
            {f.value}
          </span>
          <span className="mt-1.5 block text-[11.5px] font-light leading-snug text-muted sm:text-xs">{f.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ Principes */

const PRINCIPLES: Localized<{ title: string; text: string }[]> = {
  fr: [
    { title: 'Source de vérité', text: 'Réutiliser avant d’inventer. Diverger est une décision discutée.' },
    { title: 'Double bibliothèque en miroir', text: 'Le composant de référence et sa copie lisible par l’IA.' },
    { title: 'Aucune valeur inventée', text: 'Dimensions, couleurs et comportements viennent des sources réelles.' },
    { title: 'Boucle courte et revue', text: 'De petits changements, revus à l’œil, sur une branche.' },
  ],
  en: [
    { title: 'Source of truth', text: 'Reuse before inventing. Diverging is a discussed decision.' },
    { title: 'Mirrored double library', text: 'The reference component and its AI-readable copy.' },
    { title: 'No invented value', text: 'Dimensions, colours and behaviours come from the real sources.' },
    { title: 'Short loop and review', text: 'Small changes, reviewed by eye, on a branch.' },
  ],
};

export function PrincipleCards({ lang }: { lang: Lang }) {
  return (
    <ol className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
      {PRINCIPLES[lang].map((p, i) => (
        <li key={p.title} className="flex gap-3 rounded-2xl border border-line bg-elevated p-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">
            {i + 1}
          </span>
          <span className="min-w-0">
            <span className="block text-[13.5px] font-semibold leading-snug text-ink">{p.title}</span>
            <span className="mt-1 block text-[12.5px] font-light leading-snug text-muted">{p.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ Rôles */

const ROLES: Localized<{ role: string; ai: string; human: string }[]> = {
  fr: [
    { role: 'Lead Design', ai: 'Cadre, standards, revues', human: 'Pilote l’intention, arbitre' },
    { role: 'UX UI Designer', ai: 'Wireframes, parcours, prototypes', human: 'Juge les générations' },
    { role: 'Dev Front', ai: 'Intégration, Design System', human: 'Implémente' },
    { role: 'Product Owner', ai: 'Specs, priorisation', human: 'Teste sur des prototypes autonomes' },
  ],
  en: [
    { role: 'Lead Design', ai: 'Framework, standards, reviews', human: 'Steers the intention, arbitrates' },
    { role: 'UX UI Designer', ai: 'Wireframes, flows, prototypes', human: 'Judges the generations' },
    { role: 'Front Dev', ai: 'Integration, Design System', human: 'Implements' },
    { role: 'Product Owner', ai: 'Specs, prioritisation', human: 'Tests on standalone prototypes' },
  ],
};
const ROLE_ICONS = [UserCheck, PenTool, Code2, ClipboardList];

export function RoleCards({ lang }: { lang: Lang }) {
  return (
    <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
      {ROLES[lang].map((r, i) => {
        const Icon = ROLE_ICONS[i];
        return (
          <li key={r.role} className="rounded-2xl border border-line bg-elevated p-4">
            <span className="flex items-center gap-2 text-[13.5px] font-semibold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text">
                <Icon size={14} aria-hidden />
              </span>
              {r.role}
            </span>
            <span className="mt-3 flex items-start gap-2 text-[12.5px] leading-snug text-ink">
              <span className="tag shrink-0 bg-[var(--ai-tint)] text-[var(--ai-text)]">
                <Bot size={12} aria-hidden /> Claude
              </span>
              <span className="font-light">{r.ai}</span>
            </span>
            <span className="mt-1.5 block text-[12.5px] font-medium leading-snug text-ink">{r.human}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ Relais & onboarding */

const RELAY: Localized<{ handoff: string; chips: string[]; onboarding: string; steps: string[]; note: string }> = {
  fr: {
    handoff: 'Passer le relais sans perte',
    chips: ['Fichier d’état tenu à jour', 'Prompt de reprise prêt à coller', 'Mémoire dans des fichiers'],
    onboarding: 'Onboarding par un seul prompt',
    steps: ['Contexte', 'Outils', 'Accès', 'Dépôts', 'Arborescence', 'Opérationnel'],
    note: 'Opérationnel en quelques heures, en autonomie.',
  },
  en: {
    handoff: 'Handoffs without loss',
    chips: ['Status file kept up to date', 'Ready-to-paste kickoff prompt', 'Memory kept in files'],
    onboarding: 'Onboarding from a single prompt',
    steps: ['Context', 'Tools', 'Access', 'Repositories', 'Tree', 'Operational'],
    note: 'Operational within a few hours, autonomously.',
  },
};

export function RelaySteps({ lang }: { lang: Lang }) {
  const r = RELAY[lang];
  return (
    <div className="my-4 rounded-2xl border border-line bg-elevated p-4">
      <p className="eyebrow text-muted">{r.handoff}</p>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {r.chips.map((c) => (
          <li key={c} className="tag bg-olive-tint text-olive-text">
            {c}
          </li>
        ))}
      </ul>
      <p className="eyebrow mt-5 text-muted">{r.onboarding}</p>
      <ol className="mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {r.steps.map((st, i) => {
          const last = i === r.steps.length - 1;
          return (
            <li key={st} className="flex items-center gap-1.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[12px] font-medium ${
                  last ? 'bg-accent text-accent-fg' : 'border border-line bg-bg text-ink'
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                    last ? 'bg-accent-fg text-accent' : 'bg-accent-tint text-accent-text'
                  }`}
                >
                  {i + 1}
                </span>
                {st}
              </span>
              {!last && <ArrowRight size={12} className="text-muted" aria-hidden />}
            </li>
          );
        })}
      </ol>
      <p className="mt-2.5 text-[12px] font-light text-muted">{r.note}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ Test du skill */

const TEST: Localized<{ caption: string; criterion: string; without: string; withSkill: string; yes: string; no: string; rows: [string, boolean, boolean][]; note: string }> = {
  fr: {
    caption: 'Même demande, sur un projet vide : une page complète de portfolio conversationnel',
    criterion: 'Critère',
    without: 'Sans le skill',
    withSkill: 'Avec le skill',
    yes: 'Respecté',
    no: 'Non respecté',
    rows: [
      ['Icône à droite du libellé dans chaque bouton', false, true],
      ['Carte de suggestion à structure fixe', false, true],
      ['Contact par email en bouton plein, CV en contour', false, true],
      ['Chiffres clés en couleur neutre', false, true],
      ['Aucun texte tout en majuscules', true, true],
      ['Menu mobile en tiroir partiel', true, true],
      ['Aucune couleur en dur, aucune ombre non prévue', true, true],
    ],
    note: 'Un essai par version. Sur le projet complet, le skill ne change rien : l’agent déduit les règles du code existant. Il sert donc là où le code ne montre pas encore l’exemple.',
  },
  en: {
    caption: 'Same request, on an empty project: a full conversational portfolio page',
    criterion: 'Criterion',
    without: 'Without the skill',
    withSkill: 'With the skill',
    yes: 'Met',
    no: 'Not met',
    rows: [
      ['Icon to the right of the label in every button', false, true],
      ['Suggestion card with a fixed structure', false, true],
      ['Email contact as filled button, CV outlined', false, true],
      ['Key figures in neutral colour', false, true],
      ['No all-caps text', true, true],
      ['Mobile menu as a partial drawer', true, true],
      ['No hard-coded colour, no unplanned shadow', true, true],
    ],
    note: 'One run per version. On the full project the skill changes nothing: the agent infers the rules from the existing code. So it is useful where the code does not yet show the example.',
  },
};

function Mark({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${ok ? 'bg-olive-tint text-olive-text' : 'bg-[var(--warn-tint)] text-[var(--warn-text)]'}`}
    >
      {ok ? <Check size={11} strokeWidth={3} aria-hidden /> : <X size={11} strokeWidth={3} aria-hidden />}
    </span>
  );
}

export function SkillTest({ lang }: { lang: Lang }) {
  const t = TEST[lang];
  const score = (i: 1 | 2) => `${t.rows.filter((r) => r[i]).length} / ${t.rows.length}`;
  return (
    <figure className="my-4 overflow-hidden rounded-2xl border border-line bg-elevated">
      <figcaption className="eyebrow border-b border-line px-4 py-2.5 text-muted">{t.caption}</figcaption>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th className="eyebrow px-4 py-2.5 font-semibold text-ink">{t.criterion}</th>
            <th className="eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28">{t.without}</th>
            <th className="eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28">{t.withSkill}</th>
          </tr>
        </thead>
        <tbody>
          {t.rows.map(([label, a, b]) => (
            <tr key={label} className="border-b border-line">
              <td className="px-4 py-2 text-[12.5px] font-light leading-snug text-ink">{label}</td>
              <td className="px-2 py-2 text-center"><Mark ok={a} label={a ? t.yes : t.no} /></td>
              <td className="px-2 py-2 text-center"><Mark ok={b} label={b ? t.yes : t.no} /></td>
            </tr>
          ))}
          <tr>
            <td className="px-4 py-2.5" />
            <td className="px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink">{score(1)}</td>
            <td className="px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink">{score(2)}</td>
          </tr>
        </tbody>
      </table>
      <p className="border-t border-line px-4 py-2.5 text-[12px] font-light leading-snug text-muted">{t.note}</p>
    </figure>
  );
}

/* ------------------------------------------------------------------ Ce que les tests ont appris */

const LESSONS: Localized<{ seen: string; fixed: string; items: { seen: string; fixed: string }[] }> = {
  fr: {
    seen: 'Ce qu’elle a vu',
    fixed: 'La règle corrigée',
    items: [
      { seen: 'Des chiffres clés qui se chevauchent et un trait qui ne sépare rien.', fixed: 'Des consignes de mise en page : une grille, un trait seulement entre deux contenus.' },
      { seen: 'Deux boutons de même poids côte à côte, la couleur d’action au mauvais endroit.', fixed: 'Une hiérarchie des actions : un bouton plein vert, l’autre en contour.' },
      { seen: 'Un menu sans bouton pour le replier, la langue écrite en toutes lettres.', fixed: 'L’anatomie complète du menu et les deux versions du sélecteur.' },
    ],
  },
  en: {
    seen: 'What she saw',
    fixed: 'The rule she fixed',
    items: [
      { seen: 'Key figures overlapping and a line that separated nothing.', fixed: 'Layout guidance: a grid, and a line only between two contents.' },
      { seen: 'Two buttons of equal weight side by side, the action colour in the wrong place.', fixed: 'An action hierarchy: one filled green button, the other outlined.' },
      { seen: 'A menu with no button to collapse it, the language written out in full.', fixed: 'The full anatomy of the menu and both versions of the control.' },
    ],
  },
};

export function SkillLessons({ lang }: { lang: Lang }) {
  const t = LESSONS[lang];
  return (
    <ol className="my-4 space-y-2">
      {t.items.map((it, i) => (
        <li key={it.seen} className="flex gap-3 rounded-2xl border border-line bg-elevated p-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">{i + 1}</span>
          <span className="grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
            <span className="min-w-0">
              <span className="eyebrow block text-muted">{t.seen}</span>
              <span className="mt-0.5 block text-[12.5px] font-light leading-snug text-ink">{it.seen}</span>
            </span>
            <span className="min-w-0">
              <span className="eyebrow block text-muted">{t.fixed}</span>
              <span className="mt-0.5 block text-[12.5px] font-medium leading-snug text-ink">{it.fixed}</span>
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ GRDF : images et prototype */

const grdfImage = (file: string) => `${import.meta.env.BASE_URL}grdf/${file}.jpg`;

const COMPARE: Localized<{ before: string; after: string; slider: string; caption: string }> = {
  fr: { before: 'Avant', after: 'Après', slider: 'Déplacer la séparation entre avant et après', caption: 'La page d’accueil sur ordinateur : Act4Gaz, puis justdecarb.grdf.fr. Faites glisser la séparation.' },
  en: { before: 'Before', after: 'After', slider: 'Move the divider between before and after', caption: 'The home page on desktop: Act4Gaz, then justdecarb.grdf.fr. Drag the divider.' },
};

/** Comparaison interactive : une séparation que l'on fait glisser entre l'ancien écran et le nouveau. */
export function GrdfCompare({ lang }: { lang: Lang }) {
  const t = COMPARE[lang];
  const [pos, setPos] = useState(50);
  return (
    <figure className="my-4">
      <div className="relative aspect-[16/10] select-none overflow-hidden rounded-2xl border border-line bg-elevated">
        <img src={grdfImage('apres-accueil')} alt={t.after} className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={grdfImage('avant-accueil')} alt={t.before} className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <span className="tag absolute left-3 top-3 bg-ink text-bg">{t.before}</span>
        <span className="tag absolute right-3 top-3 bg-ink text-bg">{t.after}</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg">
            <ChevronsLeftRight size={16} aria-hidden />
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={t.slider}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-2 text-[12.5px] font-light leading-snug text-muted">{t.caption}</figcaption>
    </figure>
  );
}

type GrdfSet = 'persona' | 'map' | 'moodboard' | 'screens';

const GRDF_SHOTS: Record<GrdfSet, { file: string; caption: Localized }[]> = {
  persona: [{ file: 'persona', caption: { fr: 'Le persona : Julien, ses besoins, ce qu’il aime, ses frustrations', en: 'The persona: Julien, his needs, likes and frustrations' } }],
  map: [{ file: 'parcours', caption: { fr: 'Carte d’expérience sur l’ancienne plateforme : actions, réflexions, émotions', en: 'Experience map on the old platform: actions, thoughts, emotions' } }],
  moodboard: [{ file: 'moodboard', caption: { fr: 'Moodboard de la nouvelle identité', en: 'Moodboard for the new identity' } }],
  screens: [
    { file: 'apres-accueil', caption: { fr: 'La une : un contenu à la fois, puis les chiffres clés', en: 'Front page: one piece of content at a time, then the key figures' } },
    { file: 'apres-contenus', caption: { fr: 'Les contenus : une thématique, puis un filtre par format', en: 'Content: a topic, then a filter by format' } },
  ],
};

export function GrdfGallery({ lang, set }: { lang: Lang; set: GrdfSet }) {
  const shots = GRDF_SHOTS[set];
  const single = shots.length === 1;
  return (
    // Le persona est une image en hauteur : on la limite en largeur pour qu'elle tienne à l'écran sans défiler
    <ul className={`my-4 grid grid-cols-1 gap-3 ${single ? '' : 'sm:grid-cols-2'} ${set === 'persona' ? 'max-w-[420px]' : ''}`}>
      {shots.map((shot) => (
        <li key={shot.file} className="flex">
          {/* La carte prend toute la hauteur de sa ligne : les légendes ont ainsi la même hauteur, celle de la plus longue */}
          <a href={grdfImage(shot.file)} target="_blank" rel="noopener noreferrer" className="t-all flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule">
            {/* Une image seule s'affiche en entier ; une paire est recadrée à la même hauteur */}
            <img src={grdfImage(shot.file)} alt={shot.caption[lang]} loading="lazy" className={single ? 'block h-auto w-full' : 'block aspect-[16/10] w-full object-cover object-top'} />
            <span className="block flex-1 border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted">{shot.caption[lang]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Le prototype Figma, en version mobile, intégré à la fin de l'étude de cas : il charge pendant la lecture. */
export function GrdfPrototype({ id, lang }: { id: string; lang: Lang }) {
  const t = grdfStrings[lang];
  return (
    <section id={id} className="mt-6 scroll-mt-16 rounded-3xl border border-line bg-elevated p-5">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <p className="eyebrow text-muted">{t.protoEyebrow}</p>
          <h3 className="mt-1 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink">{t.ctaTitle}</h3>
          <p className="mt-2 text-[13.5px] font-light leading-relaxed text-muted">{t.ctaText}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={GRDF_SITE} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.site} <ArrowUpRight size={15} aria-hidden />
            </a>
            <a href={GRDF_PROTOTYPE_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {t.openFigma} <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </div>
        {/* ds-ignore: le prototype est toujours clair, son support reste blanc dans les deux thèmes */}
        <div className="relative mx-auto aspect-[375/700] w-[300px] max-w-full overflow-hidden rounded-xl border border-rule bg-white">
          {/* Le cadre Figma dépasse en haut et en bas : ses flèches de navigation sortent du champ et ne recouvrent plus le menu du prototype */}
          <iframe src={GRDF_PROTOTYPE} title={t.viewerTitle} loading="eager" allowFullScreen className="absolute inset-x-0 -top-10 block h-[calc(100%+5rem)] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Rebranding : images et maquettes défilantes */

const rebrandImage = (file: string) => `${import.meta.env.BASE_URL}rebrand/${file}.jpg`;

const REBRAND: Localized<{ logo: string; hero: string; desktop: string; mobile: string; scroll: string }> = {
  fr: {
    logo: 'Le nouveau logo',
    hero: 'Haut de la page d’accueil : le montage photo',
    desktop: 'La page d’accueil sur ordinateur',
    mobile: 'Sur mobile',
    scroll: 'Maquette à faire défiler',
  },
  en: {
    logo: 'The new logo',
    hero: 'Top of the home page: the photo composite',
    desktop: 'The home page on desktop',
    mobile: 'On mobile',
    scroll: 'Scrollable mockup',
  },
};

export function RebrandShot({ lang, shot }: { lang: Lang; shot: 'logo' | 'hero' }) {
  const caption = REBRAND[lang][shot];
  return (
    <figure className={`my-4 overflow-hidden rounded-2xl border border-line bg-elevated ${shot === 'logo' ? 'max-w-[420px]' : ''}`}>
      <img src={rebrandImage(shot)} alt={caption} loading="lazy" className="block h-auto w-full" />
      <figcaption className="border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted">{caption}</figcaption>
    </figure>
  );
}

/** Une maquette très haute, dans un cadre à hauteur fixe que l'on fait défiler comme une vraie page. */
function ScrollFrame({ file, caption, label, phone }: { file: string; caption: string; label: string; phone?: boolean }) {
  return (
    <figure className={phone ? 'mx-auto w-[230px] max-w-full' : 'min-w-0'}>
      <div
        tabIndex={0}
        role="region"
        aria-label={`${label} — ${caption}`}
        className={`h-[460px] overflow-y-auto border bg-elevated ${phone ? 'rounded-xl border-rule' : 'rounded-2xl border-line'}`}
      >
        <img src={rebrandImage(file)} alt={caption} loading="lazy" className="block h-auto w-full" />
      </div>
      <figcaption className="mt-2 text-[12.5px] font-light leading-snug text-muted">{caption}</figcaption>
    </figure>
  );
}

export function RebrandScreens({ lang }: { lang: Lang }) {
  const t = REBRAND[lang];
  return (
    <div className="my-4 grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_230px]">
      <ScrollFrame file="desktop" caption={t.desktop} label={t.scroll} />
      <ScrollFrame file="mobile" caption={t.mobile} label={t.scroll} phone />
    </div>
  );
}
