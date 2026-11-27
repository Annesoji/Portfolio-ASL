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
  fr: 'Product Designer à l’intersection de l’UX/UI, du Design System et de l’IA. Je conçois des interfaces complexes et industrialise les workflows design. Du cadrage au prototypage en vibecoding, avec un regard façonné par les arts visuels.',
  en: 'Product Designer at the intersection of UX/UI, Design Systems and AI. I design complex interfaces and industrialise design workflows. From framing to vibecoded prototypes, with an eye shaped by the visual arts.',
};

export const projects: Project[] = [
  {
    id: 'bnp',
    intentId: 'bnp',
    title: {
      fr: 'Banque d’investissement · Cadrer une équipe UX augmentée par l’IA',
      en: 'Investment bank · Framing an AI-augmented UX team',
    },
    tag: { fr: '2026 · Design Ops · IA', en: '2026 · Design Ops · AI' },
  },
  {
    id: 'covenant',
    intentId: 'covenant',
    title: {
      fr: 'Banque d’investissement · Suivi des clauses de crédit assisté par l’IA',
      en: 'Investment bank · AI-assisted monitoring of loan clauses',
    },
    tag: { fr: '2026 · Crédit · IA', en: '2026 · Lending · AI' },
  },
  {
    id: 'grdf',
    intentId: 'grdf',
    title: {
      fr: 'GRDF · Refonte éco-conçue et RGAA',
      en: 'GRDF · Eco-designed redesign and RGAA',
    },
    tag: { fr: '2024 · Énergie · Accessibilité', en: '2024 · Energy · Accessibility' },
  },
];

