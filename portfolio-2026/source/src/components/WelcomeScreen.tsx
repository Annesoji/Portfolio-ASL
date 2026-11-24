import { ArrowUpRight, BarChart3, Compass, LayoutGrid, MessageCircle, Sparkles, UserRound, type LucideIcon } from 'lucide-react';
import { getIntent } from '../data/knowledgeBase';
import type { UIStrings } from '../data/i18n';
import { contact } from '../data/profile';
import type { Lang } from '../types';

/** Une icône par sujet de suggestion : elle dit de quoi parle la carte. */
const TOPIC_ICON: Record<string, LucideIcon> = {
  profile: UserRound,
  ai: Sparkles,
  impact: BarChart3,
  search: Compass, portfoliods: LayoutGrid,
};

interface Props {
  lang: Lang;
  t: UIStrings;
  onPick: (intentId: string) => void;
}

export default function WelcomeScreen({ lang, t, onPick }: Props) {
  // Titre en deux niveaux : une phrase d'amorce légère, puis le nom en grand.
  // L'élision (« d' ») ou le possessif (« 's ») restent collés au nom.
  const [before, after] = t.heroTitle.split(contact.name);
  const [, lead, elision] = before.match(/^(.*\s)(\S+['’])$/s) ?? [null, before, ''];
  const [, possessive = '', tail = ''] = after.match(/^(['’]s)?\s*(.*)$/s) ?? [];
  const tailIsPunctuation = /^[.!?…]*$/.test(tail);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col justify-center px-5 py-8 sm:px-10 sm:py-12">
      <div className="rise">
        <h1 className="text-ink">
          <span className="block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug">{lead.trim()}</span>
          <span className="mt-2 block font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
            {elision && <span className="font-light">{elision}</span>}
            {contact.name}
            {possessive && <span className="font-light">{possessive}</span>}
            {tailIsPunctuation && <span className="text-vermillion">{tail}</span>}
          </span>
          {!tailIsPunctuation && (
            <span className="mt-3 block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug">{tail}</span>
          )}
        </h1>
        <p className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-muted sm:text-base">{t.heroSubtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2">
        {t.suggestions.map((s, i) => {
          const TopicIcon = TOPIC_ICON[s.intentId] ?? MessageCircle;
          return (
          <button
            key={s.intentId}
            onClick={() => onPick(s.intentId)}
            style={{ animationDelay: `${120 + i * 70}ms` }}
            className={`rise t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule ${
              // Une carte seule sur sa ligne prend toute la largeur
              i === t.suggestions.length - 1 && t.suggestions.length % 2 === 1 ? 'sm:col-span-2' : ''
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text">
                <TopicIcon size={15} aria-hidden />
              </span>
              <span className="eyebrow flex-1 font-semibold text-ink">{s.title}</span>
              <ArrowUpRight size={15} className="t-all shrink-0 text-muted group-hover:text-ink" aria-hidden />
            </span>
            <span className="text-[14.5px] font-light leading-relaxed text-ink">
              {getIntent(s.intentId).question[lang]}
            </span>
          </button>
          );
        })}
      </div>
    </div>
  );
}
