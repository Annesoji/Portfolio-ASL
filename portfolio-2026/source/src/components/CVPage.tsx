import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type { UIStrings } from '../data/i18n';
import { contact, education, experiences, interests, languages, pitch, skillGroups, title } from '../data/profile';
import type { Lang } from '../types';

interface Props {
  t: UIStrings;
  lang: Lang;
}

/** Met en gras la partie « Impact : … » des puces du CV. */
function Bullet({ text }: { text: string }) {
  const m = text.match(/^(Impact\s?:)(.*)$/);
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed text-ink">
      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion" aria-hidden />
      {m ? (
        <span>
          <strong className="font-semibold text-olive-text">{m[1]}</strong>
          <span className="font-medium">{m[2]}</span>
        </span>
      ) : (
        <span className="font-light">{text}</span>
      )}
    </li>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="cv-section mt-7">
      <h3 className="eyebrow mb-4 flex items-center gap-3 font-semibold text-ink">
        <span>{label}</span>
        <span className="h-px flex-1 bg-rule" aria-hidden />
      </h3>
      {children}
    </section>
  );
}

/** Télécharge le PDF s'il existe dans /public, sinon ouvre l'impression (fallback propre). */
export async function downloadCV() {
  const url = `${import.meta.env.BASE_URL}${contact.cvFile}`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.ok && (res.headers.get('content-type') ?? '').includes('pdf')) {
      const a = document.createElement('a');
      a.href = url;
      a.download = contact.cvFile;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
  } catch {
    /* hors-ligne ou fichier absent → impression */
  }
  window.print();
}

/**
 * Le CV, affiché comme une page dans la zone principale (et non dans une fenêtre) :
 * il s'ouvre dans un onglet de la barre du haut, que l'on referme avec sa croix.
 */
export default function CVPage({ t, lang }: Props) {
  return (
    <div className="cv-print rise mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
      <article>
        <header>
          <h1 className="font-display text-[clamp(2rem,6vw,3rem)] font-semibold leading-none tracking-[-0.035em] text-ink">{contact.name}</h1>
          <p className="eyebrow mt-4 font-semibold text-accent-text">{title[lang]}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
            <li className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden /> {contact.location}
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="t-all inline-flex items-center gap-1.5 hover:text-ink">
                <Mail size={14} aria-hidden /> {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className="t-all inline-flex items-center gap-1.5 hover:text-ink">
                <Phone size={14} aria-hidden /> {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="t-all inline-flex items-center gap-1.5 hover:text-ink"
              >
                <Linkedin size={14} aria-hidden /> {contact.linkedin}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm font-light leading-relaxed text-ink">{pitch[lang]}</p>
        </header>

        <Section label={t.cv.experience}>
          <div className="space-y-6">
            {experiences.map((xp) => (
              <div key={xp.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h4 className="font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink">{xp.company}</h4>
                  <span className="text-xs font-medium text-muted">
                    {xp.period[lang]} · {xp.location}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted">{xp.role[lang]}</p>
                {xp.bullets[lang].length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {xp.bullets[lang].map((b) => (
                      <Bullet key={b} text={b} />
                    ))}
                  </ul>
                )}
                {xp.missions?.map((m) => (
                  <div key={m.client} className="cv-section mt-3 border-l-2 border-line pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h5 className="text-sm font-semibold text-ink">{m.client}</h5>
                      <span className="text-xs text-muted">{m.period[lang]}</span>
                    </div>
                    <p className="text-xs font-medium text-muted">{m.role[lang]}</p>
                    <ul className="mt-1.5 space-y-1.5">
                      {m.bullets[lang].map((b) => (
                        <Bullet key={b} text={b} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section label={t.cv.skills}>
          <div className="space-y-3">
            {skillGroups.map((g) => (
              <div key={g.label.en}>
                <p className="mb-1.5 text-sm font-semibold text-ink">{g.label[lang]}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items[lang].map((s) => (
                    <li key={s} className="tag bg-olive-tint text-olive-text">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-x-8 sm:grid-cols-2">
          <Section label={t.cv.education}>
            <ul className="space-y-2.5">
              {education.map((e) => (
                <li key={e.school} className="text-sm">
                  <p className="font-semibold text-ink">{e.title[lang]}</p>
                  <p className="font-light text-muted">
                    {e.school}
                    {e.period && ` · ${e.period}`}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
          <div>
            <Section label={t.cv.languages}>
              <ul className="space-y-1 text-sm font-light text-ink">
                {languages[lang].map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Section>
            <Section label={t.cv.interests}>
              <ul className="space-y-1.5">
                {interests[lang].map((l) => (
                  <Bullet key={l} text={l} />
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </article>
    </div>
  );
}
