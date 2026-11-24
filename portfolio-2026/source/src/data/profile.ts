import type { Experience, Localized, Project } from '../types';

export const contact = {
  name: 'Anne-Sophie Leroy',
  monogram: 'ASL',
  email: 'leroy.annesophie02@gmail.com',
  phone: '06 30 47 84 39',
  phoneHref: 'tel:+33630478439',
  linkedin: 'linkedin.com/in/anne-sophie-leroy',
  linkedinHref: 'https://www.linkedin.com/in/anne-sophie-leroy',
  location: 'Paris, France',
  cvFile: 'CV-Anne-Sophie-Leroy.pdf',
};

export const title: Localized = {
  fr: 'Product Designer — UX/UI, Design Ops & AI Workflows',
  en: 'Product Designer — UX/UI, Design Ops & AI Workflows',
};

export const pitch: Localized = {
  fr: "Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Je conjugue un héritage créatif issu des arts visuels et de la mode avec une forte expertise technique (Design System, AI Skills, vibecoding) pour concevoir des produits complexes plus lisibles et industrialiser la production des équipes design.",
  en: 'Product Designer specialising in UX/UI, Design Ops and AI workflows. I combine a creative heritage from visual arts and fashion with strong technical expertise (Design System, AI Skills, vibecoding) to make complex products more readable and to industrialise how design teams deliver.',
};

export const projects: Project[] = [
  {
    id: 'bnp',
    intentId: 'bnp',
    title: {
      fr: 'Cadrer une équipe UX augmentée par l’IA',
      en: 'Framing an AI-augmented UX team',
    },
    tag: { fr: 'Banque · Design Ops IA', en: 'Banking · AI Design Ops' },
  },
  {
    id: 'covenant',
    intentId: 'covenant',
    title: {
      fr: 'Covenant monitoring assisté par IA',
      en: 'AI-assisted covenant monitoring',
    },
    tag: { fr: 'Banque d’investissement · IA', en: 'Investment bank · AI' },
  },
  {
    id: 'grdf',
    intentId: 'grdf',
    title: {
      fr: 'GRDF — Refonte éco-conçue & RGAA',
      en: 'GRDF — Eco-designed redesign & RGAA',
    },
    tag: { fr: 'Énergie · A11y', en: 'Energy · A11y' },
  },
  {
    id: 'cdc',
    intentId: 'cdc',
    title: {
      fr: 'Caisse des Dépôts — Refonte d’un outil métier de gestion de carrière',
      en: 'Caisse des Dépôts — Redesign of a career-management business tool',
    },
    tag: { fr: 'Secteur public · Outil métier', en: 'Public sector · Business tool' },
  },
];

