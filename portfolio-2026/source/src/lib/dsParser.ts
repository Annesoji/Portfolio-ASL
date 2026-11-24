/**
 * Découpe un fichier Markdown du skill en pages et sections, pour la page « Design System ».
 * `pageLevel` est le niveau de titre qui ouvre une page (2 pour « ## », 3 pour « ### ») ;
 * le niveau au-dessus (s'il existe) donne la famille, le niveau en dessous ouvre une section.
 */
export interface DsRawSection {
  title: string;
  body: string;
}

export interface DsRawPage {
  family?: string;
  title: string;
  lead: string;
  sections: DsRawSection[];
}

const isProse = (line: string) => /^[\p{L}«“"]/u.test(line.trim());

export function parseDs(markdown: string, pageLevel: 2 | 3): DsRawPage[] {
  // en-tête YAML du SKILL.md
  const md = markdown.startsWith('---') ? markdown.slice(markdown.indexOf('\n---', 3) + 4) : markdown;
  const pages: DsRawPage[] = [];
  let family: string | undefined;
  let page: DsRawPage | null = null;
  let section: DsRawSection | null = null;
  let fenced = false;

  for (const line of md.split('\n')) {
    if (line.startsWith('```')) fenced = !fenced;
    const h = fenced ? null : line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      if (level < pageLevel) {
        family = level === 1 ? undefined : h[2];
        page = null;
        section = null;
        continue;
      }
      if (level === pageLevel) {
        page = { family, title: h[2], lead: '', sections: [] };
        section = { title: '', body: '' };
        page.sections.push(section);
        pages.push(page);
        continue;
      }
      if (level === pageLevel + 1 && page) {
        section = { title: h[2], body: '' };
        page.sections.push(section);
        continue;
      }
    }
    if (section) section.body += `${line}\n`;
  }

  for (const p of pages) {
    // Le premier paragraphe de la page sert de chapeau
    const intro = p.sections[0];
    const lines = intro.body.split('\n');
    const start = lines.findIndex((l) => l.trim());
    if (start >= 0 && isProse(lines[start])) {
      let end = start;
      while (end < lines.length && lines[end].trim()) end++;
      p.lead = lines.slice(start, end).join(' ');
      intro.body = lines.slice(end).join('\n');
    }
    p.sections = p.sections.map((s) => ({ ...s, body: s.body.trim() })).filter((s) => s.title || s.body);
  }
  return pages;
}

/** Éléments d'une liste Markdown (« - x » ou « 1. x »), et le reste du texte. */
export function splitList(body: string): { items: string[]; rest: string } {
  const items: string[] = [];
  const rest: string[] = [];
  let fenced = false;
  for (const line of body.split('\n')) {
    if (line.startsWith('```')) fenced = !fenced;
    const m = fenced ? null : line.match(/^\s*(?:[-•]|\d+\.)\s+(.*)$/);
    if (m) items.push(m[1]);
    else rest.push(line);
  }
  return { items, rest: rest.join('\n').trim() };
}
