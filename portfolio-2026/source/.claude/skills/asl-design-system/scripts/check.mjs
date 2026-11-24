#!/usr/bin/env node
/**
 * Vérifie les règles du Design System ASL contrôlables automatiquement (couleurs, fonds, ombres, majuscules) dans des fichiers .tsx / .jsx.
 *
 *   node .claude/skills/asl-design-system/scripts/check.mjs               → tout src/
 *   node .claude/skills/asl-design-system/scripts/check.mjs src/a.tsx …   → fichiers donnés
 *
 * Sortie : une ligne par écart (fichier:ligne, règle, extrait). Code de retour 1 s'il y a une erreur.
 * Les « à vérifier » ne font pas échouer : ils demandent un regard humain.
 *
 * Pour assumer un écart, écrire sur la même ligne ou la ligne précédente :
 *   // ds-ignore: la raison
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const STANDARD =
  'red|blue|green|gray|grey|slate|zinc|neutral|stone|amber|yellow|orange|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black';

/** Chaque contrôle : règle du skill, niveau, motif, message. */
const CHECKS = [
  { rule: 1, level: 'erreur', re: /#[0-9a-fA-F]{3,8}\b/g, msg: 'couleur écrite en dur (hex) : utiliser un token' },
  { rule: 1, level: 'erreur', re: /\brgba?\(/g, msg: 'couleur écrite en dur (rgb) : utiliser un token' },
  {
    rule: 1,
    level: 'erreur',
    re: new RegExp(`\\b(?:bg|text|border|ring|outline|fill|stroke|from|via|to|divide|placeholder)-(?:${STANDARD})(?:-\\d{2,3})?(?:\\/\\d+)?\\b`, 'g'),
    msg: 'couleur Tailwind standard : utiliser un token',
  },
  { rule: 1, level: 'erreur', re: /\bdark:/g, msg: 'préfixe dark: — le thème passe par les tokens' },
  { rule: 2, level: 'erreur', re: /\b(?:bg-gradient-to-[a-z]+|bg-\[(?:linear|radial|conic)-gradient)|(?:linear|radial|conic)-gradient\(/g, msg: 'dégradé : les fonds sont unis' },
  { rule: 2, level: 'erreur', re: /\bbg-\[url\(|backgroundImage/g, msg: 'texture ou image de fond : les fonds sont unis' },
  { rule: 2, level: 'erreur', re: /(?<!backdrop-)\bblur-(?:2xl|3xl|\[)/g, msg: 'halo flou décoratif : les fonds sont unis' },
  {
    rule: 2,
    level: 'à vérifier',
    re: /\b(?:w-full|w-screen|inset-x-0)\b[^"'`]*\bbg-(?:accent|olive|vermillion)\b(?!-)|\bbg-(?:accent|olive|vermillion)\b(?!-)[^"'`]*\b(?:w-full|w-screen|inset-x-0)\b/g,
    msg: 'grande surface colorée ? Un bouton pleine largeur est permis, pas un bandeau ou une carte',
  },
  { rule: 3, level: 'erreur', re: /\b(?:drop-)?shadow-(?!signature\b|none\b)[\w[\]().,%#/-]+/g, msg: 'ombre non prévue : seule shadow-signature existe' },
  // le mot « shadow » seul n'est une classe que dans un attribut de classes, pas dans un texte
  { rule: 3, level: 'erreur', onlyIn: /class(?:Name)?=|cls:/, re: /(?<![\w-])shadow(?![\w-])/g, msg: 'ombre non prévue : seule shadow-signature existe' },
  { rule: 'typo', level: 'erreur', onlyIn: /class(?:Name)?=|cls:|`/, re: /(?<![\w-])uppercase(?![\w-])/g, msg: 'texte tout en majuscules : casse normale partout (fondations.md)' },
  { rule: 3, level: 'à vérifier', re: /\bshadow-signature\b/g, msg: 'ombre : réservée à la zone de saisie et à l’action principale' },
];

function listFiles(target) {
  const st = statSync(target);
  if (st.isFile()) return [target];
  return readdirSync(target).flatMap((name) => {
    if (name === 'node_modules' || name.startsWith('.')) return [];
    const p = join(target, name);
    return statSync(p).isDirectory() ? listFiles(p) : /\.(tsx|jsx)$/.test(name) ? [p] : [];
  });
}

const targets = process.argv.slice(2);
const files = (targets.length ? targets : ['src']).flatMap(listFiles);
const findings = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const ignored = /ds-ignore:/.test(line) || (i > 0 && /ds-ignore:/.test(lines[i - 1]));
    // les commentaires ne sont pas du code affiché
    const code = line.replace(/\/\/.*$/, '').replace(/\/\*.*?\*\//g, '').replace(/^\s*\*.*$/, '');
    for (const c of CHECKS) {
      if (c.onlyIn && !c.onlyIn.test(code)) continue;
      for (const m of code.matchAll(c.re)) {
        findings.push({ file: relative(process.cwd(), file), line: i + 1, ...c, hit: m[0].slice(0, 60), ignored });
      }
    }
  });
}

const active = findings.filter((f) => !f.ignored);
const errors = active.filter((f) => f.level === 'erreur');
const reviews = active.filter((f) => f.level === 'à vérifier');
const ignoredCount = findings.length - active.length;

for (const f of [...errors, ...reviews]) {
  console.log(`${f.level === 'erreur' ? '✗' : '?'} ${f.file}:${f.line}  règle ${f.rule}  ${f.msg}  →  ${f.hit}`);
}
console.log(
  `\n${files.length} fichier(s) · ${errors.length} erreur(s) · ${reviews.length} à vérifier · ${ignoredCount} écart(s) assumé(s) (ds-ignore)`,
);
process.exit(errors.length ? 1 : 0);
