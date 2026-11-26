import { useRef, useState, type ReactNode } from 'react';
import {
  ArrowDownToLine, ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Bot, Check, ChevronDown, Compass, Copy,
  FileText, Folder, FolderOpen, Mail, Menu, Moon, PanelLeft, Play, Repeat, Square, Sun, TriangleAlert, UserRound, X,
} from 'lucide-react';
import { covenantBoard } from '../data/covenantFlow';
import { dsGroups, dsStrings, getDsPages, type DsPage as DsPageBase } from '../data/designSystem';
import { SKILL_FOLDER } from '../data/skillExample';
import { splitList } from '../lib/dsParser';
import type { UIStrings } from '../data/i18n';
import type { Lang, Localized } from '../types';

type DsPage = DsPageBase & { path: string };
import { FigureTiles, GrdfCompare, PrincipleCards } from './CaseVisuals';
import FlowBoard from './FlowBoard';
import Markdown from './Markdown';
import Monogram from './Monogram';
import PromptInput from './PromptInput';
import SectionNav from './SectionNav';

/**
 * Page « Design System » : fondations, styles et composants du portfolio.
 * Architecture inspirée de Material : navigation à gauche par niveau, une page par sujet,
 * et pour chaque composant variantes, anatomie, états, à faire / à éviter.
 * Les textes viennent de `src/data/designSystem.ts` ; ce fichier ne porte que les exemples vivants.
 */

interface Props {
  lang: Lang;
  t: UIStrings;
}

/* ------------------------------------------------------------------ Textes des exemples */