export const experiences: Experience[] = [
  {
    company: 'mc2i',
    role: {
      fr: 'Product Designer UX/UI pour solutions IA',
      en: 'UX/UI Product Designer for AI solutions',
    },
    period: { fr: 'Janv. 2024 – Aujourd’hui', en: 'Jan 2024 – Present' },
    location: 'Paris',
    bullets: { fr: [], en: [] },
    missions: [
      {
        client: 'BNP Paribas CIB',
        period: { fr: 'Août 2024 – Aujourd’hui', en: 'Aug 2024 – Present' },
        role: {
          fr: 'UX UI Product Designer pour solutions IA',
          en: 'UX UI Product Designer for AI solutions',
        },
        bullets: {
          fr: [
            'Refonte complète de la chaîne de crédit pour grandes entreprises : automatisation de processus complexes par l’IA pour réduire significativement la charge cognitive des utilisateurs.',
            'Optimisation du workflow design par l’IA : utilisation du vibecoding pour générer des prototypes haute fidélité en cohérence avec le Design System. Génération des spécifications (.md) UX UI.',
            'Design Ops : co-construction de processus transverses entre les pôles Technique, UX et Produit pour fluidifier et accélérer le cycle de conception. Création de skills pour standardiser et accélérer le travail des équipes.',
            'Gouvernance du Design System : gouvernance des composants UI pour l’IA.',
            'Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.',
            'Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.',
            'Résultats : +5 modules sur 17 optimisés par l’IA aujourd’hui (environ 1 500 utilisateurs) ; réduction significative de la dette design et accélération du delivery ; une optimisation par l’IA adoptée par les utilisateurs ; réduction significative des erreurs de données.',
          ],
          en: [
            'Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.',
            'AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).',
            'Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.',
            'Design System governance: governance of UI components for AI.',
            'UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.',
            'Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.',
            'Results: +5 of 17 modules optimised with AI today (around 1,500 users); significant reduction of design debt and faster delivery; AI optimisation adopted by users; significant reduction of data errors.',
          ],
        },
      },
      {
        client: 'La Caisse des Dépôts',
        period: { fr: 'Avr. 2024 – Août 2024', en: 'Apr 2024 – Aug 2024' },
        role: { fr: 'Product Designer UX/UI', en: 'Product Designer UX/UI' },
        bullets: {
          fr: [
            'Refonte d’Emaj, outil interne de gestion stratégique des carrières : entretiens utilisateurs, analyse de données, ateliers de co-création, prototypage haute fidélité, tests utilisateurs et coordination inter-équipes.',
          ],
          en: [
            'Redesign of Emaj, an internal strategic career-management tool: user interviews, data analysis, co-creation workshops, high-fidelity prototyping, user testing and cross-team coordination.',
          ],
        },
      },
      {
        client: 'GRDF',
        period: { fr: 'Janv. 2024 – Mai 2024', en: 'Jan 2024 – May 2024' },
        role: { fr: 'Product Designer UX/UI', en: 'Product Designer UX/UI' },
        bullets: {
          fr: [
            'Refonte et rebranding d’Act4Gaz vers justdecarb.grdf.fr : audits UX et accessibilité (RGAA), nouvelle identité graphique, Design System dédié sobre et accessible, maquettes mobile-first.',
            'Impact : Note C EcoIndex et conformité RGAA.',
          ],
          en: [
            'Redesign and rebranding of Act4Gaz into justdecarb.grdf.fr: UX and accessibility (RGAA) audits, new visual identity, dedicated lean and accessible Design System, mobile-first mockups.',
            'Impact: EcoIndex grade C and RGAA compliance.',
          ],
        },
      },
    ],
  },
  {
    company: 'Groupe Kering',
    role: { fr: 'Product Designer', en: 'Product Designer' },
    period: { fr: 'Sept. 2022 – Déc. 2023', en: 'Sep 2022 – Dec 2023' },
    location: 'Paris',
    bullets: {
      fr: [
        'Numérisation d’une carte de réduction physique en application mobile évolutive (Privilege Card).',
        'Recherche utilisateurs, ateliers, audits et cartographies UX, conception UI et composants de Design System, tests utilisateurs itératifs.',
        'Impact : 40 000 utilisateurs actifs ; fiabilisation des quotas d’achat et des restrictions de vente en boutique.',
      ],
      en: [
        'Turned a physical discount card into a scalable mobile app (Privilege Card).',
        'User research, workshops, UX audits and journey maps, UI design and Design System components, iterative user testing.',
        'Impact: 40,000 active users; more reliable purchase quotas and in-store sales restrictions.',
      ],
    },
  },
  {
    company: 'Eden Park',
    role: {
      fr: 'Coordinatrice de contenu digital & de projet',
      en: 'Digital Content & Project Coordinator',
    },
    period: { fr: 'Janv. 2021 – Juil. 2022', en: 'Jan 2021 – Jul 2022' },
    location: 'Paris',
    bullets: {
      fr: [
        'Pilotage de projets digitaux de bout en bout, calendrier éditorial, maintenance UX du site web, production visuelle (photo/vidéo) pour campagnes SMO/SEA.',
        'Impact : +20 % de ventes e-commerce en 1 an.',
      ],
      en: [
        'End-to-end digital project management, editorial calendar, website UX maintenance, visual production (photo/video) for SMO/SEA campaigns.',
        'Impact: +20% e-commerce sales in one year.',
      ],
    },
  },
  {
    company: 'Balmain · Indress',
    role: {
      fr: 'Designer Broderie (Balmain) · Designer Studio (Indress)',
      en: 'Embroidery Designer (Balmain) · Studio Designer (Indress)',
    },
    period: { fr: '2019', en: '2019' },
    location: 'Paris',
    bullets: { fr: [], en: [] },
  },
];

export const skillGroups: { label: Localized; items: Localized<string[]> }[] = [
  {
    label: { fr: 'Design & Prototypage', en: 'Design & Prototyping' },
    items: {
      fr: ['Figma (Expert)', 'Storybook', 'Zeroheight', 'After Effects', 'Illustrator', 'Photoshop'],
      en: ['Figma (Expert)', 'Storybook', 'Zeroheight', 'After Effects', 'Illustrator', 'Photoshop'],
    },
  },
  {
    label: { fr: 'IA & Vibecoding', en: 'AI & Vibecoding' },
    items: {
      fr: ['Claude Code', 'AI Skills', 'Prompt Engineering', 'Gemini', 'Midjourney', 'Adobe Firefly'],
      en: ['Claude Code', 'AI Skills', 'Prompt Engineering', 'Gemini', 'Midjourney', 'Adobe Firefly'],
    },
  },
  {
    label: { fr: 'Product & Tech', en: 'Product & Tech' },
    items: {
      fr: ['Discovery', 'Design Ops', 'Design System', 'Specs .md', 'HTML/CSS (Handoff)', 'Jira', 'Confluence'],
      en: ['Discovery', 'Design Ops', 'Design System', '.md specs', 'HTML/CSS (Handoff)', 'Jira', 'Confluence'],
    },
  },
];

export const education: { title: Localized; school: string; period: string }[] = [
  {
    title: { fr: 'Master Design UX/UI & Gestion de projet', en: 'Master’s in UX/UI Design & Project Management' },
    school: 'Digital School of Paris',
    period: '2021 – 2023',
  },
  {
    title: { fr: 'Bachelor Design de Mode & Textile', en: 'Bachelor in Fashion & Textile Design' },
    school: 'Atelier Chardon Savard, Nantes',
    period: '2016 – 2020',
  },
  {
    title: { fr: 'MANAA — Arts Appliqués', en: 'MANAA — Applied Arts foundation year' },
    school: 'IMAD, Caen',
    period: '',
  },
];

export const languages: Localized<string[]> = {
  fr: ['Français — Natif', 'Anglais — Courant', 'Espagnol — B1'],
  en: ['French — Native', 'English — Fluent', 'Spanish — B1'],
};

export const interests: Localized<string[]> = {
  fr: [
    'Bénévolat : inclusion sociale et orientation administrative des jeunes de l’Aide Sociale à l’Enfance',
    'Piano classique (+5 ans)',
    'Course à pied',
  ],
  en: [
    'Volunteering: social inclusion and administrative guidance for young people in child welfare care (ASE)',
    'Classical piano (5+ years)',
    'Running',
  ],
};