/** Projets personnels, rangés dans le dossier repliable du menu (après le Design System du portfolio). */
export const personalProjects: Project[] = [
  {
    id: 'vitalize',
    intentId: 'vitalize',
    title: {
      fr: 'Vitaliz · Des personas à l’application mobile',
      en: 'Vitaliz · From personas to the mobile app',
    },
    tag: { fr: '2023 · Master 2 · Étude UX complète', en: '2023 · Master’s year 2 · Full UX study' },
  },
  {
    id: 'bloombar',
    intentId: 'bloombar',
    title: {
      fr: 'Bloom Bar · Direction artistique et illustration 3D',
      en: 'Bloom Bar · Art direction and 3D illustration',
    },
    tag: { fr: '2023 · Master 2 · Direction artistique', en: '2023 · Master’s year 2 · Art direction' },
  },
  {
    id: 'rebrand',
    intentId: 'rebrand',
    title: {
      fr: 'McDonald’s · Rebranding pour une nouvelle cible',
      en: 'McDonald’s · Rebranding for a new audience',
    },
    tag: { fr: '2021 · Master 1 · Identité visuelle', en: '2021 · Master’s year 1 · Visual identity' },
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
            'Gouvernance du Design System : des composants UI pensés pour l’IA.',
            'Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.',
            'Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.',
            'Résultats : +5 modules sur 17 optimisés par l’intégration de l’IA (environ 1 500 utilisateurs) ; réduction significative de la dette design, avec des composants unifiés et une navigation homogène ; une optimisation par l’IA adoptée, avec des retours positifs des utilisateurs cibles ; réduction significative des erreurs de données et accélération du delivery.',
          ],
          en: [
            'Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.',
            'AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).',
            'Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.',
            'Design System governance: UI components designed for AI.',
            'UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.',
            'Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.',
            'Results: 5+ of 17 modules optimised by integrating AI (around 1,500 users); significant reduction of design debt, with unified components and consistent navigation; AI optimisation adopted, with positive feedback from target users; significant reduction of data errors and faster delivery.',
          ],
        },
      },
      {
        client: 'La Caisse des Dépôts',
        period: { fr: 'Avr. 2024 – Août 2024', en: 'Apr 2024 – Aug 2024' },
        role: { fr: 'UX UI Designer', en: 'UX UI Designer' },
        bullets: {
          fr: [
            'Design et refonte d’Emaj, outil interne de gestion stratégique des carrières.',
            'Insights utilisateurs & analyse : entretiens utilisateurs et analyse de données pour en extraire des insights exploitables et définir les besoins fondamentaux des utilisateurs.',
            'Facilitation d’ateliers : planification et animation d’ateliers collaboratifs pour aligner les parties prenantes et co-créer des solutions.',
            'Prototypage haute fidélité et tests utilisateurs : prototypes interactifs pour valider les flux utilisateurs et les fonctionnalités.',
            'Coordination de projet : organisation des activités inter-équipes.',
          ],
          en: [
            'Design and redesign of Emaj, an internal strategic career-management tool.',
            'User insights & analysis: user interviews and data analysis to extract actionable insights and define users’ core needs.',
            'Workshop facilitation: planned and ran collaborative workshops to align stakeholders and co-create solutions.',
            'High-fidelity prototyping and user testing: interactive prototypes to validate user flows and features.',
            'Project coordination: organised cross-team activities.',
          ],
        },
      },
      {
        client: 'GRDF',
        period: { fr: 'Janv. 2024 – Mai 2024', en: 'Jan 2024 – May 2024' },
        role: { fr: 'UX UI Designer', en: 'UX UI Designer' },
        bullets: {
          fr: [
            'Refonte et rebranding de la plateforme Act4Gaz en justdecarb.grdf.fr, pour une expérience digitale performante, accessible et éco-conçue.',
            'Audits UX & ergonomie : audits approfondis d’accessibilité et d’utilisabilité pour identifier les points de friction et garantir la conformité aux normes de durabilité numérique (RGAA).',
            'Identité visuelle & Design System : nouvelle identité graphique et bibliothèque de Design System dédiée, accessible et éco-responsable.',
            'Prototypage haute fidélité : maquettes responsives mobile first et prototypes interactifs pour valider les parcours utilisateurs sur tous les appareils.',
            'Résultats : amélioration de la performance environnementale, avec la note C EcoIndex pour le nouveau site, tout en garantissant la conformité RGAA.',
          ],
          en: [
            'Redesign and rebranding of the Act4Gaz platform into justdecarb.grdf.fr, for a fast, accessible and eco-designed digital experience.',
            'UX & usability audits: in-depth accessibility and usability audits to identify pain points and ensure compliance with digital sustainability standards (RGAA).',
            'Visual identity & Design System: new visual identity and a dedicated, accessible and eco-responsible Design System library.',
            'High-fidelity prototyping: responsive mobile-first mockups and interactive prototypes to validate user journeys on every device.',
            'Results: better environmental performance, with an EcoIndex grade C for the new site, while ensuring RGAA compliance.',
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
        'Numérisation d’une carte de réduction physique, offrant une solution mobile évolutive pour une base de 40 000 utilisateurs.',
        'Recherche utilisateurs : direction d’entretiens et d’ateliers pour définir les besoins fondamentaux des utilisateurs.',
        'Stratégie UX : audits et cartographies UX pour simplifier les parcours utilisateurs complexes.',
        'Design UI : interfaces haute fidélité et composants de Design System évolutifs.',
        'Tests utilisateurs : tests itératifs pour valider et affiner les solutions de design.',
        'Résultats : 40 000 utilisateurs utilisent aujourd’hui l’application Privilege Card ; gestion des quotas d’achat optimisée et respect des restrictions de vente en boutique fiabilisé.',
      ],
      en: [
        'Turned a physical discount card into a scalable mobile solution for a base of 40,000 users.',
        'User research: led interviews and workshops to define users’ core needs.',
        'UX strategy: UX audits and journey maps to simplify complex user journeys.',
        'UI design: high-fidelity interfaces and scalable Design System components.',
        'User testing: iterative tests to validate and refine design solutions.',
        'Results: 40,000 people use the Privilege Card app today; optimised purchase-quota management and more reliable in-store sales restrictions.',
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
        'Coordination de projets digitaux de bout en bout, de la stratégie éditoriale à la création de contenu visuel pour le web et les réseaux sociaux.',
        'Stratégie éditoriale : gestion du calendrier de contenu et du flux de publication du site web.',
        'Maintenance du site web : gestion des tickets de maintenance liés au design et des mises à jour UX.',
        'Production visuelle : visuels photo et vidéo pour les campagnes SMO/SEA.',
        'Résultats : +20 % de ventes e-commerce en 1 an.',
      ],
      en: [
        'End-to-end coordination of digital projects, from editorial strategy to visual content for the web and social media.',
        'Editorial strategy: managed the content calendar and the website publishing flow.',
        'Website maintenance: handled design-related maintenance tickets and UX updates.',
        'Visual production: photo and video visuals for SMO/SEA campaigns.',
        'Results: +20% e-commerce sales in one year.',
      ],
    },
  },
  {
    company: 'Balmain · Indress',
    role: {
      fr: 'Designer Broderie (Balmain) · Designer Studio (Indress)',
      en: 'Embroidery Designer (Balmain) · Studio Designer (Indress)',
    },
    period: { fr: 'Oct. – Déc. 2019', en: 'Oct – Dec 2019' },
    location: 'Paris',
    bullets: { fr: [], en: [] },
  },
];

