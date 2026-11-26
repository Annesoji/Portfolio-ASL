import { ArrowUpRight, FileText, LayoutGrid, Mail, Play, Square } from 'lucide-react';
import { dsStrings } from '../data/designSystem';
import { covenantBoard, flowStrings } from '../data/covenantFlow';
import { grdfBoard, grdfStrings } from '../data/grdfFlow';
import { uxBoard } from '../data/uxFlow';
import { getAnswerText, getIntent } from '../data/knowledgeBase';
import type { UIStrings } from '../data/i18n';
import { splitWords } from '../lib/matcher';
import type { ActionId, Lang, Message } from '../types';
import FlowBoard from './FlowBoard';
import Markdown from './Markdown';
import Monogram from './Monogram';
import RepoMap from './RepoMap';
import { FigureTiles, PrincipleCards, GrdfCompare, GrdfGallery, GrdfPrototype, RebrandScreens, RebrandShot, RelaySteps, RoleCards, SkillLessons, SkillTest, VitalizDecision, VitalizePrototype, VitalizeShot } from './CaseVisuals';
import SectionNav, { type SectionLink } from './SectionNav';
import SkillPreview from './SkillPreview';

interface Props {
  message: Message;
  lang: Lang;
  t: UIStrings;
  /** Nombre de mots affichés si ce message est en cours de streaming */
  streamCount: number | null;
  isLast: boolean;
  onAction: (a: ActionId) => void;
  onFollowUp: (intentId: string) => void;
  onOpenPrototype: (id: 'covenant') => void;
  onOpenDesignSystem: () => void;
}

