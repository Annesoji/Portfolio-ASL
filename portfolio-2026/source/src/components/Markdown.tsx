import { Fragment, type ReactNode } from 'react';

/**
 * Rendu Markdown léger, tolérant au texte partiel (streaming) :
 * titres, listes, tableaux, blocs de code, **gras**, *italique*, `code`,
 * liens et ==badges d'impact==.
 */

const INLINE = /(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;

function clean(text: string) {
  // masque les marqueurs encore ouverts pendant le streaming
  return text.replace(/\*\*|==|`|\*/g, '');
}

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {inline(part.slice(2, -2))}
        </strong>
      );
    }
    if (part.startsWith('==') && part.endsWith('==') && part.length > 4) {
      return (
        <span
          key={i}
          className="mx-0.5 inline-block whitespace-nowrap rounded-full bg-olive-tint px-2.5 py-0.5 text-[0.86em] font-semibold text-olive-text"
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code key={i} className="rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-[0.85em] text-accent-text">
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const external = link[2].startsWith('http');
      return (
        <a
          key={i}
          href={link[2]}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="t-all break-words font-medium text-accent-text underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          {link[1]}
        </a>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{clean(part)}</Fragment>;
  });
}

function cells(line: string) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

interface Props {
  text: string;
  anchorPrefix?: string;
  /** Composants insérés dans le texte par une ligne `[[nom]]` */
  embeds?: Record<string, ReactNode>;
}

export default function Markdown({ text, anchorPrefix, embeds }: Props) {
  const lines = text.split('\n');
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  let heading = 0; // les titres reçoivent un id stable pour la barre d'ancres

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // Composant inséré : [[nom]] seul sur sa ligne (une ligne incomplète est ignorée pendant le streaming)
    if (line.trimStart().startsWith('[[')) {
      const m = line.trim().match(/^\[\[([a-z0-9-]+)\]\]$/);
      if (m && embeds?.[m[1]]) out.push(<Fragment key={key++}>{embeds[m[1]]}</Fragment>);
      i++;
      continue;
    }

    // Bloc de code
    if (line.startsWith('```')) {
      const body: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) body.push(lines[i++]);
      i++;
      out.push(
        <pre
          key={key++}
          className="my-4 overflow-x-auto rounded-2xl bg-code-bg px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-code-ink"
        >
          {body.join('\n')}
        </pre>,
      );
      continue;
    }

    // Tableau
    if (line.trimStart().startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trimStart().startsWith('|')) {
        if (!/^\s*\|[\s|:-]+\|?\s*$/.test(lines[i])) rows.push(cells(lines[i]));
        i++;
      }
      if (rows.length === 0) continue; // tableau encore incomplet pendant le streaming
      const [head, ...body] = rows;
      out.push(
        <div key={key++} className="my-4 overflow-x-auto rounded-2xl border border-line bg-elevated">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                {head.map((c, j) => (
                  <th key={j} className="eyebrow px-4 py-3 font-semibold text-ink">
                    {inline(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className="border-t border-line align-top first:border-t-0">
                  {r.map((c, j) => (
                    <td key={j} className="px-4 py-2.5 leading-relaxed">
                      {inline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // Titres
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      out.push(
        <h3
          key={key++}
          id={anchorPrefix ? `${anchorPrefix}-s${heading++}` : undefined}
          className="scroll-mt-16 mb-2 mt-7 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink first:mt-0"
        >
          {inline(h[2])}
        </h3>,
      );
      i++;
      continue;
    }

    // Listes
    const isUl = (l: string) => /^\s*[-•]\s+/.test(l);
    const isOl = (l: string) => /^\s*\d+\.\s+/.test(l);
    if (isUl(line) || isOl(line)) {
      const ordered = isOl(line);
      const test = ordered ? isOl : isUl;
      const items: string[] = [];
      while (i < lines.length && test(lines[i])) {
        items.push(lines[i].replace(/^\s*(?:[-•]|\d+\.)\s+/, ''));
        i++;
      }
      out.push(
        ordered ? (
          <ol key={key++} className="my-3 space-y-2">
            {items.map((it, j) => (
              <li key={j} className="flex gap-3 leading-relaxed">
                <span className="w-6 shrink-0 font-display text-[0.85rem] font-medium italic leading-[1.9] text-accent-text">
                  0{j + 1}
                </span>
                <span className="min-w-0">{inline(it)}</span>
              </li>
            ))}
          </ol>
        ) : (
          <ul key={key++} className="my-3 space-y-2">
            {items.map((it, j) => (
              <li key={j} className="flex gap-3 leading-relaxed">
                <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion" aria-hidden />
                <span className="min-w-0">{inline(it)}</span>
              </li>
            ))}
          </ul>
        ),
      );
      continue;
    }

    // Paragraphe
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('```') &&
      !lines[i].trimStart().startsWith('[[') &&
      !lines[i].trimStart().startsWith('|') &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !isUl(lines[i]) &&
      !isOl(lines[i])
    ) {
      para.push(lines[i++]);
    }
    out.push(
      <p key={key++} className="my-3 leading-relaxed first:mt-0 last:mb-0">
        {inline(para.join(' '))}
      </p>,
    );
  }

  return <div className="text-[15px] font-normal text-ink">{out}</div>;
}