const SAMPLE: Localized<Record<string, string>> = {
  fr: {
    contact: 'Me contacter', cv: 'Voir le CV', open: 'Ouvrir le prototype', cancel: 'Annuler', send: 'Envoyer',
    copy: 'Copier l’adresse', copied: 'Copié', newChat: 'Nouvelle conversation', email: 'Contacter par email',
    result: 'Résultat', friction: 'Relances répétées', repeat: 'Pour chaque période', close: 'Fermer', menu: 'Menu',
    collapse: 'Replier', stop: 'Arrêter', q1: 'Quel a été son rôle ?', q2: 'Voir le projet Covenant',
    question: 'Quel est son parcours ?', answer: 'Anne-Sophie est Product Designer, spécialisée en **UX/UI**, Design Ops et workflows IA.',
    ctaTitle: 'Essayez le parcours vous-même', ctaText: 'Le prototype s’ouvre ici, sans quitter le portfolio.',
    dialogTitle: 'Écrire à Anne-Sophie', dialogBody: 'Le contenu de la fenêtre.', mailApp: 'Ouvrir ma messagerie',
    placeholder: 'Votre message…', title: 'Titre de section', body: 'Texte courant, pour lire sans effort.',
    caption: 'Légende ou détail', label: 'Petit libellé', figure: 'Chiffre clé', display: 'Titre d’accueil',
    card: 'Carte', control: 'Bouton, tag, pastille', inner: 'Élément interne', promptZone: 'Zone de saisie',
    noShadow: 'Carte : pas d’ombre', yes: 'Oui', no: 'Non', ordered: 'Des étapes : numéros', unordered: 'Des sujets : icônes',
    step1: 'Comprendre', step2: 'Concevoir', topic1: 'Profil', topic2: 'Impact', projects: 'Projets professionnels', personal: 'Projets personnels',
    p1: 'Cadrer une équipe UX augmentée', p2: 'Covenant monitoring', ctx: 'Contexte', approach: 'Démarche', outcome: 'Résultat',
    tableMd: '| Cas | Ce que fait l’outil |\n|---|---|\n| Document reçu | Extraction par l’IA |\n| Valeur douteuse | Signalée à l’analyste |\n| Seuil dépassé | Alerte |',
    s1: 'Profil & valeur ajoutée', s1t: 'Résume le profil d’Anne-Sophie en quelques lignes.', s2: 'Impact & chiffres clés', s2t: 'Quels sont ses résultats mesurables ?',
    cPrimary: 'Action principale', cPositive: 'Élément positif', cSecondary: 'Action secondaire, étape, lien', cAi: 'Ce qui vient de l’IA', cWarn: 'Friction, alerte', cPunct: 'Ponctuation',
    bg: 'Fond de page', sidebar: 'Menu latéral', elevated: 'Carte, champ', surface2: 'Survol, neutre', ink: 'Texte principal', muted: 'Texte secondaire', inverse: 'Neutre inversé',
    pair: 'Couple', thLight: 'Clair', thDark: 'Sombre', pInk: 'Texte principal sur fond', pMuted: 'Texte secondaire sur fond', pBtn: 'Bouton principal', pTagOk: 'Tag olive pâle', pTagAi: 'Tag IA', pTagWarn: 'Tag friction', pVerm: 'Vermillon (ponctuation)',
    m1: 'ASL Court', m1h: 'L’essentiel', m2: 'ASL Complet', m2h: 'La réponse structurée', m3: 'ASL Détaillé', m3h: 'Avec la méthode',
    r1t: 'Aucune couleur en dur', r1: 'Tout passe par un token, donc les deux thèmes fonctionnent.', r2t: 'Surfaces neutres et unies', r2: 'La couleur vit dans les petits éléments qui portent un sens.',
    r3t: 'L’ombre est réservée', r3: 'La zone de saisie et l’action principale, rien d’autre.', r4t: 'Une couleur, un seul sens', r4: 'Si aucun sens ne correspond, on reste neutre.',
  },
  en: {
    contact: 'Contact me', cv: 'View the CV', open: 'Open the prototype', cancel: 'Cancel', send: 'Send',
    copy: 'Copy the address', copied: 'Copied', newChat: 'New conversation', email: 'Contact by email',
    result: 'Outcome', friction: 'Repeated reminders', repeat: 'For each period', close: 'Close', menu: 'Menu',
    collapse: 'Collapse', stop: 'Stop', q1: 'What was her role?', q2: 'See the Covenant project',
    question: 'What is her background?', answer: 'Anne-Sophie is a Product Designer, specialised in **UX/UI**, Design Ops and AI workflows.',
    ctaTitle: 'Try the journey yourself', ctaText: 'The prototype opens here, without leaving the portfolio.',
    dialogTitle: 'Write to Anne-Sophie', dialogBody: 'The dialog content.', mailApp: 'Open my mail app',
    placeholder: 'Your message…', title: 'Section title', body: 'Body text, effortless to read.',
    caption: 'Caption or detail', label: 'Small label', figure: 'Key figure', display: 'Welcome title',
    card: 'Card', control: 'Button, tag, badge', inner: 'Inner element', promptZone: 'Prompt area',
    noShadow: 'Card: no shadow', yes: 'Do', no: 'Don’t', ordered: 'Steps: numbers', unordered: 'Topics: icons',
    step1: 'Understand', step2: 'Design', topic1: 'Profile', topic2: 'Impact', projects: 'Work projects', personal: 'Personal projects',
    p1: 'Framing an AI-augmented UX team', p2: 'Covenant monitoring', ctx: 'Context', approach: 'Approach', outcome: 'Outcome',
    tableMd: '| Case | What the tool does |\n|---|---|\n| Document received | AI extraction |\n| Doubtful value | Flagged to the analyst |\n| Threshold exceeded | Alert |',
    s1: 'Profile & added value', s1t: 'Sum up Anne-Sophie’s profile in a few lines.', s2: 'Impact & key figures', s2t: 'What are her measurable results?',
    cPrimary: 'Main action', cPositive: 'Positive element', cSecondary: 'Secondary action, step, link', cAi: 'What comes from the AI', cWarn: 'Friction, alert', cPunct: 'Punctuation',
    bg: 'Page background', sidebar: 'Side menu', elevated: 'Card, field', surface2: 'Hover, neutral', ink: 'Main text', muted: 'Secondary text', inverse: 'Inverted neutral',
    pair: 'Pair', thLight: 'Light', thDark: 'Dark', pInk: 'Main text on background', pMuted: 'Secondary text on background', pBtn: 'Primary button', pTagOk: 'Pale olive tag', pTagAi: 'AI tag', pTagWarn: 'Friction tag', pVerm: 'Vermilion (punctuation)',
    m1: 'ASL Short', m1h: 'The essentials', m2: 'ASL Full', m2h: 'The structured answer', m3: 'ASL In-depth', m3h: 'With the method',
    r1t: 'No hard-coded colour', r1: 'Everything goes through a token, so both themes work.', r2t: 'Neutral, flat surfaces', r2: 'Colour lives in the small elements that carry meaning.',
    r3t: 'The shadow is reserved', r3: 'The prompt area and the main action, nothing else.', r4t: 'One colour, one meaning', r4: 'If no meaning fits, stay neutral.',
  },
};

