import type { Localized } from '../types';

/** Qui agit à cette étape : l'IA, l'analyste, le système — ou personne dans l'outil (échanges hors outil). */
export type Actor = 'ai' | 'human' | 'system' | 'offline';

export interface FlowNode {
  actor: Actor;
  label: Localized;
}

export interface FlowStage {
  /** Numéro affiché dans la pastille (absent pour l'entrée et la sortie) */
  step?: number;
  title: Localized;
  /** Les actions sont des alternatives (« ou ») plutôt qu'une séquence */
  alternatives?: boolean;
  /** Mention de répétition, ex. « pour chaque covenant » */
  repeat?: Localized;
  /** Points de friction constatés à cette étape (ancien parcours) */
  frictions?: Localized[];
  nodes: FlowNode[];
}

export type JourneyId = 'before' | 'after';

export interface Journey {
  label: Localized;
  stages: FlowStage[];
}

export const journeys: Record<JourneyId, Journey> = {
  /* Ancien parcours : décrit par Anne-Sophie (deux modules du même outil, saisie manuelle). */
  before: {
    label: { fr: 'Avant', en: 'Before' },
    stages: [
      {
        step: 1,
        title: { fr: 'Obtenir le document', en: 'Getting the document' },
        frictions: [{ fr: 'Relances répétées pour obtenir les pièces', en: 'Repeated reminders to get the files' }],
        nodes: [
          { actor: 'offline', label: { fr: 'Échanges et relances entre plusieurs personnes pour recevoir les pièces', en: 'Messages and reminders between several people to receive the files' } },
        ],
      },
      {
        step: 2,
        title: { fr: 'Module Contrat', en: 'Contract module' },
        frictions: [{ fr: 'Délai entre la réception et la saisie', en: 'Delay between receipt and data entry' }],
        nodes: [
          { actor: 'human', label: { fr: 'Dépose le document dans la partie Documents du contrat', en: 'Uploads the document in the contract’s Documents section' } },
        ],
      },
      {
        step: 3,
        title: { fr: 'Module Covenant', en: 'Covenant module' },
        nodes: [
          { actor: 'human', label: { fr: 'Change de module', en: 'Switches module' } },
          { actor: 'human', label: { fr: 'Lit le certificat pour y retrouver chaque valeur', en: 'Reads the certificate to find each value' } },
        ],
      },
      {
        step: 4,
        title: { fr: 'Calendrier du contrat', en: 'Contract calendar' },
        repeat: { fr: 'Répété pour chaque covenant', en: 'Repeated for every covenant' },
        frictions: [
          { fr: 'Erreurs de saisie à corriger', en: 'Typing errors to correct' },
          { fr: 'Breach recalculé à la main', en: 'Breach re-computed by hand' },
        ],
        nodes: [
          { actor: 'human', label: { fr: 'Crée à la main la ligne de monitoring de la période', en: 'Creates the monitoring line for the period by hand' } },
          { actor: 'human', label: { fr: 'Saisit valeur réelle, dates et statut', en: 'Types in actual value, dates and status' } },
          { actor: 'human', label: { fr: 'Recontrôle le breach calculé par l’outil', en: 'Re-checks the breach computed by the tool' } },
          { actor: 'human', label: { fr: 'Lie le document à la période suivie', en: 'Links the document to the monitored period' } },
        ],
      },
    ],
  },

  /* Nouveau parcours : relevé dans le prototype (stepper Documents analysis → Contract matching → Extraction & matching). */
  after: {
    label: { fr: 'Après', en: 'After' },
    stages: [
      {
        title: { fr: 'Réception', en: 'Intake' },
        alternatives: true,
        nodes: [
          { actor: 'system', label: { fr: 'Email reçu dans la file « Submissions »', en: 'Email received in the “Submissions” queue' } },
          { actor: 'human', label: { fr: 'Dépôt manuel d’un document', en: 'Manual document upload' } },
        ],
      },
      {
        step: 1,
        title: { fr: 'Analyse des documents', en: 'Documents analysis' },
        nodes: [
          { actor: 'ai', label: { fr: 'Lit les pièces : emprunteur, facility, date de signature', en: 'Reads the files: borrower, facility, signature date' } },
        ],
      },
      {
        step: 2,
        title: { fr: 'Rapprochement du contrat', en: 'Contract matching' },
        nodes: [
          { actor: 'ai', label: { fr: 'Propose les contrats possibles', en: 'Suggests the possible contracts' } },
          { actor: 'human', label: { fr: 'Accepte, ou choisit le contrat à la main', en: 'Accepts, or picks the contract manually' } },
        ],
      },
      {
        step: 3,
        title: { fr: 'Extraction & rapprochement des covenants', en: 'Covenant extraction & matching' },
        nodes: [
          { actor: 'ai', label: { fr: 'Extrait chaque covenant et sa valeur', en: 'Extracts each covenant and its value' } },
          { actor: 'ai', label: { fr: 'Propose le covenant correspondant du contrat', en: 'Suggests the matching covenant of the contract' } },
          { actor: 'human', label: { fr: 'Valide un par un, face à la source — ou suit à la main', en: 'Validates one by one, against the source — or monitors manually' } },
        ],
      },
      {
        title: { fr: 'Suivi', en: 'Monitoring' },
        nodes: [
          { actor: 'system', label: { fr: 'Valeurs poussées dans le calendrier des covenants', en: 'Values pushed to the covenant calendar' } },
          { actor: 'human', label: { fr: 'Échéances, breach et réception suivis par contrat', en: 'Due dates, breach and receipt tracked per contract' } },
        ],
      },
    ],
  },
};

