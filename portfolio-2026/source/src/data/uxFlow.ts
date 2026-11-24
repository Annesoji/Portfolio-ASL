import type { FlowBoardData } from './covenantFlow';

/**
 * Flow design « de la recherche au réel » : à chaque étape l'IA produit, le designer décide.
 * Repris du retour d'expérience rédigé par Anne-Sophie sur le design augmenté par l'IA.
 */
export const uxBoard: FlowBoardData = {
  eyebrow: { fr: 'Flow design · de la recherche au réel', en: 'Design flow · from research to reality' },
  title: { fr: 'L’IA produit, le designer décide', en: 'The AI produces, the designer decides' },
  actors: {
    fr: { ai: 'L’IA produit', human: 'Le designer décide' },
    en: { ai: 'The AI produces', human: 'The designer decides' },
  },
  journeys: [
    {
      id: 'flow',
      label: { fr: 'Flow', en: 'Flow' },
      stages: [
        {
          step: 1,
          title: { fr: 'Recherche', en: 'Research' },
          nodes: [
            { actor: 'ai', label: { fr: 'Analyse des données utilisateurs, segmentation, écarts', en: 'User data analysis, segmentation, gap analysis' } },
            { actor: 'human', label: { fr: 'Cadre la recherche, anime le cadrage UX', en: 'Frames the research, runs the UX framing' } },
          ],
        },
        {
          step: 2,
          title: { fr: 'Intention', en: 'Intention' },
          nodes: [
            { actor: 'ai', label: { fr: 'Benchmark large, pistes multiples', en: 'Wide benchmark, multiple directions' } },
            { actor: 'human', label: { fr: 'Fixe l’intention, retient les pistes', en: 'Sets the intention, keeps the directions' } },
          ],
        },
        {
          step: 3,
          title: { fr: 'Génération 1 · prototypage design', en: 'Generation 1 · design prototyping' },
          nodes: [
            { actor: 'ai', label: { fr: 'Itérations de design, plusieurs solutions', en: 'Design iterations, several solutions' } },
            { actor: 'human', label: { fr: 'Juge et sélectionne les solutions', en: 'Judges and selects the solutions' } },
          ],
        },
        {
          step: 4,
          title: { fr: 'Génération 2 · prototypage code', en: 'Generation 2 · code prototyping' },
          nodes: [
            { actor: 'ai', label: { fr: 'Itérations de code sur le Design System', en: 'Code iterations on the Design System' } },
            { actor: 'human', label: { fr: 'Arbitre avec les développeurs', en: 'Arbitrates with the developers' } },
          ],
        },
        {
          step: 5,
          title: { fr: 'Implémentation', en: 'Implementation' },
          nodes: [
            { actor: 'ai', label: { fr: 'Environnement de test, livraison prête', en: 'Test environment, delivery ready' } },
            { actor: 'human', label: { fr: 'Valide la conformité au design', en: 'Validates design compliance' } },
          ],
        },
        {
          step: 6,
          title: { fr: 'Tests utilisateurs', en: 'User tests' },
          nodes: [
            { actor: 'ai', label: { fr: 'Protocoles de test, synthèse des retours', en: 'Test protocols, feedback synthesis' } },
            { actor: 'human', label: { fr: 'Observe les utilisateurs, interprète', en: 'Observes users, interprets' } },
          ],
        },
        {
          step: 7,
          title: { fr: 'Rétro & documentation', en: 'Retro & documentation' },
          nodes: [
            { actor: 'ai', label: { fr: 'Specs d’interaction, mise à jour du Design System', en: 'Interaction specs, Design System updates' } },
            { actor: 'human', label: { fr: 'Valide ce qui entre dans la connaissance commune', en: 'Validates what enters the shared knowledge' } },
          ],
        },
      ],
    },
  ],
};
