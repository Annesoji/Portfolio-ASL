import type { Intent } from '../types';

/**
 * Questions d'entretien : méthode, collaboration, séniorité, échec, vision,
 * fabrication du portfolio, projet dont elle est la plus fière.
 */
export const careerIntents: Intent[] = [
  /* ------------------------------------------------------------------ */
  {
    id: 'method',
    question: {
      fr: 'Quelle est sa méthode de travail, de la recherche à la livraison ?',
      en: 'What is her way of working, from research to delivery?',
    },
    chip: { fr: 'Sa méthode de travail', en: 'Her way of working' },
    keywords: [
      ['methode', 6], ['methodo', 6], ['method', 5], ['process', 4], ['demarche', 5], ['etape', 4], ['steps', 3],
      ['design thinking', 7], ['recherche utilisateur', 6], ['user research', 6], ['interview', 5], ['entretien', 4],
      ['benchmark', 6], ['atelier', 5], ['workshop', 5], ['prototyp', 3], ['test utilisateur', 6],
      ['tests utilisateurs', 6], ['user test', 6], ['usability', 5], ['specification', 4], ['recette', 5],
      ['discovery', 4], ['v0', 5], ['agile', 6], ['scrum', 7], ['sprint', 6], ['pspo', 4], ['design process', 7], ['way of working', 6], ['facon de travailler', 6],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie adapte sa méthode à chaque projet, mais suit toujours le même fil : comprendre, concevoir, valider, livrer.

### 1. Comprendre
- **Recherche et interviews** : comprendre les utilisateurs, leurs tâches et leurs irritants.
- **Benchmark** : voir ce qui existe, ce qui marche et ce qui manque.
- **Ateliers** : aligner utilisateurs, métiers et équipe produit sur le problème à résoudre.

### 2. Concevoir
- **Une V0, un « prototype à casser »** : quand les besoins sont flous ou le parcours très complexe, elle part d'un premier prototype volontairement imparfait. Il sert de base aux premiers ateliers, car il est plus facile de réagir à un écran qu'à une page blanche.
- **Prototypage** : du wireframe à la haute fidélité, jusqu'au prototype fonctionnel en *vibecoding*.

### 3. Valider
- **Démos** auprès des métiers et de l'équipe.
- **Tests utilisateurs**, puis itérations.

### 4. Livrer
- **Spécifications** : des specs UX/UI claires pour les développeurs, rédigées en \`.md\`.
- **Recette UI** : elle vérifie que ce qui est développé correspond à ce qui a été conçu.

### Le cadre
Elle travaille en **Scrum**, au rythme des sprints de l'équipe, et elle est certifiée **PSPO I** (Professional Scrum Product Owner).`,
        express: `- **Comprendre** : recherche, interviews, benchmark, ateliers.
- **Concevoir** : une V0 « à casser » quand le besoin est flou, puis un prototypage jusqu'à la haute fidélité.
- **Valider** : démos et tests utilisateurs.
- **Livrer** : specs UX/UI en \`.md\` et recette UI.
- **Cadre** : Scrum, certifiée PSPO I.`,
      },
      en: {
        standard: `Anne-Sophie adapts her method to each project, but always follows the same thread: understand, design, validate, deliver.

### 1. Understand
- **Research and interviews**: understanding users, their tasks and their pain points.
- **Benchmark**: seeing what exists, what works and what is missing.
- **Workshops**: aligning users, business teams and the product team on the problem to solve.

### 2. Design
- **A V0, a “prototype to break”**: when needs are unclear or the journey is very complex, she starts from a deliberately imperfect first prototype. It is the basis for the first workshops, because reacting to a screen is easier than to a blank page.
- **Prototyping**: from wireframe to high fidelity, up to a functional prototype through *vibecoding*.

### 3. Validate
- **Demos** to business teams and the product team.
- **User testing**, then iterations.

### 4. Deliver
- **Specifications**: clear UX/UI specs for developers, written in \`.md\`.
- **UI acceptance testing**: she checks that what is built matches what was designed.

### The framework
She works in **Scrum**, at the pace of the team's sprints, and is **PSPO I** certified (Professional Scrum Product Owner).`,
        express: `- **Understand**: research, interviews, benchmark, workshops.
- **Design**: a V0 “to break” when the need is unclear, then prototyping up to high fidelity.
- **Validate**: demos and user testing.
- **Deliver**: UX/UI specs in \`.md\` and UI acceptance testing.
- **Framework**: Scrum, PSPO I certified.`,
      },
    },
    followUps: ['collab', 'proudest', 'ai'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'collab',
    question: {
      fr: 'Comment travaille-t-elle avec les PO, les développeurs et les utilisateurs ?',
      en: 'How does she work with POs, developers and users?',
    },
    chip: { fr: 'Sa collaboration avec l’équipe', en: 'How she works with the team' },
    keywords: [
      ['collabor', 5], ['developpeur', 6], ['developer', 6], ['devs', 5], ['dev', 3], ['handoff', 6], ['po', 4],
      ['product owner', 6], ['product manager', 6], ['pm', 3], ['cadrage', 6], ['cadrer', 4], ['framing', 5],
      ['desaccord', 6], ['disagree', 6], ['conflit', 5], ['conflict', 5], ['contrainte', 5], ['constraint', 5],
      ['prioris', 5], ['prioritiz', 5], ['stakeholder', 6], ['parties prenantes', 6], ['metier', 3],
      ['work with', 3], ['travaille avec', 4], ['equipe produit', 5], ['product team', 5],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie travaille au centre de l'équipe produit, du cadrage à la mise en production.

### Le cadrage
Avec les PO et les métiers, elle clarifie le problème à résoudre, les utilisateurs concernés et les priorités, avant de dessiner le moindre écran.

### Les utilisateurs
Elle garde un lien direct avec eux tout au long du projet : interviews, ateliers, démos et tests. Quand l'équipe hésite entre deux options, leurs retours aident à trancher.

### Les PO et les métiers
Ateliers de co-création, démos régulières et arbitrages partagés sur ce qui apporte le plus de valeur.

### Les développeurs
- **Tôt dans le projet** : elle partage ses prototypes pour vérifier la faisabilité et intégrer les contraintes techniques avant qu'elles ne coûtent cher.
- **Des livrables clairs** : des specs en \`.md\` et des prototypes fonctionnels en *vibecoding*, plus proches du produit final qu'une maquette.
- **La recette UI** : elle vérifie avec eux que ce qui est développé correspond à ce qui a été conçu.

### Les équipes IA
Chez BNP Paribas CIB, elle a co-construit les process entre les pôles IA et UX.`,
        express: `- **Cadrage** : problème, utilisateurs et priorités clarifiés avec les PO et les métiers.
- **Utilisateurs** : un lien direct, des interviews aux tests ; leurs retours aident à trancher.
- **Développeurs** : prototypes partagés tôt, specs en \`.md\`, recette UI.
- **Équipes IA** : process co-construits entre les pôles IA et UX.`,
      },
      en: {
        standard: `Anne-Sophie works at the centre of the product team, from framing to release.

### Framing
With POs and business teams, she clarifies the problem to solve, the users involved and the priorities, before drawing a single screen.

### Users
She keeps a direct link with them throughout the project: interviews, workshops, demos and testing. When the team hesitates between two options, their feedback helps decide.

### POs and business teams
Co-creation workshops, regular demos and shared decisions on what brings the most value.

### Developers
- **Early in the project**: she shares her prototypes to check feasibility and take technical constraints into account before they become costly.
- **Clear deliverables**: specs in \`.md\` and functional prototypes through *vibecoding*, closer to the final product than a mock-up.
- **UI acceptance testing**: she checks with them that what is built matches what was designed.

### AI teams
At BNP Paribas CIB, she co-built the processes between the AI and UX departments.`,
        express: `- **Framing**: problem, users and priorities clarified with POs and business teams.
- **Users**: a direct link, from interviews to testing; their feedback helps decide.
- **Developers**: prototypes shared early, specs in \`.md\`, UI acceptance testing.
- **AI teams**: processes co-built between the AI and UX departments.`,
      },
    },
    followUps: ['method', 'seniority', 'bnp'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'seniority',
    question: {
      fr: 'Quelle est sa séniorité, et est-elle prête pour un rôle de lead ?',
      en: 'How senior is she, and is she ready for a lead role?',
    },
    chip: { fr: 'Séniorité et leadership', en: 'Seniority and leadership' },
    keywords: [
      ['senior', 7], ['junior', 7], ['seniorit', 7], ['annees d experience', 7], ['ans d experience', 7],
      ['years of experience', 7], ['niveau', 3], ['level', 3], ['lead', 5], ['leadership', 7], ['manag', 8],
      ['encadr', 6], ['team lead', 7], ['consultante', 4], ['how long', 3], ['combien d annees', 5],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie a **5 ans d'expérience** en design digital et produit. Elle est aujourd'hui **Consultante Senior** chez mc2i.

### Ce qu'elle porte déjà
- **Le cadrage d'une équipe UX augmentée par l'IA** chez BNP Paribas CIB : des process co-construits entre les pôles IA et UX, et un Design System pensé pour l'IA.
- **Des projets de bout en bout**, de la recherche à la recette, chez Kering, GRDF et Eden Park.
- **Les échanges avec les métiers et la direction de programme** : ateliers, démos et arbitrages.

### La suite
Elle veut évoluer vers un rôle de **lead design** : faire grandir une équipe, structurer sa façon de travailler et porter la vision design auprès du produit.`,
        express: `- **Expérience** : 5 ans en design digital et produit.
- **Aujourd'hui** : Consultante Senior chez mc2i.
- **Déjà porté** : le cadrage d'une équipe UX augmentée par l'IA, des projets de bout en bout.
- **La suite** : évoluer vers un rôle de lead design.`,
      },
      en: {
        standard: `Anne-Sophie has **5 years of experience** in digital and product design. She is currently a **Senior Consultant** at mc2i.

### What she already leads
- **Framing an AI-augmented UX team** at BNP Paribas CIB: processes co-built between the AI and UX departments, and a Design System designed for AI.
- **End-to-end projects**, from research to acceptance testing, at Kering, GRDF and Eden Park.
- **Exchanges with business teams and programme management**: workshops, demos and decisions.

### Next
She wants to grow into a **design lead** role: developing a team, structuring how it works and carrying the design vision to the product side.`,
        express: `- **Experience**: 5 years in digital and product design.
- **Today**: Senior Consultant at mc2i.
- **Already led**: framing an AI-augmented UX team, end-to-end projects.
- **Next**: growing into a design lead role.`,
      },
    },
    followUps: ['search', 'proudest', 'collab'],
    actions: ['cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'failure',
    question: {
      fr: 'Parle-moi d’un échec et de ce qu’elle en a appris',
      en: 'Tell me about a failure and what she learned from it',
    },
    chip: { fr: 'Un échec et ses leçons', en: 'A failure and its lessons' },
    keywords: [
      ['echec', 8], ['echoue', 7], ['failure', 8], ['fail', 6], ['mistake', 6], ['erreur', 4], ['appris', 4],
      ['learned', 4], ['lesson', 5], ['lecon', 5], ['regret', 5], ['went wrong', 6], ['difficult', 3],
    ],
    answer: {
      fr: {
        standard: `### Ce qui s'est passé
Sur un projet, Anne-Sophie a voulu aller vite et loin : beaucoup de changements d'un coup. Les utilisateurs ont perdu leurs repères. La nouvelle solution, pourtant meilleure, a été moins adoptée, et son impact a été plus faible que prévu.

### Ce qu'elle en a retenu
- **Embarquer les utilisateurs** dès le début, et à chaque étape.
- **Avancer par étapes** : changer moins à la fois, observer l'adoption, puis aller plus loin.
- **Penser l'adoption autant que la conception** : une solution réussit quand ses utilisateurs l'adoptent, pas seulement quand elle est bien conçue.`,
        express: `- **L'échec** : trop de changements d'un coup, des utilisateurs perdus, une adoption et un impact plus faibles que prévu.
- **La leçon** : embarquer les utilisateurs à chaque étape et avancer par étapes.
- **Aujourd'hui** : elle pense l'adoption autant que la conception.`,
      },
      en: {
        standard: `### What happened
On one project, Anne-Sophie wanted to go fast and far: many changes at once. Users lost their bearings. The new solution, although better, was less adopted, and its impact was lower than expected.

### What she took from it
- **Bring users along** from the start, and at every step.
- **Move in steps**: change less at a time, watch adoption, then go further.
- **Think about adoption as much as design**: a solution succeeds when its users adopt it, not only when it is well designed.`,
        express: `- **The failure**: too many changes at once, users lost, lower adoption and impact than expected.
- **The lesson**: bring users along at every step and move in steps.
- **Today**: she thinks about adoption as much as design.`,
      },
    },
    followUps: ['method', 'vision', 'softskills'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'weaknesses',
    question: {
      fr: 'Quels sont ses axes d’amélioration ?',
      en: 'What areas is she working to improve?',
    },
    chip: { fr: 'Ses axes d’amélioration', en: 'Her areas for growth' },
    keywords: [
      ['point faible', 8], ['points faibles', 8], ['faiblesse', 8], ['weakness', 8], ['axe d amelioration', 8],
      ['axes d amelioration', 8], ['ameliorer', 4], ['improve', 4], ['defaut', 6], ['flaw', 6], ['progresser', 5],
      ['work on', 3], ['areas for growth', 8], ['growth areas', 8],
    ],
    answer: {
      fr: {
        standard: `Deux points sur lesquels Anne-Sophie progresse, et ce qu'elle fait pour avancer.

### Savoir dire non
Face à de nombreuses demandes, le réflexe est de tout accepter. Elle apprend à prioriser avec le PO, selon la valeur pour les utilisateurs, et à refuser ce qui n'en apporte pas assez.

### Ralentir pour embarquer
Son envie d'avancer vite peut aller plus vite que l'équipe ou les utilisateurs. Elle pose désormais des étapes, et vérifie que chacun suit avant d'aller plus loin.`,
        express: `- **Savoir dire non** : elle apprend à prioriser selon la valeur pour les utilisateurs, et à refuser le reste.
- **Ralentir pour embarquer** : elle pose des étapes et vérifie que l'équipe et les utilisateurs suivent.`,
      },
      en: {
        standard: `Two points Anne-Sophie is working on, and what she does to progress.

### Saying no
Faced with many requests, the reflex is to accept everything. She is learning to prioritise with the PO, based on value for users, and to turn down what does not bring enough of it.

### Slowing down to bring people along
Her drive to move fast can outpace the team or the users. She now sets steps, and checks that everyone is following before going further.`,
        express: `- **Saying no**: she is learning to prioritise by value for users, and to turn down the rest.
- **Slowing down to bring people along**: she sets steps and checks that the team and users are following.`,
      },
    },
    followUps: ['failure', 'collab', 'seniority'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'vision',
    question: {
      fr: 'Quelle est sa vision du design ?',
      en: 'What is her view of design?',
    },
    chip: { fr: 'Sa vision du design', en: 'Her view of design' },
    keywords: [
      ['vision', 7], ['philosophi', 6], ['pourquoi le design', 7], ['pourquoi le product design', 8],
      ['why design', 7], ['why product design', 8], ['inspiration', 6], ['inspire', 5], ['bon design', 6],
      ['good design', 6], ['design pour elle', 6], ['what design means', 6], ['aime dans', 4], ['loves about', 5],
    ],
    answer: {
      fr: {
        standard: `Pour Anne-Sophie, le design s'applique partout, et c'est ce qui le rend stimulant.

- **L'inspiration est partout** : un objet, un lieu, un service du quotidien peuvent nourrir un écran.
- **Tout est améliorable** : il y a toujours une façon de faire plus simple, et toujours de la place pour innover.
- **Le but** : un usage plus facile pour tous, plus accessible et plus responsable.

C'est ce qui l'a menée au Product Design : un métier qui réunit créativité, technique et impact concret sur le quotidien des gens.`,
        express: `- **Partout** : le design s'applique partout, et l'inspiration aussi.
- **Toujours améliorable** : il y a toujours plus simple, et de la place pour innover.
- **Le but** : un usage plus facile pour tous, plus accessible et plus responsable.`,
      },
      en: {
        standard: `For Anne-Sophie, design applies everywhere, and that is what makes it stimulating.

- **Inspiration is everywhere**: an object, a place or an everyday service can feed a screen.
- **Everything can be improved**: there is always a simpler way, and always room to innovate.
- **The goal**: easier use for everyone, more accessible and more responsible.

That is what led her to Product Design: a job that brings together creativity, technique and a concrete impact on people's daily lives.`,
        express: `- **Everywhere**: design applies everywhere, and so does inspiration.
- **Always improvable**: there is always a simpler way, and room to innovate.
- **The goal**: easier use for everyone, more accessible and more responsible.`,
      },
    },
    followUps: ['method', 'grdf', 'profile'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'portfoliobuild',
    question: {
      fr: 'Comment ce portfolio a-t-il été fait ?',
      en: 'How was this portfolio built?',
    },
    chip: { fr: 'Comment ce portfolio est fait', en: 'How this portfolio is built' },
    keywords: [
      ['ce portfolio', 7], ['this portfolio', 5], ['ce site', 5], ['this site', 5], ['code ce', 5], ['coded', 4],
      ['construit', 3], ['built', 4], ['react', 6], ['technolog', 4], ['comment marche', 5], ['how does this', 4],
      ['how it works', 4], ['fonctionne', 3], ['vraie ia', 6], ['real ai', 6], ['chatbot', 5], ['assistant', 3],
      ['qui a code', 6], ['who built', 6], ['who made', 6],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie a conçu ce portfolio et l'a construit en *vibecoding* avec Claude Code. Elle définit l'expérience, les contenus et le Design System ; l'IA écrit le code sous sa direction.

### Ce qu'il y a dessous
- **React, TypeScript et Tailwind**, sans serveur : tout tourne dans votre navigateur.
- **Son propre Design System**, écrit comme un skill que l'IA applique à chaque modification.
- **Deux langues**, français et anglais, et un thème clair et un thème sombre.

### L'assistant, en toute transparence
Aucune IA ne répond en direct. Anne-Sophie a écrit chaque réponse à l'avance, en trois niveaux de lecture, et l'assistant choisit celle qui correspond le mieux à votre question à partir de ses mots-clés. Il ne peut donc rien inventer sur elle.

### Pourquoi ce format
Une interface de chat montre, en une seule expérience, ce qu'elle sait faire : concevoir un produit, l'outiller avec l'IA et le livrer.`,
        express: `- **Construit** en *vibecoding* avec Claude Code : elle conçoit, l'IA code sous sa direction.
- **Dessous** : React, TypeScript, Tailwind, sans serveur, avec son propre Design System écrit comme un skill.
- **L'assistant** : aucune IA en direct ; des réponses écrites à l'avance, choisies selon vos mots-clés.`,
      },
      en: {
        standard: `Anne-Sophie designed this portfolio and built it through *vibecoding* with Claude Code. She defines the experience, the content and the Design System; the AI writes the code under her direction.

### Under the hood
- **React, TypeScript and Tailwind**, with no server: everything runs in your browser.
- **Its own Design System**, written as a skill the AI applies to every change.
- **Two languages**, French and English, and a light and a dark theme.

### The assistant, transparently
No AI answers live. Anne-Sophie wrote every answer in advance, at three reading levels, and the assistant picks the one that best matches your question from its keywords. So it cannot make anything up about her.

### Why this format
A chat interface shows, in a single experience, what she can do: design a product, equip it with AI and ship it.`,
        express: `- **Built** through *vibecoding* with Claude Code: she designs, the AI codes under her direction.
- **Under the hood**: React, TypeScript, Tailwind, no server, with its own Design System written as a skill.
- **The assistant**: no live AI; answers written in advance, picked from your keywords.`,
      },
    },
    followUps: ['portfoliods', 'ai', 'stack'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'proudest',
    question: {
      fr: 'De quel projet est-elle la plus fière ?',
      en: 'Which project is she proudest of?',
    },
    chip: { fr: 'Le projet dont elle est fière', en: 'The project she is proudest of' },
    keywords: [
      ['fiere', 8], ['fier', 6], ['proud', 8], ['prefere', 5], ['favori', 5], ['favourite', 5], ['favorite', 5],
      ['meilleur projet', 7], ['best project', 7], ['plus reussi', 9], ['most successful', 9], ['hackathon', 7],
      ['workspace', 6], ['marquant', 6], ['memorable', 5],
    ],
    answer: {
      fr: {
        standard: `Le projet dont Anne-Sophie est la plus fière : **l'intégration d'un workspace IA chez une grande banque d'investissement**.

### D'un hackathon à un vrai projet
Tout part d'un hackathon. L'idée devient un vrai projet, qui évolue beaucoup, et elle influence la création d'une équipe IA de ==40 personnes==.

### Ce qui a convaincu
La direction du programme a été convaincue par :
- **un travail collaboratif** entre UX/UI, développeurs et PO ;
- **une UX qui rend intuitif** un outil nouveau pour ses utilisateurs ;
- **une UI convaincante** ;
- **des fonctionnalités** qui apportent une vraie valeur.`,
        express: `- **Le projet** : l'intégration d'un workspace IA chez une grande banque d'investissement.
- **Le parcours** : d'un hackathon à un vrai projet, qui influence la création d'une équipe IA de ==40 personnes==.
- **Ce qui a convaincu** : le travail collaboratif, une UX intuitive, une UI convaincante, des fonctionnalités utiles.`,
      },
      en: {
        standard: `The project Anne-Sophie is proudest of: **integrating an AI workspace at a major investment bank**.

### From a hackathon to a real project
It all starts with a hackathon. The idea becomes a real project, which evolves a lot, and it influences the creation of an AI team of ==40 people==.

### What won people over
Programme management was won over by:
- **collaborative work** between UX/UI, developers and POs;
- **a UX that makes a new tool intuitive** for its users;
- **a convincing UI**;
- **features** that bring real value.`,
        express: `- **The project**: integrating an AI workspace at a major investment bank.
- **The path**: from a hackathon to a real project, which influences the creation of an AI team of ==40 people==.
- **What won people over**: collaborative work, an intuitive UX, a convincing UI, useful features.`,
      },
    },
    followUps: ['bnp', 'collab', 'impact'],
  },
];