export const skillGroups: { label: Localized; items: Localized<string[]> }[] = [
  {
    label: { fr: 'Design & Prototypage', en: 'Design & Prototyping' },
    items: {
      fr: ['Figma (Expert)', 'After Effects', 'Photoshop', 'Illustrator', 'Storybook', 'Zeroheight', 'Vibecoding'],
      en: ['Figma (Expert)', 'After Effects', 'Photoshop', 'Illustrator', 'Storybook', 'Zeroheight', 'Vibecoding'],
    },
  },
  {
    label: { fr: 'Outils d’IA', en: 'AI tools' },
    items: {
      fr: ['Prompt Engineering', 'Claude Code', 'Midjourney', 'Adobe Firefly', 'Gemini'],
      en: ['Prompt Engineering', 'Claude Code', 'Midjourney', 'Adobe Firefly', 'Gemini'],
    },
  },
  {
    label: { fr: 'Produit & collaboration', en: 'Product & collaboration' },
    items: {
      fr: ['Jira', 'Confluence', 'Teams'],
      en: ['Jira', 'Confluence', 'Teams'],
    },
  },
  {
    label: { fr: 'Développement', en: 'Development' },
    items: {
      fr: ['HTML & CSS (handoff design-to-dev)'],
      en: ['HTML & CSS (design-to-dev handoff)'],
    },
  },
  {
    label: { fr: 'Compétences relationnelles', en: 'Interpersonal skills' },
    items: {
      fr: ['Curieuse et autodidacte', 'Sens du collectif', 'Adaptable'],
      en: ['Curious and self-taught', 'Team spirit', 'Adaptable'],
    },
  },
];

export const education: { title: Localized; school: string; period: string }[] = [
  {
    title: { fr: 'Certification Scrum PSPO I (Professional Scrum Product Owner)', en: 'Scrum PSPO I certification (Professional Scrum Product Owner)' },
    school: 'Scrum.org',
    period: '2026',
  },
  {
    title: { fr: 'Certificat de connaissance Numérique Responsable', en: 'Responsible Digital knowledge certificate' },
    school: 'Numérique durable, éthique et inclusif',
    period: '2026',
  },
  {
    title: { fr: 'Master Design UX/UI & Gestion de projet, en alternance', en: 'Master’s in UX/UI Design & Project Management, work-study' },
    school: 'Digital School of Paris',
    period: '2021 – 2023',
  },
  {
    title: { fr: 'Bachelor Design de Mode & Textile', en: 'Bachelor in Fashion & Textile Design' },
    school: 'Atelier Chardon Savard, Nantes',
    period: '2016 – 2020',
  },
  {
    title: { fr: 'Année préparatoire en Arts Appliqués (MANAA)', en: 'Applied Arts foundation year (MANAA)' },
    school: 'IMAD, Caen',
    period: '2018 – 2019',
  },
];

export const languages: Localized<string[]> = {
  fr: ['Français — Langue maternelle', 'Anglais — Courant', 'Espagnol — Compétences professionnelles limitées (B1)'],
  en: ['French — Native', 'English — Fluent', 'Spanish — Limited working proficiency (B1)'],
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
