#!/usr/bin/env node
/**
 * Vérifie que la page « Design System » reste fidèle au skill.
 *
 * La page lit les fichiers français du skill ; l'anglais est une traduction dans src/data/design-system-en/.
 * Ce script échoue si :
 *   - une traduction n'a plus la même structure que sa source (titres, exemples, blocs de code) ;
 *   - une source française a changé depuis la dernière relecture de sa traduction ;
 *   - un repère « exemple » du skill n'a pas d'exemple vivant dans la page.
 *
 * Usage : node scripts/check-ds.mjs            vérifie
 *         node scripts/check-ds.mjs --stamp    après avoir relu les traductions, enregistre l'état des sources
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const SKILL = '.claude/skills/asl-design-system/';
const EN = 'src/data/design-system-en/';
const FILES = [
  ['SKILL.md', 'SKILL.md'],
  ['references/fondations.md', 'fondations.md'],
  ['references/styles.md', 'styles.md'],
  ['references/composants.md', 'composants.md'],
];
const STAMP = /^<!-- source-hash: (\w+) -->\n/;
const stamp = process.argv.includes('--stamp');
const hash = (s) => createHash('sha1').update(s).digest('hex').slice(0, 12);

function shape(md) {
  const headings = [];
  const examples = [];
  const code = [];
  let fence = null;
  for (const line of md.split('\n')) {
    if (line.startsWith('```')) {
      if (fence === null) fence = [];
      else {
        code.push(fence.join('\n'));
        fence = null;
      }
      continue;
    }
    if (fence) {
      fence.push(line);
      continue;
    }
    const h = line.match(/^(#{1,6})\s/);
    if (h) headings.push(h[1].length);
    const e = line.match(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/);
    if (e) examples.push(e[1]);
  }
  return { headings, examples, code };
}

const problems = [];
const page = readFileSync('src/components/DesignSystem.tsx', 'utf8');

for (const [frPath, enName] of FILES) {
  const fr = readFileSync(SKILL + frPath, 'utf8');
  const a = shape(fr);
  for (const id of a.examples) {
    if (!page.includes(`case '${id}':`)) problems.push(`${frPath} : l'exemple « ${id} » n'existe pas dans DesignSystem.tsx`);
  }

  const enPath = EN + enName;
  if (!existsSync(enPath)) {
    problems.push(`${enPath} : traduction absente`);
    continue;
  }
  let en = readFileSync(enPath, 'utf8');
  const known = en.match(STAMP)?.[1];
  const b = shape(en.replace(STAMP, ''));

  if (a.headings.join() !== b.headings.join()) problems.push(`${enPath} : les titres ne correspondent plus à ${frPath}`);
  if (a.examples.join() !== b.examples.join()) problems.push(`${enPath} : les repères d'exemple ne correspondent plus à ${frPath}`);
  if (a.code.join('\n') !== b.code.join('\n')) problems.push(`${enPath} : un bloc de code diffère de ${frPath}`);

  if (stamp) {
    writeFileSync(enPath, `<!-- source-hash: ${hash(fr)} -->\n${en.replace(STAMP, '')}`);
  } else if (known !== hash(fr)) {
    problems.push(`${frPath} a changé : relire ${enPath}, puis lancer « node scripts/check-ds.mjs --stamp »`);
  }
}

if (problems.length) {
  for (const p of problems) console.log(`✗ ${p}`);
  process.exit(1);
}
console.log(stamp ? 'Traductions marquées comme à jour.' : `✓ Page Design System et skill alignés (${FILES.length} fichiers).`);