export const flowStrings: Localized<{
  eyebrow: string;
  title: string;
  actors: Record<Actor, string>;
  step: string;
  or: string;
  navLabel: string;
  navFlow: string;
  navUxFlow: string;
  navProto: string;
  detail: string;
  friction: string;
  open: string;
  ctaTitle: string;
  ctaText: string;
  viewerTitle: string;
  viewerNote: string;
  restart: string;
  desktopHint: string;
}> = {
  fr: {
    eyebrow: 'Parcours utilisateur · avant / après',
    title: 'Du document reçu au covenant suivi',
    actors: { ai: 'IA', human: 'Analyste', system: 'Système', offline: 'Hors outil' },
    step: 'Étape',
    or: 'ou',
    navLabel: 'Sections de l’étude de cas',
    navFlow: 'Avant / Après',
    navUxFlow: 'Le flow',
    navProto: 'Prototype',
    detail: 'Les deux parcours',
    friction: 'Point de friction',
    open: 'Tester le prototype',
    ctaTitle: 'Essayez le parcours vous-même',
    ctaText: 'Le prototype s’ouvre ici, sans quitter le portfolio. Il est entièrement navigable : ouvrez une soumission, acceptez un contrat, validez un covenant.',
    viewerTitle: 'Suivi des clauses de crédit — prototype navigable',
    viewerNote: 'Données fictives · marque et couleurs anonymisées',
    restart: 'Recommencer',
    desktopHint: 'Prototype conçu pour un écran d’ordinateur : il est réduit pour tenir dans cette fenêtre.',
  },
  en: {
    eyebrow: 'User journey · before / after',
    title: 'From the received document to the monitored covenant',
    actors: { ai: 'AI', human: 'Analyst', system: 'System', offline: 'Outside the tool' },
    step: 'Step',
    or: 'or',
    navLabel: 'Case study sections',
    navFlow: 'Before / After',
    navUxFlow: 'The flow',
    navProto: 'Prototype',
    detail: 'The two journeys',
    friction: 'Pain point',
    open: 'Try the prototype',
    ctaTitle: 'Try the journey yourself',
    ctaText: 'The prototype opens here, without leaving the portfolio. It is fully navigable: open a submission, accept a contract, validate a covenant.',
    viewerTitle: 'Loan clause monitoring — navigable prototype',
    viewerNote: 'Fictional data · brand and colours anonymised',
    restart: 'Restart',
    desktopHint: 'Prototype designed for a desktop screen: it is scaled down to fit this window.',
  },
};

/** Données d'un schéma de flow affiché par le composant FlowBoard. */
export interface FlowBoardData {
  eyebrow: Localized;
  title: Localized;
  /** Un ou deux parcours ; `muted` marque l'ancien parcours (pastilles sombres) */
  journeys: (Journey & { id: string; muted?: boolean })[];
  defaultView?: string;
  /** Libellés d'acteurs propres à ce schéma (sinon ceux par défaut) */
  actors?: Localized<Partial<Record<Actor, string>>>;
}

export const covenantBoard: FlowBoardData = {
  eyebrow: { fr: flowStrings.fr.eyebrow, en: flowStrings.en.eyebrow },
  title: { fr: flowStrings.fr.title, en: flowStrings.en.title },
  journeys: [
    { id: 'before', muted: true, ...journeys.before },
    { id: 'after', ...journeys.after },
  ],
  defaultView: 'before',
};

export const COVENANT_PROTOTYPE = 'prototypes/covenant-monitoring.html#screen=0';