export default function ChatMessage({ message, lang, t, streamCount, isLast, onAction, onFollowUp, onOpenPrototype, onOpenDesignSystem }: Props) {
  if (message.role === 'user') {
    const text = message.text ?? getIntent(message.questionOf ?? '').question[lang];
    return (
      <div className="rise flex justify-end">
        <div className="max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg">
          {text}
        </div>
      </div>
    );
  }

  const intent = getIntent(message.intentId);
  const full = getAnswerText(message.intentId, lang, message.model);
  const streaming = streamCount !== null;
  const limit = streaming ? streamCount : message.stoppedAt;
  const visible = limit === undefined || limit === null ? full : splitWords(full).slice(0, limit).join('');
  const complete = !streaming && message.stoppedAt === undefined;
  const thinking = streaming && streamCount === 0;

  const mainAction = intent.actions?.includes('email') ? 'email' : intent.actions?.[0];

  // Le parcours est inséré dans le texte (ligne [[flow]]) ; à défaut, il ouvre la réponse
  const flowInText = full.includes('[[flow]]');
  const flowBoard = intent.flow ? (
    <FlowBoard
      id={`${message.id}-flow`}
      lang={lang}
      board={intent.flow === 'covenant' ? covenantBoard : intent.flow === 'grdf' ? grdfBoard : uxBoard}
      cta={
        intent.flow === 'covenant'
          ? { label: flowStrings[lang].open, onClick: () => onOpenPrototype('covenant') }
          : intent.flow === 'grdf'
            ? { label: grdfStrings[lang].open, onClick: () => document.getElementById(`${message.id}-proto`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
            : undefined
      }
    />
  ) : null;

  // Barre d'ancres : parcours, titres de la réponse, puis prototype
  const fs = flowStrings[lang];
  const sections: SectionLink[] = intent.anchors
    ? [
        ...(intent.flow && !flowInText ? [{ id: `${message.id}-flow`, label: intent.flow === 'covenant' ? fs.navFlow : fs.navUxFlow }] : []),
        ...[...full.matchAll(/^###\s+(.+)$/gm)].map((m, i) => ({ id: `${message.id}-s${i}`, label: m[1] })),
        ...(intent.attachment === 'covenant' || intent.attachment === 'grdf' || intent.attachment === 'vitalize' ? [{ id: `${message.id}-proto`, label: fs.navProto }] : []),
      ]
    : [];

  return (
    <div className="rise flex gap-3 sm:gap-4">
      <div className="mt-0.5 hidden sm:block">
        <Monogram size={34} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="eyebrow mb-2.5 flex items-center gap-2.5">
          <span className="font-semibold text-ink">{t.assistantName}</span>
          <span className="h-px w-5 bg-rule" aria-hidden />
          <span className="text-muted">{t.models[message.model].name}</span>
        </div>

        {sections.length > 0 && !thinking && <SectionNav links={sections} label={fs.navLabel} />}

        {!flowInText && !thinking && flowBoard}

        {thinking ? (
          <div className="flex h-7 items-center gap-1.5" role="status" aria-label={t.thinking}>
            {[0, 1, 2].map((d) => (
              <span key={d} className="thinking-dot" style={{ animationDelay: `${d * 0.16}s` }} />
            ))}
          </div>
        ) : (
          <div aria-live={streaming ? 'off' : 'polite'}>
            <Markdown
              text={visible}
              anchorPrefix={intent.anchors ? message.id : undefined}
              embeds={{
                flow: flowBoard,
                'grdf-compare': <GrdfCompare lang={lang} />,
                'grdf-persona': <GrdfGallery lang={lang} set="persona" />,
                'grdf-map': <GrdfGallery lang={lang} set="map" />,
                'grdf-moodboard': <GrdfGallery lang={lang} set="moodboard" />,
                'grdf-screens': <GrdfGallery lang={lang} set="screens" />,
                'rebrand-logo': <RebrandShot lang={lang} shot="logo" />,
                'rebrand-hero': <RebrandShot lang={lang} shot="hero" />,
                'rebrand-screens': <RebrandScreens lang={lang} />,
                'vitaliz-decision-1': <VitalizDecision lang={lang} n={0} />,
                'vitaliz-decision-2': <VitalizDecision lang={lang} n={1} />,
                'vitaliz-decision-3': <VitalizDecision lang={lang} n={2} />,
                'vitalize-persona': <VitalizeShot lang={lang} shot="persona" />,
                'vitalize-map': <VitalizeShot lang={lang} shot="map" />,
                'vitalize-brand': <VitalizeShot lang={lang} shot="brand" />,
                'vitalize-shop': <VitalizeShot lang={lang} shot="shop" />,
                'repo-map': <RepoMap lang={lang} />,
                'bnp-figures': <FigureTiles lang={lang} />,
                'ds-principles': <PrincipleCards lang={lang} />,
                'team-roles': <RoleCards lang={lang} />,
                relay: <RelaySteps lang={lang} />,
                'skill-test': <SkillTest lang={lang} />,
                'skill-lessons': <SkillLessons lang={lang} />,
              }}
            />
            {streaming && <span className="caret" aria-hidden />}
          </div>
        )}

        {message.stoppedAt !== undefined && (
          <p className="tag mt-3 border border-rule text-ink">
            <Square size={10} className="fill-current" aria-hidden /> {t.stopped}
          </p>
        )}

        {complete && intent.attachment === 'skill' && message.model !== 'express' && <SkillPreview t={t} />}

        {complete && (intent.attachment === 'skill' || intent.attachment === 'ds') && (
          <div className="rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5">
            <div className="min-w-0 flex-1 basis-64">
              <p className="text-sm font-semibold text-ink">{dsStrings[lang].openTitle}</p>
              <p className="mt-1 text-[13px] font-light leading-relaxed text-muted">{dsStrings[lang].openText}</p>
            </div>
            <button onClick={onOpenDesignSystem} className="btn-primary">
              {dsStrings[lang].open} <LayoutGrid size={14} aria-hidden />
            </button>
          </div>
        )}

        {/* Le prototype est monté dès le début de la réponse : il charge pendant la lecture */}
        {!thinking && intent.attachment === 'grdf' && <GrdfPrototype id={`${message.id}-proto`} lang={lang} />}
        {!thinking && intent.attachment === 'vitalize' && <VitalizePrototype id={`${message.id}-proto`} lang={lang} />}

        {complete && intent.attachment === 'covenant' && (
          <div
            id={`${message.id}-proto`}
            className="rise mt-6 flex scroll-mt-16 flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5"
          >
            <div className="min-w-0 flex-1 basis-64">
              <p className="text-sm font-semibold text-ink">{flowStrings[lang].ctaTitle}</p>
              <p className="mt-1 text-[13px] font-light leading-relaxed text-muted">{flowStrings[lang].ctaText}</p>
            </div>
            <button onClick={() => onOpenPrototype('covenant')} className="btn-primary">
              {flowStrings[lang].open} <Play size={14} className="fill-current" aria-hidden />
            </button>
          </div>
        )}

        {complete && intent.actions && (
          <div className="rise mt-5 flex flex-wrap gap-3">
            {/* Une seule action pleine : le contact par email s'il est proposé, sinon la première */}
            {[...intent.actions]
              .sort((x, y) => Number(y === mainAction) - Number(x === mainAction))
              .map((a) => {
                const Icon = a === 'cv' ? FileText : Mail;
                return (
                  <button key={a} onClick={() => onAction(a)} className={a === mainAction ? 'btn-primary' : 'btn-secondary'}>
                    {a === 'cv' ? t.actionCV : t.actionEmail} <Icon size={16} aria-hidden />
                  </button>
                );
              })}
          </div>
        )}

        {complete && isLast && intent.followUps && (
          <div className="rise mt-6">
            <p className="eyebrow mb-3 flex items-center gap-3 text-muted">
              <span>{t.followUps}</span>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </p>
            <div className="flex flex-wrap gap-2">
              {intent.followUps.map((id) => {
                const f = getIntent(id);
                return (
                  <button
                    key={id}
                    onClick={() => onFollowUp(id)}
                    className="t-all group inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-left text-sm text-ink hover:border-rule hover:bg-surface-2"
                  >
                    {(f.chip ?? f.question)[lang]}
                    <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
