import type { Lang, ModelId } from '../types';

export interface UIStrings {
  role: string;
  newChat: string;
  caseStudies: string;
  personalProjects: string;
  dsProject: { title: string; tag: string };
  quickAccess: string;
  viewCV: string;
  contactEmail: string;
  language: string;
  theme: string;
  light: string;
  dark: string;
  openMenu: string;
  closeMenu: string;
  toggleSidebar: string;
  newSession: string;
  model: string;
  models: Record<ModelId, { name: string; hint: string; desc: string }>;
  heroTitle: string;
  heroSubtitle: string;
  suggestions: { title: string; intentId: string }[];
  placeholders: string[];
  send: string;
  stop: string;
  commands: string;
  slash: { cmd: string; desc: string }[];
  stopped: string;
  thinking: string;
  followUps: string;
  actionCV: string;
  actionEmail: string;
  close: string;
  cv: {
    title: string;
    tab: string;
    closeTab: string;
    download: string;
    downloadHint: string;
    experience: string;
    skills: string;
    education: string;
    languages: string;
    interests: string;
  };
  emailSubject: string;
  skill: { badge: string; caption: string; copy: string; copied: string };
  assistantName: string;
  you: string;
}

export const ui: Record<Lang, UIStrings> = {
  fr: {
    role: 'Product Designer · AI & Design Ops',
    newChat: 'Nouvelle conversation',
    caseStudies: 'Projets',
    personalProjects: 'Projets personnels',
    dsProject: { title: 'Design System appliqué par l’IA', tag: '2026 · Portfolio · Skill IA' },
    quickAccess: 'Accès rapide et contact',
    viewCV: 'Voir et télécharger le CV',
    contactEmail: 'Contacter par email',
    language: 'Langue',
    theme: 'Thème',
    light: 'Light',
    dark: 'Dark',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    toggleSidebar: 'Afficher / masquer la barre latérale',
    newSession: 'Nouvelle conversation',
    model: 'Niveau de détail',
    models: {
      standard: { name: 'ASL Complet', hint: 'La réponse structurée', desc: 'Contexte, rôle, solution et résultats.' },
      express: { name: 'ASL Court', hint: 'L’essentiel', desc: 'Quelques points et les chiffres clés.' },
      deepdive: { name: 'ASL Détaillé', hint: 'Avec la méthode', desc: 'La réponse complète, plus la méthode de travail.' },
    },
    heroTitle: "Bonjour, je suis l'assistant portfolio d'Anne-Sophie Leroy.",
    heroSubtitle:
      'Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Posez-moi une question sur son parcours, ses projets chez BNP Paribas ou sa façon d’industrialiser le design.',
    suggestions: [
      { title: 'Profil et valeur ajoutée', intentId: 'profile' },
      { title: 'Le Design System de ce portfolio', intentId: 'portfoliods' },
      { title: 'Impact et chiffres clés', intentId: 'impact' },
      { title: 'Recherche actuelle', intentId: 'search' },
    ],
    placeholders: [
      'Posez une question sur Anne-Sophie, ses AI skills, son parcours...',
      'Ex. : « Comment son équipe design travaille-t-elle avec l’IA ? »',
      'Tapez / pour les commandes : /cv, /projets, /skills, /contact, /stack',
    ],
    send: 'Envoyer',
    stop: 'Arrêter la génération',
    commands: 'Commandes',
    slash: [
      { cmd: '/cv', desc: 'Son CV' },
      { cmd: '/projets', desc: 'Lister les études de cas' },
      { cmd: '/skills', desc: 'Compétences clés' },
      { cmd: '/contact', desc: 'Écrire à Anne-Sophie' },
      { cmd: '/stack', desc: 'Outils et stack' },
      { cmd: '/designsystem', desc: 'Le Design System de ce portfolio' },
    ],
    stopped: 'Génération interrompue',
    thinking: 'Réflexion en cours',
    followUps: 'Pour aller plus loin',
    actionCV: 'Voir le CV',
    actionEmail: 'Envoyer un email',
    close: 'Fermer',
    cv: {
      title: 'Curriculum Vitae',
      tab: 'CV',
      closeTab: 'Fermer le CV',
      download: 'Télécharger en PDF',
      downloadHint: 'Si le PDF n’est pas disponible, la fenêtre d’impression s’ouvre : choisissez « Enregistrer au format PDF ».',
      experience: 'Expériences',
      skills: 'Compétences et outils',
      education: 'Formation',
      languages: 'Langues',
      interests: 'Engagements et intérêts',
    },
    emailSubject: 'Opportunité Product Designer',
    skill: {
      badge: 'Skill réel',
      caption: 'Le skill qui encadre le design de ce portfolio, conçu et testé par Anne-Sophie avec Claude Code. Fichiers réels du projet.',
      copy: 'Copier',
      copied: 'Copié !',
    },
    assistantName: 'Assistant ASL',
    you: 'Vous',
  },
  en: {
    role: 'Product Designer · AI & Design Ops',
    newChat: 'New conversation',
    caseStudies: 'Projects',
    personalProjects: 'Personal projects',
    dsProject: { title: 'AI-applied Design System', tag: '2026 · Portfolio · AI skill' },
    quickAccess: 'Quick access and contact',
    viewCV: 'View and download the CV',
    contactEmail: 'Contact by email',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleSidebar: 'Show / hide sidebar',
    newSession: 'New conversation',
    model: 'Level of detail',
    models: {
      standard: { name: 'ASL Full', hint: 'The structured answer', desc: 'Context, role, solution and results.' },
      express: { name: 'ASL Short', hint: 'The essentials', desc: 'A few points and the key figures.' },
      deepdive: { name: 'ASL In-depth', hint: 'With the method', desc: 'The full answer, plus the working method.' },
    },
    heroTitle: "Hello, I'm Anne-Sophie Leroy's portfolio assistant.",
    heroSubtitle:
      'Product Designer specialising in UX/UI, Design Ops and AI workflows. Ask me about her background, her projects at BNP Paribas or how she industrialises design.',
    suggestions: [
      { title: 'Profile and added value', intentId: 'profile' },
      { title: 'This portfolio’s Design System', intentId: 'portfoliods' },
      { title: 'Impact and key figures', intentId: 'impact' },
      { title: 'Current search', intentId: 'search' },
    ],
    placeholders: [
      'Ask about Anne-Sophie, her AI skills, her background...',
      'E.g. “How does her design team work with AI?”',
      'Type / for commands: /cv, /projects, /skills, /contact, /stack',
    ],
    send: 'Send',
    stop: 'Stop generating',
    commands: 'Commands',
    slash: [
      { cmd: '/cv', desc: 'Her CV' },
      { cmd: '/projects', desc: 'List case studies' },
      { cmd: '/skills', desc: 'Key skills' },
      { cmd: '/contact', desc: 'Write to Anne-Sophie' },
      { cmd: '/stack', desc: 'Tools and stack' },
      { cmd: '/designsystem', desc: 'This portfolio’s Design System' },
    ],
    stopped: 'Generation stopped',
    thinking: 'Thinking',
    followUps: 'Go further',
    actionCV: 'View CV',
    actionEmail: 'Send an email',
    close: 'Close',
    cv: {
      title: 'Curriculum Vitae',
      tab: 'CV',
      closeTab: 'Close the CV',
      download: 'Download as PDF',
      downloadHint: 'If the PDF is not available, the print dialog opens: choose “Save as PDF”.',
      experience: 'Experience',
      skills: 'Skills and tools',
      education: 'Education',
      languages: 'Languages',
      interests: 'Commitments and interests',
    },
    emailSubject: 'Product Designer opportunity',
    skill: {
      badge: 'Real skill',
      caption: 'The skill that frames this portfolio’s design, designed and tested by Anne-Sophie with Claude Code. Real project files (in French).',
      copy: 'Copy',
      copied: 'Copied!',
    },
    assistantName: 'ASL Assistant',
    you: 'You',
  },
};
