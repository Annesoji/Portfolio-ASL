export type Lang = 'fr' | 'en';
export type Theme = 'light' | 'dark';
export type ModelId = 'standard' | 'express' | 'deepdive';
export type ActionId = 'cv' | 'email';
export type AttachmentId = 'skill' | 'covenant' | 'ds' | 'grdf' | 'vitalize';

export type Localized<T = string> = Record<Lang, T>;

/** [terme normalisé (sans accent, minuscule), poids] */
export type Keyword = [string, number];

export interface AnswerVariants {
  /** Réponse équilibrée (ASL Complet) */
  standard: string;
  /** Synthèse en bullet points (ASL Court) */
  express: string;
  /** Complément méthodologique ajouté à la réponse standard (ASL Détaillé) */
  deep?: string;
}

export interface Intent {
  id: string;
  /** Question canonique affichée dans la bulle utilisateur */
  question: Localized;
  /** Libellé court pour les chips de relance */
  chip?: Localized;
  keywords: Keyword[];
  answer: Localized<AnswerVariants>;
  followUps?: string[];
  actions?: ActionId[];
  attachment?: AttachmentId;
  /** Schéma de flow affiché en tête de réponse */
  flow?: 'covenant' | 'ux' | 'grdf';
  /** Longue réponse : affiche une barre d'ancres vers ses sections (titres ###) */
  anchors?: boolean;
}

export interface UserMessage {
  id: string;
  role: 'user';
  /** Texte libre saisi par l'utilisateur */
  text?: string;
  /** Ou question canonique d'une intention (traduisible) */
  questionOf?: string;
}

export interface AssistantMessage {
  id: string;
  role: 'assistant';
  intentId: string;
  model: ModelId;
  /** Nombre de mots affichés si la génération a été stoppée */
  stoppedAt?: number;
}

export type Message = UserMessage | AssistantMessage;

export interface Project {
  id: string;
  intentId: string;
  title: Localized;
  tag: Localized;
}

export interface Experience {
  company: string;
  role: Localized;
  period: Localized;
  location: string;
  bullets: Localized<string[]>;
  missions?: {
    client: string;
    period: Localized;
    role: Localized;
    bullets: Localized<string[]>;
  }[];
}
