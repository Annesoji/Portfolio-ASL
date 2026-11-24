import { useState } from 'react';
import { ArrowDown, ArrowRight, Bot, Check, MessagesSquare, Play, Repeat, Server, TriangleAlert, UserRound } from 'lucide-react';
import { flowStrings, type Actor, type FlowBoardData } from '../data/covenantFlow';
import type { Lang } from '../types';

const ACTOR: Record<Actor, { icon: typeof Bot; chip: string; dot: string }> = {
  ai: { icon: Bot, chip: 'bg-[var(--ai-tint)] text-[var(--ai-text)]', dot: 'bg-[var(--ai)]' },
  human: { icon: UserRound, chip: 'border border-rule text-ink', dot: 'bg-ink' },
  system: { icon: Server, chip: 'bg-surface-2 text-ink', dot: 'bg-muted' },
  offline: { icon: MessagesSquare, chip: 'border border-line text-muted', dot: 'border border-muted' },
};

interface Props {
  id?: string;
  lang: Lang;
  board: FlowBoardData;
  /** Action principale affichée dans l'en-tête (ex. ouvrir un prototype) */
  cta?: { label: string; onClick: () => void };
}

/**
 * Schéma de flow : des étapes en lignes (qui fait quoi, dans quel ordre).
 * Avec deux parcours (avant / après), une bascule permet de passer de l'un à l'autre ;
 * les points de friction s'affichent sur l'étape où ils se produisent.
 */
export default function FlowBoard({ id, lang, board, cta }: Props) {
  const s = flowStrings[lang];
  const [view, setView] = useState(board.defaultView ?? board.journeys[0].id);
  const journey = board.journeys.find((j) => j.id === view) ?? board.journeys[0];
  const actorLabel = (a: Actor) => board.actors?.[lang][a] ?? s.actors[a];
  const actorsShown = [...new Set(journey.stages.flatMap((st) => st.nodes.map((n) => n.actor)))];

  return (
    <section id={id} className="rise mb-7 scroll-mt-16 overflow-hidden rounded-3xl border border-line bg-elevated">
      <header className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line px-5 py-4">
        <div className="w-full min-w-0 sm:w-auto sm:flex-1">
          <p className="eyebrow text-muted">{board.eyebrow[lang]}</p>
          <h3 className="mt-1 font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
            {board.title[lang]}
          </h3>
        </div>
        {cta && (
          <button onClick={cta.onClick} className="btn-primary !py-2.5">
            {cta.label} <Play size={14} className="fill-current" aria-hidden />
          </button>
        )}
      </header>

      {/* Bascule entre les parcours, seulement s'il y en a plusieurs */}
      {board.journeys.length > 1 && (
        <div className="flex flex-wrap items-center gap-3 px-5 pt-4">
          <p className="eyebrow flex-1 text-muted">{s.detail}</p>
          <div role="group" aria-label={s.detail} className="flex rounded-full border border-line p-0.5">
            {board.journeys.map((j) => (
              <button
                key={j.id}
                onClick={() => setView(j.id)}
                aria-pressed={view === j.id}
                className={`t-all rounded-full px-3.5 py-1 text-xs font-semibold ${
                  view === j.id ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
                }`}
              >
                {j.label[lang]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Étapes en lignes : chaque ligne enchaîne les actions de gauche à droite */}
      <ol key={view} className="rise px-5 py-2">
        {journey.stages.map((stage, i) => (
          <li key={stage.title.en} className="relative flex gap-4 py-3">
            {/* Rail vertical qui relie les étapes */}
            {i < journey.stages.length - 1 && (
              <span className="absolute bottom-[-12px] left-[15px] top-[44px] w-px bg-line" aria-hidden />
            )}
            <span
              className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                !stage.step
                  ? 'border border-rule bg-elevated text-ink'
                  : journey.muted
                    ? 'bg-ink text-bg'
                    : 'bg-accent text-accent-fg'
              }`}
              aria-hidden
            >
              {stage.step ?? (i === 0 ? <ArrowDown size={14} /> : <Check size={14} />)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-snug text-ink">
                {stage.step && (
                  <span className="eyebrow text-accent-text">
                    {s.step} {stage.step}
                  </span>
                )}
                {stage.title[lang]}
                {stage.repeat && (
                  <span className="tag border border-rule text-ink">
                    <Repeat size={12} aria-hidden /> {stage.repeat[lang]}
                  </span>
                )}
              </p>
              <ul className="mt-2 flex flex-wrap items-stretch gap-x-1.5 gap-y-2">
                {stage.nodes.map((n, j) => {
                  const a = ACTOR[n.actor];
                  const Icon = a.icon;
                  return (
                    <li key={n.label.en} className="flex items-stretch gap-1.5">
                      {j > 0 && (
                        <span className="flex items-center px-1 text-xs italic text-muted" aria-hidden={!stage.alternatives}>
                          {stage.alternatives ? s.or : <ArrowRight size={14} />}
                        </span>
                      )}
                      <span className="flex max-w-[15rem] flex-col gap-1.5 rounded-2xl border border-line bg-bg px-3 py-2.5">
                        <span
                          className={`tag w-fit ${a.chip}`}
                        >
                          <Icon size={12} aria-hidden /> {actorLabel(n.actor)}
                        </span>
                        <span className="text-[12.5px] font-light leading-snug text-ink">{n.label[lang]}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              {stage.frictions && (
                <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label={s.friction}>
                  {stage.frictions.map((f) => (
                    <li
                      key={f.en}
                      className="tag bg-[var(--warn-tint)] text-[var(--warn-text)]"
                    >
                      <TriangleAlert size={12} aria-hidden /> {f[lang]}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <footer className="flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line px-5 py-3">
        {actorsShown.map((k) => (
          <span key={k} className="inline-flex items-center gap-2 text-xs text-muted">
            <span className={`h-2 w-2 rounded-full ${ACTOR[k].dot}`} aria-hidden /> {actorLabel(k)}
          </span>
        ))}
      </footer>
    </section>
  );
}