/* ------------------------------------------------------------------ Briques d'exemple */

const TAG = 'tag';
const SEG = 't-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold';
const CHIP =
  't-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2';

function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

function Swatch({ cls, name, label, border }: { cls: string; name: string; label: string; border?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span className={`h-10 w-10 shrink-0 rounded-2xl ${cls} ${border ? 'border border-line' : ''}`} aria-hidden />
      <span className="min-w-0">
        <span className="block text-[13px] font-medium leading-snug text-ink">{label}</span>
        <code className="font-mono text-[11.5px] text-muted">{name}</code>
      </span>
    </li>
  );
}

function Specimen({ id, lang, t }: { id: string; lang: Lang; t: UIStrings }) {
  const s = SAMPLE[lang];
  const [seg, setSeg] = useState(0);
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(true);
  const [model, setModel] = useState(0);
  const [streaming, setStreaming] = useState(false);
  const [drawer, setDrawer] = useState(true);

  switch (id) {
    case 'hierarchy':
      return (
        <Row>
          <button className="btn-primary">{s.contact} <Mail size={16} aria-hidden /></button>
          <button className="btn-secondary">{s.cv} <ArrowDownToLine size={16} aria-hidden /></button>
          <button className="icon-btn" aria-label={s.close}><X size={18} aria-hidden /></button>
        </Row>
      );

    case 'nocaps':
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-elevated p-4">
            <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-olive-text"><Check size={13} aria-hidden /> {s.yes}</p>
            <Row>
              <button className="btn-primary !px-4 !py-2">{s.contact}</button>
              <span className={`${TAG} bg-olive-tint text-olive-text`}>{s.result}</span>
            </Row>
          </div>
          <div className="rounded-2xl border border-line bg-elevated p-4">
            <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--warn-text)]"><X size={13} aria-hidden /> {s.no}</p>
            <Row>
              {/* Contre-exemple : la casse est écrite dans le texte, pas par une classe */}
              <span className="inline-flex items-center rounded-full bg-olive px-4 py-2 text-[11.5px] font-semibold tracking-[0.14em] text-olive-fg">{s.contact.toUpperCase()}</span>
              <span className="rounded-full bg-olive-tint px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-olive-text">{s.result.toUpperCase()}</span>
            </Row>
          </div>
        </div>
      );

    case 'numbericon':
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-elevated p-4">
            <p className="eyebrow mb-3 text-muted">{s.ordered}</p>
            <Row>
              {[s.step1, s.step2].map((x, i) => (
                <span key={x} className="inline-flex items-center gap-2 text-[13px] font-medium text-ink">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">{i + 1}</span> {x}
                </span>
              ))}
            </Row>
          </div>
          <div className="rounded-2xl border border-line bg-elevated p-4">
            <p className="eyebrow mb-3 text-muted">{s.unordered}</p>
            <Row>
              {[{ I: UserRound, x: s.topic1 }, { I: BarChart3, x: s.topic2 }].map(({ I, x }) => (
                <span key={x} className="inline-flex items-center gap-2 text-[13px] font-medium text-ink">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text"><I size={14} aria-hidden /></span> {x}
                </span>
              ))}
            </Row>
          </div>
        </div>
      );

    case 'neutrals':
      return (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          <Swatch cls="bg-bg" name="bg-bg" label={s.bg} border />
          <Swatch cls="bg-sidebar" name="bg-sidebar" label={s.sidebar} border />
          <Swatch cls="bg-elevated" name="bg-elevated" label={s.elevated} border />
          <Swatch cls="bg-surface-2" name="bg-surface-2" label={s.surface2} border />
          <Swatch cls="bg-ink" name="text-ink · bg-ink" label={`${s.ink} · ${s.inverse}`} />
          <Swatch cls="bg-muted" name="text-muted" label={s.muted} />
        </ul>
      );

    case 'meanings':
      return (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          <Swatch cls="bg-olive" name="bg-olive" label={s.cPrimary} />
          <Swatch cls="bg-olive-tint" name="bg-olive-tint" label={s.cPositive} border />
          <Swatch cls="bg-accent" name="bg-accent" label={s.cSecondary} />
          <Swatch cls="bg-[var(--ai)]" name="--ai" label={s.cAi} />
          <Swatch cls="bg-[var(--warn-tint)]" name="--warn-tint" label={s.cWarn} border />
          <Swatch cls="bg-vermillion" name="bg-vermillion" label={s.cPunct} />
        </ul>
      );

    case 'typescale':
      return (
        <ul className="space-y-4">
          {[
            { cls: 'font-display text-[2rem] font-semibold leading-none tracking-[-0.035em]', label: s.display, spec: 'Poppins · semibold' },
            { cls: 'font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em]', label: s.figure, spec: 'Poppins · 1.7rem' },
            { cls: 'font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]', label: s.title, spec: 'Poppins · 1.2rem' },
            { cls: 'text-[15px] font-light leading-relaxed', label: s.body, spec: 'Outfit · 15px · light' },
            { cls: 'eyebrow', label: s.label, spec: 'Outfit · 12.5px · medium' },
            { cls: 'text-xs font-light text-muted', label: s.caption, spec: 'Outfit · 12px · light' },
          ].map((r) => (
            <li key={r.spec} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0 last:pb-0">
              <span className={`min-w-0 text-ink ${r.cls}`}>{r.label}</span>
              <code className="shrink-0 font-mono text-[11.5px] text-muted">{r.spec}</code>
            </li>
          ))}
        </ul>
      );

    case 'shapes':
      return (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { cls: 'rounded-full', label: s.control, spec: 'rounded-full' },
            { cls: 'rounded-3xl', label: s.card, spec: 'rounded-3xl' },
            { cls: 'rounded-2xl', label: s.inner, spec: 'rounded-2xl' },
          ].map((r) => (
            <li key={r.spec}>
              <span className={`block h-16 border border-rule bg-elevated ${r.cls}`} aria-hidden />
              <span className="mt-2 block text-[13px] font-medium text-ink">{r.label}</span>
              <code className="font-mono text-[11.5px] text-muted">{r.spec}</code>
            </li>
          ))}
        </ul>
      );

    case 'elevation':
      return (
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-3">
          <div className="flex h-12 items-center rounded-[28px] border border-line bg-elevated px-4 text-[13px] font-light text-muted shadow-signature">{s.promptZone}</div>
          <div className="flex justify-center"><button className="btn-primary">{s.contact}</button></div>
          <div className="flex h-12 items-center rounded-2xl border border-line bg-elevated px-4 text-[13px] font-light text-muted">{s.noShadow}</div>
        </div>
      );

    case 'iconplace':
      return (
        <Row>
          <button className="btn-secondary">{s.cv} <ArrowDownToLine size={16} aria-hidden /></button>
          <span className={`${TAG} bg-[var(--ai-tint)] text-[var(--ai-text)]`}><Bot size={12} aria-hidden /> Claude</span>
        </Row>
      );

    case 'buttons':
      return (
        <Row>
          <button className="btn-primary">{s.contact} <Mail size={16} aria-hidden /></button>
          <button className="btn-secondary">{s.cv} <ArrowDownToLine size={16} aria-hidden /></button>
          <button className="btn-primary">{s.open}</button>
          <button className="btn-secondary">{s.cancel}</button>
        </Row>
      );

    case 'buttons-wide':
      return (
        <div className="w-full max-w-[280px] space-y-2 rounded-3xl bg-sidebar p-4">
          <button className="btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2">
            {s.newChat}
            <span className="icon-chip bg-olive text-base leading-none text-olive-fg">+</span>
          </button>
          <button className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
            {s.email}
            <span className="icon-chip bg-olive-fg text-olive"><Mail size={13} strokeWidth={2.25} aria-hidden /></span>
          </button>
          <button className="btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2">
            {s.cv}
            <span className="icon-chip bg-accent text-accent-fg"><ArrowDownToLine size={14} strokeWidth={2.25} aria-hidden /></span>
          </button>
        </div>
      );

    case 'buttons-states':
      return (
        <Row>
          <button className="btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none" disabled>{s.send} <Mail size={16} aria-hidden /></button>
          <button
            className="btn-secondary"
            onClick={() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            }}
          >
            {copied ? s.copied : s.copy} {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          </button>
        </Row>
      );

    case 'iconbuttons':
      return (
        <Row>
          <button className="icon-btn" aria-label={s.close}><X size={18} aria-hidden /></button>
          <button className="icon-btn" aria-label={s.menu}><Menu size={19} aria-hidden /></button>
          <button className="icon-btn" aria-label={s.collapse}><PanelLeft size={18} aria-hidden /></button>
          <span className="mx-1 h-6 w-px bg-line" aria-hidden />
          <button aria-label={s.send} className="t-all flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover">
            <ArrowUp size={18} strokeWidth={2.5} aria-hidden />
          </button>
          <button aria-label={s.stop} className="t-all flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85">
            <Square size={14} className="fill-current" aria-hidden />
          </button>
        </Row>
      );

    case 'segmented':
      return (
        <Row>
          <div role="group" aria-label={t.theme} className="flex w-56 rounded-full border border-line p-0.5">
            {[{ x: t.light, I: Sun }, { x: t.dark, I: Moon }].map(({ x, I }, i) => (
              <button key={x} aria-pressed={seg === i} onClick={() => setSeg(i)} className={`${SEG} ${seg === i ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`}>
                {x} <I size={12} className="text-vermillion" aria-hidden />
              </button>
            ))}
          </div>
          <div role="group" aria-label={t.language} className="flex w-36 rounded-full border border-line p-0.5">
            <span className={`${SEG} bg-ink text-bg`}>FR</span>
            <span className={`${SEG} text-muted`}>EN</span>
          </div>
        </Row>
      );

    case 'chips':
      return (
        <Row>
          {[s.q1, s.q2].map((q) => (
            <button key={q} className={CHIP}>
              {q} <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
            </button>
          ))}
        </Row>
      );

    case 'tags':
      return (
        <Row>
          <span className={`${TAG} bg-olive-tint text-olive-text`}>{s.result}</span>
          <span className={`${TAG} bg-[var(--ai-tint)] text-[var(--ai-text)]`}><Bot size={12} aria-hidden /> Claude</span>
          <span className={`${TAG} bg-[var(--warn-tint)] text-[var(--warn-text)]`}><TriangleAlert size={12} aria-hidden /> {s.friction}</span>
          <span className={`${TAG} border border-rule text-ink`}><Repeat size={12} aria-hidden /> {s.repeat}</span>
        </Row>
      );

    case 'badges':
      return (
        <Row>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint text-accent-text"><Compass size={15} aria-hidden /></span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">1</span>
          <span className="icon-chip bg-olive text-olive-fg"><Mail size={13} aria-hidden /></span>
          <Monogram size={40} />
        </Row>
      );

    case 'messages':
      return (
        <div className="space-y-5">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg">{s.question}</div>
          </div>
          <div className="flex gap-4">
            <div className="mt-0.5 hidden sm:block"><Monogram size={34} /></div>
            <div className="min-w-0 flex-1">
              <div className="eyebrow mb-2.5 flex items-center gap-2.5">
                <span className="font-semibold text-ink">{t.assistantName}</span>
                <span className="h-px w-5 bg-rule" aria-hidden />
                <span className="text-muted">{t.models.standard.name}</span>
              </div>
              <Markdown text={s.answer} />
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-primary">{s.contact} <Mail size={16} aria-hidden /></button>
                <button className="btn-secondary">{s.cv} <ArrowDownToLine size={16} aria-hidden /></button>
              </div>
            </div>
          </div>
        </div>
      );

    case 'card-suggestion':
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[{ I: UserRound, a: s.s1, b: s.s1t }, { I: BarChart3, a: s.s2, b: s.s2t }].map(({ I, a, b }) => (
            <button key={a} className="t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule">
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text"><I size={15} aria-hidden /></span>
                <span className="eyebrow flex-1 font-semibold text-ink">{a}</span>
                <ArrowUpRight size={15} className="t-all shrink-0 text-muted group-hover:text-ink" aria-hidden />
              </span>
              <span className="text-[14.5px] font-light leading-relaxed text-ink">{b}</span>
            </button>
          ))}
        </div>
      );

    case 'card-numbered':
      return <PrincipleCards lang={lang} />;

    case 'card-cta':
      return (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5">
          <div className="min-w-0 flex-1 basis-56">
            <p className="text-sm font-semibold text-ink">{s.ctaTitle}</p>
            <p className="mt-1 text-[13px] font-light leading-relaxed text-muted">{s.ctaText}</p>
          </div>
          <button className="btn-primary">{s.open} <Play size={14} className="fill-current" aria-hidden /></button>
        </div>
      );

    case 'table':
      return <Markdown text={s.tableMd} />;

    case 'sidemenu':
      return (
        <div className="relative flex h-72 overflow-hidden rounded-3xl border border-line bg-bg">
          <div className={`t-all flex shrink-0 flex-col overflow-hidden bg-sidebar ${drawer ? 'w-[62%] max-w-[250px] border-r border-line p-4' : 'w-0 p-0'}`}>
            <div className="flex items-center gap-2.5">
              <Monogram size={32} />
              <p className="min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-ink">Anne-Sophie Leroy</p>
            </div>
            <p className="mt-5 flex items-center gap-2 text-[12.5px] font-medium text-ink">
              <FolderOpen size={13} className="shrink-0 text-accent-text" aria-hidden />
              <span className="min-w-0 flex-1 truncate">{s.projects}</span>
              <ChevronDown size={13} className="rotate-180 text-muted" aria-hidden />
            </p>
            <ul className="mt-2 space-y-2 pl-2">
              {[s.p1, s.p2].map((p, i) => (
                <li key={p} className="flex items-baseline gap-2.5 text-[12.5px] leading-snug text-ink">
                  <span className="font-display text-[12px] font-medium italic text-accent-text">0{i + 1}</span> {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-2 text-[12.5px] font-medium text-ink">
              <Folder size={13} className="shrink-0 text-accent-text" aria-hidden />
              <span className="min-w-0 flex-1 truncate">{s.personal}</span>
              <ChevronDown size={13} className="text-muted" aria-hidden />
            </p>
            <span className="mt-auto inline-flex items-center justify-between rounded-full bg-olive py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-olive-fg">
              {s.email}
              <span className="icon-chip !h-5 !w-5 bg-olive-fg text-olive"><Mail size={11} aria-hidden /></span>
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center gap-2 border-b border-line px-3 py-2">
              <button onClick={() => setDrawer(!drawer)} aria-label={s.collapse} aria-expanded={drawer} className="icon-btn">
                <PanelLeft size={18} aria-hidden />
              </button>
              <p className="eyebrow min-w-0 flex-1 truncate text-ink">{s.newChat}</p>
            </div>
          </div>
        </div>
      );

    case 'anchors':
      return (
        <div className="px-1">
          <SectionNav label={t.caseStudies} links={[{ id: 'ds-top', label: s.ctx }, { id: 'ds-anchor-2', label: s.approach }, { id: 'ds-anchor-3', label: s.outcome }]} />
        </div>
      );

    case 'tabs':
      return (
        <div className="flex items-center gap-1 rounded-2xl border border-line bg-bg px-3 py-2">
          <span className="rounded-full px-3 py-1.5 text-[12.5px] font-medium text-muted">{s.newChat}</span>
          <span className="flex items-center rounded-full bg-surface-2 text-[12.5px] font-medium text-ink">
            <span className="py-1.5 pl-3 pr-1.5">{t.cv.tab}</span>
            <button aria-label={t.cv.closeTab} className="t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink">
              <X size={13} aria-hidden />
            </button>
          </span>
          <span className="flex-1" />
          <button className="btn-primary !px-4 !py-2">{t.cv.download} <ArrowDownToLine size={16} aria-hidden /></button>
        </div>
      );

    case 'menu': {
      const models = [[s.m1, s.m1h], [s.m2, s.m2h], [s.m3, s.m3h]];
      return (
        <div className={menu ? 'h-52' : ''}>
          <div className="relative inline-block">
            <button onClick={() => setMenu(!menu)} aria-haspopup="listbox" aria-expanded={menu} className="t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule">
              <span className="h-2 w-2 rounded-full bg-vermillion" aria-hidden />
              <span className="font-semibold text-ink">{models[model][0]}</span>
              <ChevronDown size={15} className={`t-all text-muted ${menu ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {menu && (
              <ul role="listbox" className="absolute left-0 top-full z-10 mt-2 w-[260px] rounded-3xl border border-rule bg-elevated p-1.5">
                {models.map(([name, hint], i) => (
                  <li key={name} role="option" aria-selected={i === model}>
                    <button onClick={() => setModel(i)} className="t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2">
                      <span className="min-w-0 flex-1 text-sm font-semibold text-ink">{name} <span className="font-normal text-muted">· {hint}</span></span>
                      {i === model && <Check size={16} className="shrink-0 text-accent-text" aria-hidden />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }

    case 'prompt':
      return (
        <div>
          <div className="flex justify-end">
            <button onClick={() => setStreaming(!streaming)} className="btn-secondary !px-3.5 !py-1.5">{streaming ? s.send : s.stop}</button>
          </div>
          <div className="pt-44">
            <PromptInput t={t} isStreaming={streaming} onSend={() => {}} onStop={() => setStreaming(false)} />
          </div>
        </div>
      );

    case 'compare':
      return <GrdfCompare lang={lang} />;

    case 'figures':
      return <FigureTiles lang={lang} />;

    case 'flow':
      return <FlowBoard lang={lang} board={covenantBoard} />;

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ Sections d'une page */

type Section = DsPage['sections'][number];

function SectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink">{children}</h3>;
}

/** Texte d'une section : le Markdown du skill, avec ses exemples vivants à la place des repères. */
function Body({ body, lang, t }: { body: string; lang: Lang; t: UIStrings }) {
  const embeds: Record<string, ReactNode> = {};
  const text = body.replace(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/gm, (_, id: string) => {
    embeds[id] = (
      <div className="my-4 rounded-3xl border border-line bg-bg p-5 sm:p-6">
        <Specimen id={id} lang={lang} t={t} />
      </div>
    );
    return `[[${id}]]`;
  });
  return text.trim() ? <Markdown text={text} embeds={embeds} /> : null;
}

function TextSection({ section, lang, t }: { section: Section; lang: Lang; t: UIStrings }) {
  return (
    <section>
      {section.title && <SectionTitle>{section.title}</SectionTitle>}
      <Body body={section.body} lang={lang} t={t} />
    </section>
  );
}

function AnatomySection({ section, lang, t }: { section: Section; lang: Lang; t: UIStrings }) {
  const { items, rest } = splitList(section.body);
  return (
    <section>
      <SectionTitle>{section.title}</SectionTitle>
      <ol className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg">{i + 1}</span>
            <span className="min-w-0 pt-px"><Markdown text={it} /></span>
          </li>
        ))}
      </ol>
      <Body body={rest} lang={lang} t={t} />
    </section>
  );
}

function DoDontCard({ section }: { section: Section }) {
  const ok = section.kind === 'do';
  return (
    <div className="rounded-3xl border border-line bg-elevated p-5">
      <p className={`tag mb-3 ${ok ? 'bg-olive-tint text-olive-text' : 'bg-[var(--warn-tint)] text-[var(--warn-text)]'}`}>
        {ok ? <Check size={12} aria-hidden /> : <X size={12} aria-hidden />} {section.title}
      </p>
      <ul className="space-y-2">
        {splitList(section.body).items.map((it, i) => (
          <li key={i}><Markdown text={it} /></li>
        ))}
      </ul>
    </div>
  );
}

function Sections({ page, lang, t }: { page: DsPage; lang: Lang; t: UIStrings }) {
  const out: ReactNode[] = [];
  for (let i = 0; i < page.sections.length; i++) {
    const sec = page.sections[i];
    if (sec.kind === 'do' || sec.kind === 'dont') {
      const pair = [sec];
      const nextSec = page.sections[i + 1];
      if (nextSec && (nextSec.kind === 'do' || nextSec.kind === 'dont')) pair.push(page.sections[++i]);
      out.push(
        <section key={i} className={`grid grid-cols-1 gap-3 ${pair.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {pair.map((p) => <DoDontCard key={p.title} section={p} />)}
        </section>,
      );
    } else if (sec.kind === 'anatomy') out.push(<AnatomySection key={i} section={sec} lang={lang} t={t} />);
    else out.push(<TextSection key={i} section={sec} lang={lang} t={t} />);
  }
  return <>{out}</>;
}

/* ------------------------------------------------------------------ Page complète */

export default function DesignSystem({ lang, t }: Props) {
  const s = dsStrings[lang];
  const pages = getDsPages(lang);
  const [pageId, setPageId] = useState(pages[0].id);
  const scroller = useRef<HTMLDivElement>(null);
  const index = Math.max(0, pages.findIndex((p) => p.id === pageId));
  const page = pages[index];
  const previous = pages[index - 1];
  const next = pages[index + 1];

  const go = (id: string) => {
    setPageId(id);
    scroller.current?.scrollTo({ top: 0 });
  };

  const groupTitle = dsGroups.find((g) => g.id === page.group)!.title[lang];

  const navItem = (p: DsPage) => (
    <li key={p.id}>
      <button
        onClick={() => go(p.id)}
        aria-current={p.id === pageId ? 'page' : undefined}
        className={`t-all w-full rounded-full px-3 py-1.5 text-left text-[13.5px] ${
          p.id === pageId ? 'bg-surface-2 font-semibold text-ink' : 'font-normal text-muted hover:text-ink'
        }`}
      >
        {p.title}
      </button>
    </li>
  );

  return (
    <div className="flex min-h-0 flex-1">
        {/* Navigation par niveau, façon Material */}
        <nav aria-label={s.pages} className="hidden w-[232px] shrink-0 overflow-y-auto border-r border-line px-3 py-5 xl:block">
          {dsGroups.map((g) => {
            const inGroup = pages.filter((p) => p.group === g.id);
            const categories = [...new Set(inGroup.map((p) => p.category ?? ''))];
            return (
              <div key={g.id} className="mb-6">
                <p className="px-3 font-display text-[13px] font-semibold text-ink">{g.title[lang]}</p>
                {categories.map((c) => (
                  <div key={c}>
                    {c && <p className="mt-4 px-3 text-[11.5px] font-medium text-accent-text">{c}</p>}
                    <ul className="mt-1.5 space-y-0.5">{inGroup.filter((p) => (p.category ?? '') === c).map(navItem)}</ul>
                  </div>
                ))}
              </div>
            );
          })}
        </nav>

        <div ref={scroller} className="min-w-0 flex-1 overflow-y-auto">
          {/* Sur petit écran, la navigation devient une liste déroulante */}
          <div className="border-b border-line px-4 py-3 xl:hidden">
            <label className="sr-only" htmlFor="ds-page">{s.pages}</label>
            <select
              id="ds-page"
              value={page.id}
              onChange={(e) => go(e.target.value)}
              className="w-full rounded-full border border-rule bg-elevated px-4 py-2 text-[13.5px] font-semibold text-ink"
            >
              {dsGroups.map((g) => (
                <optgroup key={g.id} label={g.title[lang]}>
                  {pages.filter((p) => p.group === g.id).map((p) => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <article id="ds-top" className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
            <p className="eyebrow text-accent-text">
              {groupTitle}
              {page.category ? ` · ${page.category}` : ''}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,5vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink">{page.title}</h2>
            {page.lead && (
              <div className="mt-4 text-muted [&>div]:text-[16px] [&>div]:font-light [&>div]:text-muted">
                <Markdown text={page.lead} />
              </div>
            )}

            <div key={page.id} className="mt-9 space-y-10">
              <Sections page={page} lang={lang} t={t} />
            </div>

            <p className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light text-muted">
              <FileText size={13} className="shrink-0 text-accent-text" aria-hidden /> {s.source} :
              <code className="font-mono text-[11.5px] text-ink">{SKILL_FOLDER}{page.path}</code>
            </p>

            <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
              {previous ? (
                <button onClick={() => go(previous.id)} className={CHIP}>
                  <span className="opacity-60">{s.previous}</span> {previous.title}
                </button>
              ) : (
                <span />
              )}
              {next && (
                <button onClick={() => go(next.id)} className={CHIP}>
                  <span className="opacity-60">{s.next}</span> {next.title}
                  <ArrowRight size={14} className="shrink-0 text-vermillion" aria-hidden />
                </button>
              )}
            </footer>
          </article>
        </div>
    </div>
  );
}
