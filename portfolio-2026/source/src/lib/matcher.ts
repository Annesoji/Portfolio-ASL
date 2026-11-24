import { intents } from '../data/knowledgeBase';

/** Minuscule, sans accents ni ponctuation. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\bj['’]ai\b/g, ' ') // évite le faux positif « j'ai » → « ai »
    .replace(/[^a-z0-9€]+/g, ' ')
    .trim();
}

function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array<number>(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[a.length][b.length];
}

/** Un mot de la question correspond-il à un terme (exact, racine ou faute de frappe) ? */
function tokenMatches(token: string, term: string): boolean {
  if (token === term) return true;
  if (term.length >= 4 && token.startsWith(term)) return true; // racine : « recrut » ↔ « recrutement »
  if (term.length >= 6 && token.length >= 6 && Math.abs(token.length - term.length) <= 1) {
    return levenshtein(token, term) <= 1; // tolérance à 1 faute de frappe
  }
  return false;
}

const SLASH: Record<string, string> = {
  '/cv': 'cv',
  '/projets': 'projects',
  '/projects': 'projects',
  '/projet': 'projects',
  '/skills': 'skills',
  '/competences': 'skills',
  '/contact': 'contact',
  '/stack': 'stack',
  '/designsystem': 'portfoliods',
  '/design-system': 'portfoliods',
  '/ds': 'portfoliods',
};

export function matchSlashCommand(input: string): string | null {
  const cmd = input.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/\s+/)[0];
  return cmd.startsWith('/') ? (SLASH[cmd] ?? 'fallback') : null;
}

const THRESHOLD = 3;

/**
 * Moteur de correspondance : score chaque intention par somme pondérée des
 * mots-clés / expressions reconnus, et renvoie la meilleure (ou le fallback).
 */
export function matchIntent(input: string): string {
  const slash = matchSlashCommand(input);
  if (slash) return slash;

  const text = normalize(input);
  if (!text) return 'fallback';
  const padded = ` ${text} `;
  const tokens = text.split(' ');

  let best = 'fallback';
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    for (const [term, weight] of intent.keywords) {
      const hit = term.includes(' ') ? padded.includes(` ${term}`) : tokens.some((t) => tokenMatches(t, term));
      if (hit) score += weight;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent.id;
    }
  }
  return bestScore >= THRESHOLD ? best : 'fallback';
}

/** Découpe un texte en « mots » (avec leurs espaces) pour le streaming. */
export function splitWords(text: string): string[] {
  return text.match(/\S+\s*/g) ?? [];
}
