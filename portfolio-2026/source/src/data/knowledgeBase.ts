import type { Intent, Lang, ModelId } from '../types';

/**
 * Base de connaissances d'Anne-Sophie Leroy.
 *
 * Syntaxe des réponses : Markdown léger (titres ###, listes, tableaux, **gras**,
 * *italique*, \`code\`) + ==badge d'impact== pour les chiffres clés.
 *
 * Chaque intention fournit 3 tonalités :
 *  - standard : réponse équilibrée
 *  - express  : synthèse en bullet points
 *  - deep     : complément méthodologique ajouté à la réponse standard
 */
export const intents: Intent[] = [
  /* ------------------------------------------------------------------ */
  {
    id: 'profile',
    question: {
      fr: "Résume le profil d'Anne-Sophie et ce qui la différencie en 30 secondes",
      en: "Summarise Anne-Sophie's profile and what sets her apart in 30 seconds",
    },
    chip: { fr: 'Son profil en 30 secondes', en: 'Her profile in 30 seconds' },
    keywords: [
      ['profil', 4], ['qui est', 4], ['who is', 4], ['present', 3], ['pitch', 4], ['differenci', 4],
      ['valeur ajoutee', 4], ['added value', 4], ['summar', 3], ['resum', 2], ['30 secondes', 4],
      ['30 seconds', 4], ['about her', 4], ['sets her apart', 5], ['pourquoi elle', 4], ['why her', 4],
      ['why hire', 5], ['recrut', 4], ['embauch', 4], ['hire', 4], ['anne sophie', 2],
    ],
    answer: {
      fr: {
        standard: `**Anne-Sophie Leroy** est Product Designer — UX/UI, Design Ops & AI Workflows, basée à Paris.

### Ce qui la différencie
- **Un double ADN créatif et technique** : un héritage issu des arts visuels et de la mode (Balmain, Indress), conjugué à une forte expertise Design System, *AI Skills* et *vibecoding*.
- **Des produits complexes rendus lisibles** : chaîne de crédit grandes entreprises chez BNP Paribas CIB, application Privilege Card du Groupe Kering, plateforme justdecarb.grdf.fr.
- **L'industrialisation du design** : elle a cadré, avec son équipe, un Design System lisible par l'IA, et prototype en haute fidélité avec Claude Code pour accélérer le delivery.

### En chiffres
| Mission | Résultat |
|---|---|
| BNP Paribas CIB | ==+5 modules sur 17== optimisés par l'IA · ==~1 500 utilisateurs== |
| Groupe Kering | ==40 000 utilisateurs== actifs |
| GRDF | ==Note C EcoIndex== + conformité RGAA |
| Eden Park | ==+20 % de ventes e-commerce== en 1 an |`,
        express: `- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, chez mc2i depuis janvier 2024.
- **Aujourd'hui** : BNP Paribas CIB, équipes IA et UX — ==+5 modules sur 17== optimisés par l'IA, ==~1 500 utilisateurs==.
- **Avant** : Groupe Kering (==40 000 utilisateurs==), GRDF (==Note C EcoIndex== + RGAA).
- **Sa signature** : le design augmenté par l'IA (*AI Skills*, *vibecoding* avec Claude Code), porté par un œil créatif issu de la mode.`,
        deep: `### Lecture Design Lead
- **Positionnement** : à la jonction entre conception produit et outillage des équipes — elle ne livre pas seulement des écrans, elle fait évoluer la façon dont l'équipe les produit.
- **Levier 1 — Cadre** : avec l'équipe, des principes pour qu'un Design System soit exploitable par des agents IA.
- **Levier 2 — Vitesse** : prototypes haute fidélité fonctionnels en *vibecoding* (Claude Code), cohérents avec le Design System, et specs UX/UI générées en \`.md\`.
- **Levier 3 — Process** : co-construction de processus transverses entre les pôles IA et UX.`,
      },
      en: {
        standard: `**Anne-Sophie Leroy** is a Product Designer — UX/UI, Design Ops & AI Workflows, based in Paris.

### What sets her apart
- **A creative and technical DNA**: a heritage from visual arts and fashion (Balmain, Indress) combined with strong expertise in Design Systems, *AI Skills* and *vibecoding*.
- **Complex products made readable**: the large-corporate credit chain at BNP Paribas CIB, Kering Group's Privilege Card app, the justdecarb.grdf.fr platform.
- **Industrialising design**: with her team she framed an AI-readable Design System, and builds high-fidelity prototypes with Claude Code to speed up delivery.

### In figures
| Engagement | Result |
|---|---|
| BNP Paribas CIB | ==+5 of 17 modules== optimised with AI · ==~1,500 users== |
| Kering Group | ==40,000 active users== |
| GRDF | ==EcoIndex grade C== + RGAA compliance |
| Eden Park | ==+20% e-commerce sales== in one year |`,
        express: `- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, at mc2i since January 2024.
- **Today**: BNP Paribas CIB, AI and UX teams — ==+5 of 17 modules== optimised with AI, ==~1,500 users==.
- **Before**: Kering Group (==40,000 users==), GRDF (==EcoIndex grade C== + RGAA).
- **Her signature**: AI-augmented design (*AI Skills*, *vibecoding* with Claude Code), driven by a creative eye trained in fashion.`,
        deep: `### Design Lead reading
- **Positioning**: at the junction of product design and team tooling — she doesn't only ship screens, she improves how the team produces them.
- **Lever 1 — Framework**: with the team, principles that make a Design System usable by AI agents.
- **Lever 2 — Speed**: functional high-fidelity prototypes through *vibecoding* (Claude Code), consistent with the Design System, plus UX/UI specs generated in \`.md\`.
- **Lever 3 — Process**: co-building cross-team processes between the AI and UX departments.`,
      },
    },
    followUps: ['ai', 'impact', 'background'],
    actions: ['cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ai',
    question: {
      fr: "Comment a-t-elle intégré l'IA, le vibecoding et les AI Skills dans les workflows UX ?",
      en: 'How did she bring AI, vibecoding and AI Skills into UX workflows?',
    },
    chip: { fr: 'IA, vibecoding & AI Skills', en: 'AI, vibecoding & AI Skills' },
    keywords: [
      ['ai skill', 6], ['skill md', 6], ['ia', 4], ['ai', 4], ['vibecod', 6], ['vibe coding', 6], ['claude', 5],
      ['agent', 3], ['prompt', 4], ['workflow', 4], ['automatis', 3], ['automat', 3], ['design ops', 5],
      ['designops', 5], ['intelligence artificielle', 5], ['artificial intelligence', 5], ['llm', 4],
      ['genai', 4], ['industrialis', 4], ['industrializ', 4],
    ],
    answer: {
      fr: {
        standard: `Chez **BNP Paribas CIB**, Anne-Sophie travaille dans une cellule design « AI First ». L'IA y est un outil de production du design, pas seulement un sujet de produit.

### 1. Un cadre d'équipe
Avec son équipe, elle a développé puis formalisé une nouvelle façon de travailler : un flow où l'IA génère plusieurs solutions et où le designer juge, et un Design System rendu lisible par la machine.

### 2. Le *vibecoding* au quotidien
- Prototypes haute fidélité **fonctionnels** avec Claude Code, en s'appuyant sur les *AI Skills* du Design System, qu'elle crée pour l'équipe.
- Spécifications UX/UI structurées en \`.md\`.

### 3. Un skill conçu par elle
Pour maîtriser la mécanique, elle a conçu et testé, avec Claude Code, un skill sur le Design System de ce portfolio. En voici le fichier réel.

### Résultat
==+5 modules sur 17== déjà optimisés par l'IA et déployés auprès d'environ ==1 500 utilisateurs==, avec une réduction significative de la dette design et une accélération du delivery.`,
        express: `- **Cadre d'équipe** : un flow où l'IA génère et le designer juge, développé avec son équipe chez BNP Paribas CIB.
- **Vibecoding** : prototypes haute fidélité fonctionnels avec Claude Code et les *AI Skills* du Design System, specs en \`.md\`.
- **Skill** : un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.
- **Impact** : ==+5 modules sur 17== optimisés par l'IA, ==~1 500 utilisateurs==, dette design réduite.`,
        deep: `### Le dispositif (vue Design Lead)
| Brique | Rôle dans le workflow |
|---|---|
| Bibliothèque de composants | Source de vérité de l'interface |
| AI Skills du Design System | Règles rendues exploitables par un agent IA |
| Vibecoding (Claude Code) | Prototype fonctionnel haute fidélité, aligné sur le Design System |
| Specs \`.md\` | Handoff structuré, lisible par les développeurs comme par les agents |

**Pourquoi ça fonctionne** : un skill n'est utile que si les règles sont explicites. Formaliser un Design System pour une IA oblige à lever les ambiguïtés — ce qui profite aussi aux designers.`,
      },
      en: {
        standard: `At **BNP Paribas CIB**, Anne-Sophie works in an “AI First” design unit. AI there is a design production tool, not just a product topic.

### 1. A team framework
With her team, she developed then formalised a new way of working: a flow where the AI generates several solutions and the designer judges, and a Design System made machine-readable.

### 2. *Vibecoding* day to day
- **Functional** high-fidelity prototypes with Claude Code, relying on the Design System *AI Skills* she creates for the team.
- Structured UX/UI specifications in \`.md\`.

### 3. A skill she designed
To master the mechanics, she designed and tested, with Claude Code, a skill on this portfolio's Design System. Here is the real file.

### Outcome
==+5 of 17 modules== already optimised with AI and rolled out to around ==1,500 users==, with a significant reduction in design debt and faster delivery.`,
        express: `- **Team framework**: a flow where the AI generates and the designer judges, developed with her team at BNP Paribas CIB.
- **Vibecoding**: functional high-fidelity prototypes with Claude Code and the Design System *AI Skills*, specs in \`.md\`.
- **Skill**: a skill she designed and tested, with Claude Code, on this portfolio's Design System.
- **Impact**: ==+5 of 17 modules== optimised with AI, ==~1,500 users==, less design debt.`,
        deep: `### The system (Design Lead view)
| Building block | Role in the workflow |
|---|---|
| Component library | Source of truth for the interface |
| Design System AI Skills | Rules made usable by an AI agent |
| Vibecoding (Claude Code) | Functional high-fidelity prototype aligned with the Design System |
| \`.md\` specs | Structured handoff, readable by developers and agents alike |

**Why it works**: a skill is only useful if the rules are explicit. Formalising a Design System for an AI forces ambiguities out — which also benefits designers.`,
      },
    },
    attachment: 'skill',
    followUps: ['covenant', 'bnp', 'designsystem'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'impact',
    question: {
      fr: 'Quels sont ses principaux résultats mesurables ?',
      en: 'What are her main measurable results?',
    },
    chip: { fr: 'Ses résultats mesurables', en: 'Her measurable results' },
    keywords: [
      ['impact', 5], ['resultat', 5], ['result', 5], ['chiffre', 5], ['figure', 4], ['kpi', 5], ['metric', 5],
      ['mesur', 4], ['measur', 4], ['performance', 3], ['roi', 4], ['succes', 3], ['success', 3],
      ['achievement', 4], ['reussite', 4], ['numbers', 4],
    ],
    answer: {
      fr: {
        standard: `Voici les résultats mesurables d'Anne-Sophie, mission par mission.

| Mission | Période | Impact |
|---|---|---|
| **BNP Paribas CIB** — chaîne de crédit | Août 2024 – aujourd'hui | ==+5 modules sur 17== optimisés par l'IA, déployés auprès de ==~1 500 utilisateurs== |
| **Groupe Kering** — Privilege Card | Sept. 2022 – Déc. 2023 | ==40 000 utilisateurs== actifs sur l'application |
| **GRDF** — justdecarb.grdf.fr | Janv. – Mai 2024 | ==Note C EcoIndex== + conformité ==RGAA== |
| **Eden Park** — e-commerce | Janv. 2021 – Juil. 2022 | ==+20 % de ventes== en 1 an |

### Au-delà des chiffres
- **BNP Paribas CIB** : réduction significative de la dette design et accélération du delivery.
- **Kering** : fiabilisation de la gestion des quotas d'achat et du respect des restrictions de vente en boutique.
- **GRDF** : un Design System dédié, sobre et accessible.`,
        express: `- **BNP Paribas CIB** : ==+5 modules sur 17== optimisés par l'IA · ==~1 500 utilisateurs==.
- **Groupe Kering** : ==40 000 utilisateurs== actifs sur l'app Privilege Card.
- **GRDF** : ==Note C EcoIndex== + conformité RGAA.
- **Eden Park** : ==+20 % de ventes e-commerce== en 1 an.`,
        deep: `### Comment ces résultats ont été obtenus
- **BNP** : l'impact vient du couple Design System + AI Skills mis en place par l'équipe — moins d'écarts à corriger, des prototypes fonctionnels plus tôt dans le cycle.
- **Kering** : recherche utilisateurs, cartographies de parcours complexes et tests itératifs avant chaque évolution de l'app.
- **GRDF** : les audits UX et RGAA en amont ont cadré un Design System sobre, pensé mobile-first — la performance environnementale est une conséquence du design, pas un correctif.`,
      },
      en: {
        standard: `Here are Anne-Sophie's measurable results, engagement by engagement.

| Engagement | Period | Impact |
|---|---|---|
| **BNP Paribas CIB** — credit chain | Aug 2024 – present | ==+5 of 17 modules== optimised with AI, rolled out to ==~1,500 users== |
| **Kering Group** — Privilege Card | Sep 2022 – Dec 2023 | ==40,000 active users== on the app |
| **GRDF** — justdecarb.grdf.fr | Jan – May 2024 | ==EcoIndex grade C== + ==RGAA== compliance |
| **Eden Park** — e-commerce | Jan 2021 – Jul 2022 | ==+20% sales== in one year |

### Beyond the numbers
- **BNP Paribas CIB**: significant reduction in design debt and faster delivery.
- **Kering**: more reliable purchase-quota management and in-store sales restrictions.
- **GRDF**: a dedicated, lean and accessible Design System.`,
        express: `- **BNP Paribas CIB**: ==+5 of 17 modules== optimised with AI · ==~1,500 users==.
- **Kering Group**: ==40,000 active users== on the Privilege Card app.
- **GRDF**: ==EcoIndex grade C== + RGAA compliance.
- **Eden Park**: ==+20% e-commerce sales== in one year.`,
        deep: `### How these results were achieved
- **BNP**: the impact comes from the Design System + AI Skills pairing set up by the team — fewer deviations to fix, functional prototypes earlier in the cycle.
- **Kering**: user research, complex journey mapping and iterative testing before each evolution of the app.
- **GRDF**: upfront UX and RGAA audits framed a lean, mobile-first Design System — environmental performance is a consequence of the design, not a patch.`,
      },
    },
    followUps: ['bnp', 'kering', 'grdf'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'search',
    question: {
      fr: "Quel type de poste et d'équipe recherche-t-elle aujourd'hui ?",
      en: 'What kind of role and team is she looking for today?',
    },
    chip: { fr: 'Le poste qui lui correspond', en: 'The role that fits her' },
    keywords: [
      ['poste', 4], ['recherche t elle', 5], ['cherche', 3], ['looking for', 5], ['role', 3], ['job', 3],
      ['opportunit', 4], ['souhait', 3], ['ideal', 3], ['seeking', 4], ['type d equipe', 4], ['kind of team', 4],
      ['projet professionnel', 5], ['next step', 4], ['motivation', 4], ['ambition', 4], ['position', 3],
    ],
    answer: {
      fr: {
        standard: `Le positionnement d'Anne-Sophie est clair : **Product Designer à l'intersection de l'UX/UI, du Design Ops et des workflows IA**.

### Les environnements où son profil crée le plus de valeur
- **Des produits métiers complexes** à rendre lisibles — comme la chaîne de crédit de BNP Paribas CIB.
- **Des équipes qui veulent industrialiser leur design** : Design System, process transverses, handoff structuré.
- **Des organisations qui intègrent l'IA dans la conception** : *AI Skills*, *vibecoding* avec Claude Code, specs en \`.md\`.

### Ce qu'elle apporte dès l'arrivée
- Une pratique complète du cycle produit : discovery, ateliers, prototypage, tests utilisateurs.
- Une expérience en grands groupes (banque, luxe, énergie, secteur public) et en contexte conseil.

Pour ses critères précis — type de contrat, disponibilité, périmètre — le plus direct est d'échanger avec elle.`,
        express: `- **Rôle** : Product Designer UX/UI avec une dimension Design Ops & workflows IA.
- **Terrain de jeu** : produits métiers complexes, Design System à faire vivre, équipes qui intègrent l'IA.
- **Atouts** : *AI Skills*, *vibecoding*, expérience grands groupes (BNP Paribas CIB, Kering, GRDF).
- **Critères précis** (contrat, disponibilité) : à voir directement avec elle par email.`,
      },
      en: {
        standard: `Anne-Sophie's positioning is clear: **Product Designer at the intersection of UX/UI, Design Ops and AI workflows**.

### Environments where her profile creates the most value
- **Complex business products** that need to become readable — like the BNP Paribas CIB credit chain.
- **Teams that want to industrialise their design**: Design System, cross-team processes, structured handoff.
- **Organisations bringing AI into the design process**: *AI Skills*, *vibecoding* with Claude Code, \`.md\` specs.

### What she brings from day one
- End-to-end product practice: discovery, workshops, prototyping, user testing.
- Experience in large groups (banking, luxury, energy, public sector) and in a consulting context.

For her specific criteria — contract type, availability, scope — the most direct route is to talk to her.`,
        express: `- **Role**: Product Designer UX/UI with a Design Ops & AI workflows dimension.
- **Playing field**: complex business products, Design Systems to grow, teams adopting AI.
- **Strengths**: *AI Skills*, *vibecoding*, large-group experience (BNP Paribas CIB, Kering, GRDF).
- **Specific criteria** (contract, availability): best discussed directly with her by email.`,
      },
    },
    followUps: ['availability', 'softskills', 'profile'],
    actions: ['email', 'cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'bnp',
    question: {
      fr: "Comment a-t-elle cadré le travail d'une équipe design augmentée par l'IA chez BNP Paribas CIB ?",
      en: 'How did she frame the work of an AI-augmented design team at BNP Paribas CIB?',
    },
    chip: { fr: 'Banque · Équipe UX augmentée par l’IA', en: 'Bank · AI-augmented UX team' },
    keywords: [
      ['bnp', 6], ['paribas', 6], ['cib', 5], ['credit', 5], ['banque', 4], ['bank', 4], ['mc2i', 4],
      ['conseil', 3], ['consult', 3], ['charge cognitive', 4], ['cognitive load', 4], ['actuel', 2],
    ],
    answer: {
      fr: {
        standard: `### Contexte
Cellule design « AI First » chez **BNP Paribas CIB**, sur la refonte de la chaîne de crédit pour grandes entreprises.

[[bnp-figures]]

### Problématique
Le métier se déplace : l'IA génère, le designer juge. Quand un écran se produit en quelques minutes, trois questions se posent : comment garantir qu'il respecte le Design System, comment faire travailler toute l'équipe de la même façon, et comment éviter que le savoir se perde d'une personne à l'autre.

### Son rôle
Elle a développé ce nouveau cadre de travail avec son équipe, puis l'a formalisé pour qu'il puisse être transmis. Elle crée des skills pour standardiser et accélérer le travail des équipes, assure la gouvernance des composants UI pour l'IA, et prototype au quotidien en s'appuyant sur eux.

### La solution
Un cadre de travail commun, de la recherche à la livraison. Il tient en quatre volets, détaillés ci-dessous : un Design System lisible par l'IA, une connaissance organisée, des rôles et des relais clairs, et un skill testé.

[[flow]]

### Design System AI-ready
Sans garde-fou, la vitesse de génération produit de la divergence.

[[ds-principles]]

### Connaissance
Le dépôt UX devient la mémoire de l'équipe, lisible par l'IA comme par les développeurs.

[[repo-map]]

### Collaboration
Un assistant par rôle, chargé du même cadre.

[[team-roles]]

[[relay]]

### En pratique
Pour passer du cadre à la pratique, elle a conçu, avec Claude Code, un skill pour le Design System de ce portfolio : les règles qu'un agent IA lit avant de créer ou de modifier un écran.

Elle l'a ensuite testé : la même demande confiée à deux agents, l'un avec le skill, l'autre sans.

[[skill-test]]

### Corriger la règle, pas le résultat
Le skill n'a pas été juste du premier coup. À chaque test, elle a regardé les écrans produits, repéré ce qui n'allait pas, et corrigé la règle plutôt que de retoucher l'écran.

[[skill-lessons]]

C'est le même principe que dans l'équipe : l'IA produit, le designer juge, et ce jugement devient une règle que l'IA appliquera la fois suivante.

Le fichier ci-dessous est le vrai : c'est aussi lui que la page Design System affiche.`,
        express: `- **Contexte** : cellule design « AI First » chez BNP Paribas CIB, refonte de la chaîne de crédit — ==+5 modules sur 17==, ==~1 500 utilisateurs==.
- **Problématique** : quand l'IA produit un écran en quelques minutes, garantir la cohérence avec le Design System, une même façon de travailler et un savoir qui ne se perd pas.
- **Son rôle** : développer avec son équipe un nouveau cadre de travail, puis le formaliser ; créer des skills et gouverner les composants UI pour l'IA.
- **Solution** : un cadre commun (flow design, Design System AI-ready, connaissance, relais) où l'IA génère plusieurs solutions et le designer juge et décide.
- **En pratique** : un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.`,
        deep: `### Design Lead
- **Le Design System change de nature** : ce n'est plus seulement une bibliothèque de composants, c'est le contexte que l'agent charge avant de générer.
- **Un prompt robuste tient en trois clés** : des cas d'usage explicites (succès, erreur, états limites), les règles de gestion, et une auto-vérification exigée de l'IA.
- **Definition of done d'un changement d'interface** : tokens réutilisés, build et tests verts, aucune donnée réelle, sur une branche.
- **Le design versionné comme du code** : changement mineur ou rupture, contrôle automatique avant validation, IA confinée à une zone ciblée.
- **Garde-fous** : aucune donnée réelle, uniquement des données fictives.
- **Vigilance** : un bon premier jet donne une illusion de facilité.`,
      },
      en: {
        standard: `### Context
“AI First” design unit at **BNP Paribas CIB**, on the redesign of the credit chain for large corporates.

[[bnp-figures]]

### The problem
The job is shifting: the AI generates, the designer judges. When a screen is produced in minutes, three questions arise: how to guarantee it follows the Design System, how to get the whole team working the same way, and how to keep knowledge from being lost from one person to the next.

### Her role
She developed this new working framework with her team, then formalised it so it could be passed on. She creates skills to standardise and speed up the teams' work, governs the UI components for AI, and prototypes with them day to day.

### The solution
A shared working framework, from research to delivery. It has four parts, detailed below: an AI-readable Design System, organised knowledge, clear roles and handoffs, and a tested skill.

[[flow]]

### AI-ready Design System
Without guardrails, generation speed produces divergence.

[[ds-principles]]

### Knowledge
The UX repository becomes the team's memory, readable by the AI as well as by developers.

[[repo-map]]

### Collaboration
One assistant per role, loaded with the same framework.

[[team-roles]]

[[relay]]

### In practice
To move from framework to practice, she designed, with Claude Code, a skill for this portfolio's Design System: the rules an AI agent reads before creating or changing a screen.

She then tested it: the same request given to two agents, one with the skill, one without.

[[skill-test]]

### Fix the rule, not the result
The skill was not right the first time. After each test she looked at the screens produced, spotted what was wrong, and fixed the rule rather than touching up the screen.

[[skill-lessons]]

It is the same principle as in the team: the AI produces, the designer judges, and that judgement becomes a rule the AI will apply next time.

The file below is the real one: it is also the one the Design System page displays.`,
        express: `- **Context**: “AI First” design unit at BNP Paribas CIB, credit-chain redesign — ==+5 of 17 modules==, ==~1,500 users==.
- **Problem**: when the AI produces a screen in minutes, guaranteeing consistency with the Design System, one way of working, and knowledge that is not lost.
- **Her role**: developing a new working framework with her team, then formalising it; creating skills and governing the UI components for AI.
- **Solution**: a shared framework (design flow, AI-ready Design System, knowledge, handoffs) where the AI generates several solutions and the designer judges and decides.
- **In practice**: a skill she designed and tested, with Claude Code, on this portfolio's Design System.`,
        deep: `### Design Lead
- **The Design System changes nature**: no longer just a component library, it is the context the agent loads before generating.
- **A robust prompt has three keys**: explicit use cases (success, error, edge states), the business rules, and a self-check required from the AI.
- **Definition of done for a UI change**: tokens reused, clean build and green tests, no real data, on a branch.
- **Design versioned like code**: minor change or breaking change, automatic check before validation, AI confined to a targeted area.
- **Guardrails**: no real data, mock data only.
- **Watch out**: a good first draft creates an illusion of ease.`,
      },
    },
    attachment: 'skill',
    flow: 'ux',
    anchors: true,
    followUps: ['covenant', 'ai', 'designsystem'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'covenant',
    question: {
      fr: "Montre-moi le suivi des clauses de crédit : comment a-t-elle conçu ce suivi assisté par IA pour une banque d'investissement ?",
      en: 'Show me the loan clause monitoring project: how did she design this AI-assisted monitoring for an investment bank?',
    },
    chip: { fr: 'Banque · Clauses de crédit et IA', en: 'Bank · Loan clauses and AI' },
    keywords: [
      ['covenant', 8], ['covenants', 8], ['monitoring', 4], ['compliance certificate', 6], ['breach', 5],
      ['waiver', 4], ['matching', 4], ['rapprochement', 4], ['extraction', 4], ['mycreditapp', 5],
      ['workspace ai', 5], ['suivi des engagements', 5], ['ecran', 3], ['screen', 3], ['maquette', 4],
      ['mockup', 4], ['prototype', 3], ['ux case', 5], ['cas ux', 5],
    ],
    answer: {
      fr: {
        standard: `### Contexte
Dans une **banque d'investissement**, le métier Trade Finance contrôle ses covenants, certificat après certificat. Un projet d'un mois, en binôme avec un développeur.

*Un covenant est un engagement inscrit dans un contrat de crédit, comme un ratio financier à respecter, que la banque vérifie à chaque période.*

### Problématique
Ce contrôle se faisait à la main, dans un outil séparé du reste du système, en passant d'un module à l'autre. Les irritants : des relances répétées pour obtenir les pièces, un délai entre la réception et la saisie, des erreurs de saisie, des calculs refaits par l'analyste.

L'enjeu : réintégrer ce contrôle dans l'outil central, en le **repensant avec l'IA** plutôt qu'en le transposant à l'identique.

### Son rôle
Product Designer du projet. Elle a mené les ateliers métiers, cartographié les parcours, puis conçu et prototypé la solution avec Claude Code, jusqu'à la première livraison.

### La solution
Un seul parcours guidé : l'IA lit le certificat reçu et pré-remplit, l'analyste vérifie chaque valeur et valide.

[[flow]]

### Démarche
1. **Ateliers métiers** : recueil du besoin et de la solution existante.
2. **Parcours métier** : embranchements, dépendances, opportunités d'amélioration.
3. **Parcours utilisateur** : fonctionnalités actuelles et souhaitées.
4. **Prototype** : itéré avec Claude Code, en s'appuyant sur l'*AI Skill* du Design System pour rester conforme aux composants.
5. **Livraison** : contrôles, puis première itération versée au dépôt central.

### Gains
- **Des données fiables** dans l'outil, pour le back-office comme pour le monitoring.
- **Moins de tâches chronophages** : l'IA lit le certificat et pré-remplit, l'analyste ne ressaisit plus.
- **Moins de charge cognitive** : un seul parcours guidé, sans jongler entre le document et deux modules.
- **Fini les allers-retours** entre le module Contrat et le module Covenant.
- **Un certificat traité en une fois**, pour tous ses covenants.
- **Chaque valeur tracée** jusqu'à sa page d'origine.

### Partis pris
- **L'IA propose, l'analyste dispose** : contrat comme covenant, chaque correspondance s'accepte ou se corrige.
- **L'IA est toujours identifiable** : une couleur et une icône dédiées, distinctes des statuts.
- **Chaque valeur est vérifiable** : le document s'ouvre à la page d'où elle vient.
- **Une file pilotée par statut** : sept compteurs disent où en est chaque soumission.

### Cas gérés
| Situation | Réponse du design |
|---|---|
| Certificat manquant dans l'email | Statut *To check*, suite bloquée tant qu'il n'est pas ajouté |
| Pièce jointe illisible | Statut *Error*, aucune donnée extraite |
| Plusieurs contrats possibles | Chacun s'accepte séparément, covenants groupés par contrat |
| Aucun contrat ou covenant trouvé | Sélection ou suivi manuel — pas une erreur |
| IA occupée ou en échec | File d'attente, puis relance ou retour aux documents |
| Valeur différente de celle en base | Alerte avant remplacement |
| Covenant déjà suivi | Signalé comme doublon possible |
| Contrat changé en cours de route | Avertissement : l'extraction est perdue, puis relancée |
| Covenants non validés | Envoi au calendrier bloqué |

### Pilotage
Une fois les valeurs validées, le suivi continue dans le même outil.
- **Vue d'ensemble** : cinq blocs de compteurs, de la validation aux covenants extraits.
- **Statuts de suivi** : *Breached*, *Overdue*, *Upcoming*, *Early warning*, *Waived*.
- **Calendrier par covenant** : seuil, valeur et document justificatif pour chaque période ; les lignes mises à jour par l'IA sont marquées.
- **Traçabilité** : piste d'audit, archivage, amendement ou waiver.
- **Tous types de covenants** : financiers, non financiers et ESG.

### Contrainte technique
Le dépôt manuel passe par l'écran de gestion documentaire existant : liste de documents, fenêtre de dépôt, puis métadonnées à renseigner. Cette contrainte technique n'était pas modifiable dans le cadre du projet ; elle ajoute trois gestes avant que l'IA ne démarre.

Le design la rend lisible : un message indique quel document est attendu, et la suite reste bloquée tant qu'il manque.

### Résultat
- ==17 écrans== navigables, prototypés avec Claude.
- Première itération livrée dans le dépôt central.
- Approche réutilisée sur d'autres objets métiers.
- **Piste suivante** : afficher un indice de confiance de l'IA pour chaque correspondance proposée.`,
        express: `- **Contexte** : contrôle des covenants (les engagements inscrits dans les contrats de crédit) de Trade Finance, dans une banque d'investissement.
- **Problématique** : un contrôle manuel, dans un outil séparé, avec relances, délais et erreurs de saisie.
- **Son rôle** : Product Designer, en binôme avec un développeur — ateliers, parcours, prototype avec Claude Code.
- **Solution** : l'IA lit et propose, l'analyste valide chaque valeur face à sa source ; certificat manquant, correspondances multiples, échec de l'IA et doublons sont traités.
- **Résultat** : ==17 écrans==, première itération livrée, approche réutilisée.`,
        deep: `### Design Lead
- **Deux entrées, un seul parcours** : email ou dépôt manuel aboutissent au même stepper.
- **Maître-détail** : covenants extraits à gauche, donnée extraite et covenant du contrat côte à côte à droite.
- **Les états d'erreur font partie du design** : chaque étape asynchrone a son attente, son échec et sa sortie manuelle.
- **Du cas au pattern** : extraction IA, soumission par email et tags de statut repris tels quels sur un autre module.`,
      },
      en: {
        standard: `### Context
At an **investment bank**, the Trade Finance business checks its covenants, certificate after certificate. A one-month project, paired with one developer.

*A covenant is a commitment written into a loan agreement, such as a financial ratio to respect, that the bank checks every period.*

### The problem
That control was done by hand, in a tool separate from the rest of the system, moving from one module to another. The pain points: repeated reminders to obtain the documents, a delay between receipt and entry, entry errors, calculations redone by the analyst.

The goal: bring that control back into the central tool by **rethinking it with AI** rather than porting it as it was.

### Her role
Product Designer on the project. She ran the business workshops, mapped the journeys, then designed and prototyped the solution with Claude Code, through to the first delivery.

### The solution
A single guided journey: the AI reads the certificate received and pre-fills, the analyst checks each value and validates.

[[flow]]

### Approach
1. **Business workshops**: gathering the need and the existing solution.
2. **Business journey**: branches, dependencies, improvement opportunities.
3. **User journey**: current and desired features.
4. **Prototype**: iterated with Claude Code, relying on the Design System *AI Skill* to stay compliant with the components.
5. **Delivery**: checks, then a first iteration pushed to the central repository.

### Gains
- **Reliable data** in the tool, for the back office as well as for monitoring.
- **Fewer time-consuming tasks**: the AI reads the certificate and pre-fills, the analyst no longer re-types.
- **Less cognitive load**: one guided journey, no more juggling between the document and two modules.
- **No more back-and-forth** between the Contract module and the Covenant module.
- **One certificate handled in one pass**, for all its covenants.
- **Every value traced** back to its source page.

### Principles
- **The AI suggests, the analyst decides**: contract or covenant, every match can be accepted or corrected.
- **AI is always identifiable**: a dedicated colour and icon, distinct from statuses.
- **Every value is verifiable**: the document opens at the page it comes from.
- **A queue driven by status**: seven counters show where every submission stands.

### Cases handled
| Situation | Design response |
|---|---|
| Certificate missing from the email | *To check* status, next step blocked until it is added |
| Unreadable attachment | *Error* status, no data extracted |
| Several possible contracts | Each is accepted separately, covenants grouped by contract |
| No contract or covenant found | Manual selection or monitoring — not an error |
| AI busy or failing | Queue, then retry or back to the documents |
| Value differs from the stored one | Warning before replacing |
| Covenant already monitored | Flagged as a possible duplicate |
| Contract changed along the way | Warning: the extraction is lost, then re-run |
| Covenants not validated | Push to the calendar blocked |

### Steering
Once the values are validated, monitoring continues in the same tool.
- **Overview**: five blocks of counters, from validation to extracted covenants.
- **Monitoring statuses**: *Breached*, *Overdue*, *Upcoming*, *Early warning*, *Waived*.
- **Calendar per covenant**: threshold, value and supporting document for each period; rows updated by the AI are flagged.
- **Traceability**: audit trail, archiving, amendment or waiver.
- **All covenant types**: financial, non-financial and ESG.

### Technical constraint
Manual upload goes through the existing document-management screen: documents list, upload dialog, then metadata to fill in. This technical constraint could not be changed within the project; it adds three steps before the AI starts.

The design makes it readable: a message states which document is expected, and the next step stays blocked while it is missing.

### Outcome
- ==17 navigable screens==, prototyped with Claude.
- First iteration delivered to the central repository.
- Approach reused on other business objects.
- **Next path**: show an AI confidence score for each suggested match.`,
        express: `- **Context**: Trade Finance covenant control (the commitments written into loan agreements) at an investment bank.
- **Problem**: a manual control, in a separate tool, with reminders, delays and entry errors.
- **Her role**: Product Designer, paired with one developer — workshops, journeys, prototype with Claude Code.
- **Solution**: the AI reads and suggests, the analyst validates each value against its source; missing certificate, multiple matches, AI failure and duplicates are handled.
- **Outcome**: ==17 screens==, first iteration delivered, approach reused.`,
        deep: `### Design Lead
- **Two entry points, one journey**: email or manual upload lead to the same stepper.
- **Master-detail**: extracted covenants on the left, extracted data and the contract's covenant side by side on the right.
- **Error states are part of the design**: every asynchronous step has its wait, its failure and its manual way out.
- **From case to pattern**: AI extraction, email submission and status tags reused as-is on another module.`,
      },
    },
    attachment: 'covenant',
    flow: 'covenant',
    anchors: true,
    followUps: ['ai', 'designsystem', 'skills'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'kering',
    question: {
      fr: "Parle-moi de l'app Privilege Card du Groupe Kering : comment a-t-elle transformé une carte physique en application utilisée par 40 000 personnes ?",
      en: 'Tell me about the Kering Group Privilege Card app: how did she turn a physical card into an app used by 40,000 people?',
    },
    chip: { fr: 'Kering — Privilege Card', en: 'Kering — Privilege Card' },
    keywords: [
      ['kering', 6], ['privilege', 6], ['luxe', 4], ['luxury', 4], ['40k', 5], ['40 000', 5], ['40000', 5],
      ['carte', 3], ['card', 3], ['mobile', 3], ['application mobile', 4], ['mobile app', 4], ['quota', 5],
      ['boutique', 3], ['retail', 3],
    ],
    answer: {
      fr: {
        standard: `### Contexte
De septembre 2022 à décembre 2023, Anne-Sophie est Product Designer au sein du **Groupe Kering**. Le projet : **numériser une carte de réduction physique** en une application mobile évolutive, la *Privilege Card*.

### Démarche
- **Comprendre** — recherche utilisateurs, ateliers, audits et cartographies UX de parcours complexes.
- **Concevoir** — conception UI et composants de Design System pensés pour évoluer avec l'application.
- **Valider** — tests utilisateurs itératifs.

### Impact
- ==40 000 utilisateurs== actifs sur l'application.
- **Fiabilisation** de la gestion des quotas d'achat et du respect des restrictions de vente en boutique.`,
        express: `- **Projet** : carte de réduction physique → application mobile *Privilege Card* (sept. 2022 – déc. 2023).
- **Démarche** : recherche utilisateurs, ateliers, cartographies UX, composants de Design System, tests itératifs.
- **Impact** : ==40 000 utilisateurs== actifs.
- **Métier** : quotas d'achat et restrictions de vente en boutique fiabilisés.`,
        deep: `### Zoom méthodologie
- **Parcours complexes** : la carte physique portait des règles implicites (quotas, restrictions de vente). Les cartographies UX ont servi à les rendre explicites avant de les traduire en interface.
- **Design System évolutif** : des composants conçus pour absorber de nouvelles fonctionnalités sans redessiner l'application.
- **Boucles courtes** : les tests utilisateurs itératifs ont guidé chaque arbitrage de conception.`,
      },
      en: {
        standard: `### Context
From September 2022 to December 2023, Anne-Sophie was a Product Designer at **Kering Group**. The project: **digitising a physical discount card** into a scalable mobile app, the *Privilege Card*.

### Approach
- **Understand** — user research, workshops, UX audits and mapping of complex journeys.
- **Design** — UI design and Design System components built to evolve with the app.
- **Validate** — iterative user testing.

### Impact
- ==40,000 active users== on the app.
- **More reliable** purchase-quota management and in-store sales restrictions.`,
        express: `- **Project**: physical discount card → *Privilege Card* mobile app (Sep 2022 – Dec 2023).
- **Approach**: user research, workshops, UX mapping, Design System components, iterative testing.
- **Impact**: ==40,000 active users==.
- **Business**: purchase quotas and in-store sales restrictions made reliable.`,
        deep: `### Methodology zoom
- **Complex journeys**: the physical card carried implicit rules (quotas, sales restrictions). UX maps made them explicit before translating them into the interface.
- **Scalable Design System**: components designed to absorb new features without redrawing the app.
- **Short loops**: iterative user testing guided every design trade-off.`,
      },
    },
    followUps: ['grdf', 'bnp', 'impact'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'grdf',
    question: {
      fr: 'Comment a-t-elle mené la refonte éco-conçue et accessible de la plateforme GRDF (Act4Gaz → justdecarb.grdf.fr) ?',
      en: 'How did she lead the eco-designed, accessible redesign of the GRDF platform (Act4Gaz → justdecarb.grdf.fr)?',
    },
    chip: { fr: 'GRDF · Refonte éco-conçue et RGAA', en: 'GRDF · Eco-designed redesign and RGAA' },
    keywords: [
      ['grdf', 6], ['rgaa', 5], ['accessib', 5], ['a11y', 5], ['wcag', 4], ['eco', 3], ['ecoindex', 6],
      ['eco conception', 5], ['eco design', 5], ['ecoconcep', 5], ['justdecarb', 6], ['act4gaz', 6],
      ['rebranding', 4], ['environnement', 4], ['environment', 4], ['sobriete', 4], ['green', 3], ['energie', 3],
      ['energy', 3], ['handicap', 4], ['inclusi', 3],
    ],
    answer: {
      fr: {
        standard: `### Contexte
**GRDF** (via mc2i), janvier – mai 2024. La plateforme **Act4Gaz** devient **justdecarb.grdf.fr**.

- **Ambition** : faire de GRDF une référence de la décarbonation en France.
- **Cadre** : une refonte en ==trois mois==, pensée **mobile first**.

### Problématique
Beaucoup de contenus, mais des lecteurs perdus : navigation complexe, contenu mal hiérarchisé, formats mélangés, liens cassés, aucun partage, lecture difficile sur mobile.

Deux exigences en plus : l'**accessibilité** (RGAA) et l'**éco-conception**.

### Son rôle
UX UI Designer : audits, recherche, identité graphique, Design System, maquettes et prototype.

### La solution
Trouver un contenu en trois gestes : la une, un filtre par thématique et par format, la recherche.

### 1 · Le persona
Julien, 28 ans, ingénieur en énergies renouvelables.

[[grdf-persona]]

### 2 · La carte d'expérience
Son parcours sur l'ancienne plateforme : là où il décroche.

[[grdf-map]]

### 3 · Le parcours, avant et après
Chaque friction de l'ancien parcours trouve sa réponse dans le nouveau.

[[flow]]

### 4 · Le moodboard et les partis pris
[[grdf-moodboard]]

**Améliorations et décisions graphiques**

- **Glassmorphisme maîtrisé** : le panneau translucide floute la photo derrière le texte. Le contraste et la lisibilité restent stables, quelle que soit l'image.
- **La couleur porte un sens, jamais seule** : deux verts et un bleu pour les thématiques et les actions, toujours doublés d'un libellé ou d'une icône.
- **De l'air** : un fond clair, une idée par bloc. Moins de charge cognitive, la page se balaie.
- **Hiérarchie typographique nette** : grands titres, texte lisible, chiffres clés au trait qui se voient sans concurrencer le texte.
- **Zones d'action généreuses** : boutons larges et espacés, pensés pour le pouce.

**Optimisation de la navigation**

- **Un menu toujours visible**, identique sur chaque page : plus de bouton « Menu », et un repère stable au clavier comme au lecteur d'écran.
- **Des parcours courts** : la une, un filtre ou la recherche mènent au contenu. Moins de pages chargées, moins de données échangées.
- **Rien ne bouge sans le lecteur** : fini le carrousel automatique. Un contenu à la fois, à lire, passer ou reprendre.
- **Le format annoncé avant le clic** : lecture, audio ou vidéo. Chacun choisit, sans lancer une vidéo par erreur.
- **Une barre fixe en bas sur mobile** : trois rubriques sous le pouce, chacune avec son libellé.

### 5 · Les écrans
Mobile first, puis ordinateur, à partir d'un Design System dédié.

[[grdf-screens]]

### 6 · Avant / Après
[[grdf-compare]]

### Accessibilité
- **Audit RGAA** de l'existant, pour partir des blocages réels.
- **Jamais la couleur seule** : thématique et format sont écrits, avec une icône.
- **Des boutons explicites** : « Retour », « Lire », « Passer ».
- **Le lecteur garde la main** : plus de défilement automatique à la une.
- **Des composants accessibles** dès le Design System.

### Impact
- ==Note C EcoIndex==
- Conformité ==RGAA==
- En ligne : [justdecarb.grdf.fr](https://justdecarb.grdf.fr/)`,
        express: `- **Contexte** : plateforme Act4Gaz de GRDF, devenue **justdecarb.grdf.fr** (janv. – mai 2024).
- **Problématique** : refondre et rebrander, avec une exigence d'accessibilité (RGAA) et d'éco-conception.
- **Son rôle** : audits, identité graphique, Design System, maquettes et prototypes.
- **Solution** : audits UX & RGAA, nouvelle identité, Design System sobre et accessible, mobile-first.
- **Impact** : ==Note C EcoIndex== + conformité ==RGAA==.`,
        deep: `### Zoom méthodologie
- **L'audit comme cahier des charges** : les audits UX et RGAA ont défini les contraintes du Design System avant la première maquette.
- **Sobriété par le système** : un Design System volontairement sobre limite ce qui est chargé et affiché — c'est lui qui porte la performance EcoIndex.
- **Accessibilité native** : les règles RGAA sont intégrées aux composants plutôt que vérifiées après coup.
- **Mobile-first** : concevoir d'abord pour le petit écran force à hiérarchiser le contenu.`,
      },
      en: {
        standard: `### Context
**GRDF** (through mc2i), January – May 2024. The **Act4Gaz** platform becomes **justdecarb.grdf.fr**.

- **Ambition**: make GRDF a reference in decarbonisation in France.
- **Frame**: a redesign in ==three months==, designed **mobile first**.

### The problem
A lot of content, but lost readers: complex navigation, poorly ranked content, mixed formats, broken links, no sharing, difficult reading on mobile.

Two further requirements: **accessibility** (RGAA) and **eco-design**.

### Her role
UX/UI Designer: audits, research, visual identity, Design System, mockups and prototype.

### The solution
Find content in three moves: the front page, a filter by topic and by format, the search.

### 1 · The persona
Julien, 28, a renewable energy engineer.

[[grdf-persona]]

### 2 · The experience map
His journey on the old platform: where he drops off.

[[grdf-map]]

### 3 · The journey, before and after
Every pain point of the old journey finds its answer in the new one.

[[flow]]

### 4 · The moodboard and design choices
[[grdf-moodboard]]

**Visual improvements and decisions**

- **Controlled glassmorphism**: the translucent panel blurs the photo behind the text. Contrast and readability stay stable, whatever the image.
- **Colour carries meaning, never alone**: two greens and a blue for topics and actions, always doubled with a label or an icon.
- **Breathing room**: a light background, one idea per block. Less cognitive load; the page can be scanned.
- **Clear typographic hierarchy**: large headings, readable text, outlined key figures that show without competing with the text.
- **Generous action areas**: wide, well-spaced buttons, designed for the thumb.

**Navigation optimisation**

- **An always-visible menu**, identical on every page: no more “Menu” button, and a stable landmark for keyboard and screen reader users.
- **Short journeys**: the front page, a filter or the search lead to the content. Fewer pages loaded, less data exchanged.
- **Nothing moves without the reader**: the automatic carousel is gone. One piece of content at a time, to read, skip or come back to.
- **Format announced before the click**: reading, audio or video. Everyone chooses, and no video is launched by mistake.
- **Fixed bottom bar on mobile**: three sections under the thumb, each with its label.

### 5 · The screens
Mobile first, then desktop, from a dedicated Design System.

[[grdf-screens]]

### 6 · Before / After
[[grdf-compare]]

### Accessibility
- **RGAA audit** of the existing platform, to start from the real blockers.
- **Never colour alone**: topic and format are written out, with an icon.
- **Explicit buttons**: “Back”, “Read”, “Skip”.
- **The reader stays in control**: no more auto-advancing front page.
- **Accessible components** from the Design System up.

### Impact
- ==EcoIndex grade C==
- ==RGAA== compliance
- Live: [justdecarb.grdf.fr](https://justdecarb.grdf.fr/)`,
        express: `- **Context**: GRDF's Act4Gaz platform, now **justdecarb.grdf.fr** (Jan – May 2024).
- **Problem**: redesign and rebrand, with accessibility (RGAA) and eco-design requirements.
- **Her role**: audits, visual identity, Design System, mockups and prototypes.
- **Solution**: UX & RGAA audits, new identity, lean accessible Design System, mobile-first.
- **Impact**: ==EcoIndex grade C== + ==RGAA== compliance.`,
        deep: `### Methodology zoom
- **Audit as the brief**: the UX and RGAA audits defined the Design System's constraints before the first mockup.
- **Lean by system**: a deliberately lean Design System limits what gets loaded and displayed — that is what carries the EcoIndex performance.
- **Accessibility built in**: RGAA rules live inside the components rather than being checked afterwards.
- **Mobile-first**: designing for the small screen first forces content prioritisation.`,
      },
    },
    attachment: 'grdf',
    flow: 'grdf',
    anchors: true,
    followUps: ['covenant', 'designsystem', 'impact'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cdc',
    question: {
      fr: "Quelle a été sa démarche pour refondre un outil métier de gestion de carrière à la Caisse des Dépôts ?",
      en: 'What was her approach to redesigning a career-management business tool at Caisse des Dépôts?',
    },
    chip: { fr: 'Caisse des Dépôts — Outil métier', en: 'Caisse des Dépôts — Business tool' },
    keywords: [
      ['caisse des depots', 6], ['cdc', 5], ['outil metier', 5], ['business tool', 5], ['emaj', 6], ['rh', 4], ['hr', 4], ['carriere', 4], ['career management', 5],
      ['ressources humaines', 5], ['human resources', 5], ['outil interne', 4], ['internal tool', 4],
      ['atelier', 3], ['workshop', 3], ['co creation', 4], ['secteur public', 4], ['public sector', 4],
    ],
    answer: {
      fr: {
        standard: `### Contexte
D'avril à août 2024, Anne-Sophie est UX UI Designer pour **La Caisse des Dépôts** (via mc2i), sur **Emaj**, l'outil interne de gestion stratégique des carrières.

### Problématique
Refondre cet outil métier en partant des besoins réels de ses utilisateurs, et aligner des parties prenantes différentes autour d'une même solution.

### Son rôle
Elle mène les entretiens et l'analyse de données, planifie et anime les ateliers, prototype, teste et coordonne les activités entre équipes.

### La solution
1. **Entretiens utilisateurs** pour comprendre les usages réels.
2. **Analyse de données** pour objectiver les constats.
3. **Ateliers de co-création** qu'elle facilite avec les parties prenantes.
4. **Prototypage haute fidélité**.
5. **Tests utilisateurs** pour valider les parcours.
6. **Coordination inter-équipes** tout au long du projet.

### Ce que cette mission montre
Sa capacité à mener un cycle de discovery complet sur un outil métier, et à aligner des équipes différentes autour d'une même vision.`,
        express: `- **Contexte** : **Emaj**, outil interne de gestion stratégique des carrières de la Caisse des Dépôts (avril – août 2024).
- **Problématique** : refondre l'outil à partir des besoins réels, en alignant les parties prenantes.
- **Son rôle** : entretiens, analyse, animation d'ateliers, prototypage, tests, coordination.
- **Solution** : discovery (entretiens + données), ateliers de co-création, prototype haute fidélité validé par des tests utilisateurs.`,
        deep: `### Zoom méthodologie
- **Qualitatif + quantitatif** : entretiens et analyse de données se complètent — les uns expliquent ce que les autres mesurent.
- **Co-création** : les ateliers font émerger les arbitrages avec les métiers plutôt que de les leur présenter.
- **Prototype comme outil de décision** : la haute fidélité permet de tester des parcours réalistes avant tout développement.`,
      },
      en: {
        standard: `### Context
From April to August 2024, Anne-Sophie was a UX/UI Designer for **La Caisse des Dépôts** (through mc2i), on **Emaj**, the internal strategic career-management tool.

### The problem
Redesign this business tool starting from its users' real needs, and align different stakeholders around one solution.

### Her role
She ran the interviews and data analysis, planned and facilitated the workshops, prototyped, tested and coordinated activities across teams.

### The solution
1. **User interviews** to understand real usage.
2. **Data analysis** to back up the findings.
3. **Co-creation workshops** that she facilitated with stakeholders.
4. **High-fidelity prototyping**.
5. **User testing** to validate the journeys.
6. **Cross-team coordination** throughout the project.

### What this engagement shows
Her ability to run a full discovery cycle on a business tool and align different teams around a shared vision.`,
        express: `- **Context**: **Emaj**, Caisse des Dépôts' internal strategic career-management tool (Apr – Aug 2024).
- **Problem**: redesign the tool from real needs, aligning the stakeholders.
- **Her role**: interviews, analysis, workshop facilitation, prototyping, testing, coordination.
- **Solution**: discovery (interviews + data), co-creation workshops, high-fidelity prototype validated by user testing.`,
        deep: `### Methodology zoom
- **Qualitative + quantitative**: interviews and data analysis complement each other — one explains what the other measures.
- **Co-creation**: workshops surface trade-offs with business teams rather than presenting them as done.
- **Prototype as a decision tool**: high fidelity lets realistic journeys be tested before any development.`,
      },
    },
    followUps: ['bnp', 'softskills', 'skills'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'background',
    question: {
      fr: "Quel est son parcours, de la mode au Product Design ?",
      en: 'What is her career path, from fashion to Product Design?',
    },
    chip: { fr: 'De la mode au Product Design', en: 'From fashion to Product Design' },
    keywords: [
      ['parcours', 5], ['experience', 4], ['eden park', 6], ['eden', 4], ['mode', 3], ['fashion', 4], ['balmain', 6],
      ['indress', 6], ['broderie', 5], ['embroider', 5], ['creati', 3], ['histoire', 3], ['career', 3],
      ['background', 4], ['avant', 2], ['textile', 4], ['reconversion', 5], ['e commerce', 4], ['ecommerce', 4],
      ['trajectoire', 4], ['journey', 3], ['history', 3], ['work history', 5], ['arts', 3],
    ],
    answer: {
      fr: {
        standard: `Un parcours en trois temps : **créer, piloter, concevoir**.

### 2019 — La création
Designer Broderie chez **Balmain** et Designer Studio chez **Indress**, à Paris. Elle y forge son œil : exigence du détail, sens de la matière et de la composition.

### 2021 – 2022 — Le digital
Coordinatrice de contenu digital & de projet chez **Eden Park** : pilotage de projets digitaux de bout en bout, calendrier éditorial, maintenance UX du site, production visuelle pour les campagnes SMO/SEA. Résultat : ==+20 % de ventes e-commerce== en 1 an.

### 2022 – 2023 — Le produit
Product Designer au sein du **Groupe Kering** : l'application *Privilege Card*, ==40 000 utilisateurs==.

### Depuis 2024 — Design Ops & IA
Product Designer chez **mc2i** : GRDF, La Caisse des Dépôts, puis **BNP Paribas CIB** au sein des équipes IA et UX.

Ce fil conducteur explique son profil : un héritage créatif mis au service de produits complexes et de l'outillage des équipes.`,
        express: `- **2019** : Designer Broderie chez Balmain, Designer Studio chez Indress.
- **2021 – 2022** : Eden Park, contenu digital & projet — ==+20 % de ventes e-commerce==.
- **2022 – 2023** : Product Designer, Groupe Kering — ==40 000 utilisateurs==.
- **Depuis 2024** : mc2i — GRDF, Caisse des Dépôts, BNP Paribas CIB (IA & UX).`,
      },
      en: {
        standard: `A path in three movements: **create, coordinate, design**.

### 2019 — Craft
Embroidery Designer at **Balmain** and Studio Designer at **Indress**, in Paris. This is where she trained her eye: attention to detail, a sense of material and composition.

### 2021 – 2022 — Digital
Digital Content & Project Coordinator at **Eden Park**: end-to-end digital project management, editorial calendar, website UX maintenance, visual production for SMO/SEA campaigns. Result: ==+20% e-commerce sales== in one year.

### 2022 – 2023 — Product
Product Designer at **Kering Group**: the *Privilege Card* app, ==40,000 users==.

### Since 2024 — Design Ops & AI
Product Designer at **mc2i**: GRDF, La Caisse des Dépôts, then **BNP Paribas CIB** within the AI and UX teams.

That thread explains her profile: a creative heritage put to work on complex products and team tooling.`,
        express: `- **2019**: Embroidery Designer at Balmain, Studio Designer at Indress.
- **2021 – 2022**: Eden Park, digital content & project — ==+20% e-commerce sales==.
- **2022 – 2023**: Product Designer, Kering Group — ==40,000 users==.
- **Since 2024**: mc2i — GRDF, Caisse des Dépôts, BNP Paribas CIB (AI & UX).`,
      },
    },
    followUps: ['education', 'bnp', 'softskills'],
    actions: ['cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'skills',
    question: {
      fr: 'Quelles sont ses compétences clés ?',
      en: 'What are her key skills?',
    },
    chip: { fr: 'Ses compétences clés', en: 'Her key skills' },
    keywords: [
      ['competence', 5], ['skill', 3], ['expertise', 4], ['savoir faire', 4], ['capabilit', 3], ['force', 3],
      ['strength', 3], ['discovery', 4], ['user research', 5], ['recherche utilisateur', 5], ['ux', 2], ['ui', 2],
      ['methode', 3], ['method', 3], ['process', 3], ['prototyp', 3], ['test utilisateur', 4], ['user test', 4],
      ['hard skills', 5], ['sait elle faire', 4], ['can she do', 4],
    ],
    answer: {
      fr: {
        standard: `Les compétences d'Anne-Sophie s'organisent en trois piliers.

### Design & Prototypage
Figma (Expert), Storybook, Zeroheight, After Effects, Illustrator, Photoshop.

### IA & Vibecoding
Claude Code, *AI Skills* (création de skills, usage au quotidien), Prompt Engineering, Gemini, Midjourney, Adobe Firefly.

### Product & Tech
Discovery, Design Ops, Design System, rédaction de specs \`.md\`, HTML/CSS (Handoff Design-to-Dev), Jira, Confluence.

### En pratique
| Savoir-faire | Mis en œuvre chez |
|---|---|
| Recherche utilisateurs & ateliers | Kering, Caisse des Dépôts |
| Audits UX & accessibilité RGAA | GRDF |
| Design System (création, évolution, cadrage pour l'IA) | GRDF, Kering, BNP Paribas CIB |
| AI Skills & vibecoding | BNP Paribas CIB |`,
        express: `- **Design** : Figma (Expert), Storybook, Zeroheight, suite Adobe.
- **IA** : Claude Code, *AI Skills*, Prompt Engineering, Gemini, Midjourney, Firefly.
- **Product & Tech** : Discovery, Design Ops, Design System, specs \`.md\`, HTML/CSS.
- **Terrain** : recherche utilisateurs, ateliers, audits RGAA, tests utilisateurs.`,
        deep: `### Ce qui est rare dans cette combinaison
- **Du Figma au code** : HTML/CSS pour le handoff et *vibecoding* pour prototyper — elle parle le langage des développeurs.
- **Du composant à la règle** : Storybook et Zeroheight pour documenter, AI Skills pour rendre cette documentation actionnable par un agent.
- **Du pixel au process** : la même personne conçoit l'interface et le workflow qui la produit.`,
      },
      en: {
        standard: `Anne-Sophie's skills are organised around three pillars.

### Design & Prototyping
Figma (Expert), Storybook, Zeroheight, After Effects, Illustrator, Photoshop.

### AI & Vibecoding
Claude Code, *AI Skills* (creating skills, daily use), Prompt Engineering, Gemini, Midjourney, Adobe Firefly.

### Product & Tech
Discovery, Design Ops, Design System, \`.md\` spec writing, HTML/CSS (Design-to-Dev handoff), Jira, Confluence.

### In practice
| Know-how | Applied at |
|---|---|
| User research & workshops | Kering, Caisse des Dépôts |
| UX & RGAA accessibility audits | GRDF |
| Design System (creation, evolution, framing for AI) | GRDF, Kering, BNP Paribas CIB |
| AI Skills & vibecoding | BNP Paribas CIB |`,
        express: `- **Design**: Figma (Expert), Storybook, Zeroheight, Adobe suite.
- **AI**: Claude Code, *AI Skills*, Prompt Engineering, Gemini, Midjourney, Firefly.
- **Product & Tech**: Discovery, Design Ops, Design System, \`.md\` specs, HTML/CSS.
- **Field**: user research, workshops, RGAA audits, user testing.`,
        deep: `### What is rare in this combination
- **From Figma to code**: HTML/CSS for handoff and *vibecoding* for prototyping — she speaks the developers' language.
- **From component to rule**: Storybook and Zeroheight to document, AI Skills to make that documentation actionable by an agent.
- **From pixel to process**: the same person designs the interface and the workflow that produces it.`,
      },
    },
    followUps: ['stack', 'ai', 'designsystem'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'stack',
    question: {
      fr: 'Quels outils et quelle stack utilise-t-elle au quotidien ?',
      en: 'What tools and stack does she use day to day?',
    },
    chip: { fr: 'Ses outils & sa stack', en: 'Her tools & stack' },
    keywords: [
      ['stack', 6], ['outil', 5], ['tool', 5], ['figma', 5], ['logiciel', 4], ['software', 4], ['storybook', 5],
      ['zeroheight', 5], ['jira', 5], ['confluence', 5], ['html', 4], ['css', 4], ['code', 3], ['midjourney', 5],
      ['gemini', 5], ['firefly', 5], ['adobe', 4], ['photoshop', 5], ['illustrator', 5], ['after effects', 5],
      ['techno', 4], ['developp', 3], ['handoff', 4],
    ],
    answer: {
      fr: {
        standard: `Voici la stack d'Anne-Sophie, de la conception au handoff.

| Usage | Outils |
|---|---|
| **Conception & prototypage** | Figma (Expert) |
| **Documentation Design System** | Storybook, Zeroheight |
| **Motion & création visuelle** | After Effects, Illustrator, Photoshop |
| **IA — production** | Claude Code (*vibecoding*, *AI Skills*), Prompt Engineering |
| **IA — exploration** | Gemini, Midjourney, Adobe Firefly |
| **Handoff Design-to-Dev** | Specs \`.md\`, HTML/CSS |
| **Pilotage** | Jira, Confluence |

### Sa stack type sur un projet
\`\`\`
Figma  →  Design System (Storybook · Zeroheight)
       →  AI Skills (règles & guidelines)
       →  Claude Code (prototype fonctionnel)
       →  specs .md  →  handoff développeurs
\`\`\``,
        express: `- **Design** : Figma (Expert), Storybook, Zeroheight.
- **IA** : Claude Code, AI Skills, Gemini, Midjourney, Adobe Firefly.
- **Création** : After Effects, Illustrator, Photoshop.
- **Delivery** : specs \`.md\`, HTML/CSS, Jira, Confluence.`,
      },
      en: {
        standard: `Here is Anne-Sophie's stack, from design to handoff.

| Use | Tools |
|---|---|
| **Design & prototyping** | Figma (Expert) |
| **Design System documentation** | Storybook, Zeroheight |
| **Motion & visual creation** | After Effects, Illustrator, Photoshop |
| **AI — production** | Claude Code (*vibecoding*, *AI Skills*), Prompt Engineering |
| **AI — exploration** | Gemini, Midjourney, Adobe Firefly |
| **Design-to-Dev handoff** | \`.md\` specs, HTML/CSS |
| **Delivery tracking** | Jira, Confluence |

### Her typical project stack
\`\`\`
Figma  →  Design System (Storybook · Zeroheight)
       →  AI Skills (rules & guidelines)
       →  Claude Code (functional prototype)
       →  .md specs  →  developer handoff
\`\`\``,
        express: `- **Design**: Figma (Expert), Storybook, Zeroheight.
- **AI**: Claude Code, AI Skills, Gemini, Midjourney, Adobe Firefly.
- **Creative**: After Effects, Illustrator, Photoshop.
- **Delivery**: \`.md\` specs, HTML/CSS, Jira, Confluence.`,
      },
    },
    followUps: ['ai', 'skills', 'designsystem'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'designsystem',
    question: {
      fr: 'Quelle est son expérience en Design System ?',
      en: 'What is her Design System experience?',
    },
    chip: { fr: 'Son expérience Design System', en: 'Her Design System experience' },
    keywords: [
      ['design system', 7], ['designsystem', 7], ['composant', 4], ['component', 4], ['token', 4], ['gouvernance', 5],
      ['governance', 5], ['bibliotheque', 4], ['library', 4], ['ds', 3], ['dette design', 5], ['design debt', 5],
      ['conformite', 3], ['compliance', 3], ['documentation', 3],
    ],
    answer: {
      fr: {
        standard: `Le Design System est le fil rouge du parcours d'Anne-Sophie : elle en a **créé** un, **fait évoluer** un autre, et **cadré** un troisième pour l'IA.

| Contexte | Son rôle |
|---|---|
| **GRDF** | Création d'un Design System dédié, sobre et accessible (RGAA) |
| **Groupe Kering** | Composants de Design System évolutifs pour l'app Privilege Card |
| **BNP Paribas CIB** | Gouvernance des composants UI pour l'IA ; création de skills pour standardiser et accélérer le travail des équipes |

### Sa spécificité : le Design System lisible par l'IA
Chez BNP Paribas CIB, elle a contribué à poser quatre principes : le Design System comme source de vérité, une double bibliothèque en miroir, aucune valeur inventée, une boucle courte avec revue. Pour ce portfolio, elle a conçu et testé son propre skill avec Claude Code.

### Outils
Figma (Expert), Storybook, Zeroheight.`,
        express: `- **GRDF** : Design System dédié, sobre et accessible (RGAA).
- **Kering** : composants évolutifs pour une app à ==40 000 utilisateurs==.
- **BNP Paribas CIB** : cadrage d'un Design System lisible par l'IA, avec l'équipe.
- **Outils** : Figma (Expert), Storybook, Zeroheight.`,
        deep: `### Sa vision du Design System
- **Une source de vérité** : la bibliothèque de composants, documentée (Storybook, Zeroheight).
- **Des règles explicites** : ce qui n'est pas écrit ne peut être ni appliqué par un agent, ni vérifié par un designer.
- **Une conformité assistée** : un skill signale les écarts au moment de la production, pas en fin de cycle.
- **Un handoff structuré** : specs \`.md\` cohérentes avec le Design System, du prototype au développement.`,
      },
      en: {
        standard: `The Design System is the common thread of Anne-Sophie's career: she **created** one, **evolved** another, and **framed** a third for AI.

| Context | Her role |
|---|---|
| **GRDF** | Creation of a dedicated, lean and accessible (RGAA) Design System |
| **Kering Group** | Scalable Design System components for the Privilege Card app |
| **BNP Paribas CIB** | Governance of UI components for AI; creation of skills to standardise and speed up the teams' work |

### Her specificity: an AI-readable Design System
At BNP Paribas CIB, she helped set four principles: the Design System as source of truth, a mirrored double library, no invented value, a short loop with review. For this portfolio, she designed and tested her own skill with Claude Code.

### Tools
Figma (Expert), Storybook, Zeroheight.`,
        express: `- **GRDF**: dedicated, lean and accessible (RGAA) Design System.
- **Kering**: scalable components for an app with ==40,000 users==.
- **BNP Paribas CIB**: framing an AI-readable Design System, with the team.
- **Tools**: Figma (Expert), Storybook, Zeroheight.`,
        deep: `### Her view of the Design System
- **One source of truth**: the component library, documented (Storybook, Zeroheight).
- **Explicit rules**: what isn't written down can neither be applied by an agent nor checked by a designer.
- **Assisted compliance**: a skill flags deviations at production time, not at the end of the cycle.
- **Structured handoff**: \`.md\` specs consistent with the Design System, from prototype to development.`,
      },
    },
    attachment: 'ds',
    followUps: ['ai', 'grdf', 'stack'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'vitalize',
    question: {
      fr: "Parle-moi de Vitaliz : comment a-t-elle mené une étude UX complète, des personas à l'application ?",
      en: 'Tell me about Vitaliz: how did she run a full UX study, from personas to the app?',
    },
    chip: { fr: 'Vitaliz · Des personas à l’application', en: 'Vitaliz · From personas to the app' },
    keywords: [
      ['vitalize', 9], ['vitaliz', 9], ['bracelet', 7], ['montre', 6], ['watch', 6], ['wristband', 7], ['blueprint', 7], ['service blueprint', 8],
      ['charte graphique', 6], ['brand guidelines', 6], ['projet de master', 6], ['master project', 6], ['master 2', 5], ['sport', 4],
      ['interview', 4], ['persona', 3], ['experience map', 4], ["carte d'experience", 4],
    ],
    answer: {
      fr: {
        standard: `### Contexte
Dernier projet de Master : imaginer une marque de bracelets connectés de sport, Vitaliz, et concevoir son application mobile, des personas aux supports promotionnels. Le bracelet suit et aide à améliorer tout ce qui compte pour la pratique sportive et le quotidien : activité, sommeil, alimentation, santé.

*Projet d'école : marque fictive.*

### Problématique
Le marché du bracelet connecté est saturé, et l'acheteur doute : quel modèle choisir, et les données sont-elles fiables ? Comment faire exister une nouvelle marque, et rassurer avant l'achat ?

### Son rôle
Cibles et personas, carte d'expérience, service blueprint, écrans et prototype de l'application, identité de marque et charte graphique, supports promotionnels.

### La solution
Trois décisions de conception, chacune partie d'un besoin de la cible, et une marque pour les porter. Sa signature : « Votre vie, au centre de tout ».

**Un seul modèle par persona** : l'acheteur n'a plus à comparer une gamme entière, il reconnaît le bracelet fait pour lui.

### 1 · La cible
Quatre cibles, de la plus large au cœur de cible : des actifs urbains de 27 à 37 ans, qui veulent rester motivés, suivre leur progression et relier le bracelet à leurs autres appareils.

*Personas et parcours sont des hypothèses de travail : l'exercice ne prévoyait pas d'utilisateurs réels.*

[[vitalize-persona]]

- **Sa motivation** : un suivi fiable, des données poussées, une interface intuitive.
- **Ses freins avant l'achat** : la robustesse du produit, la fiabilité des données de sport et de santé.

[[vitalize-map]]

- **Le doute grandit jusqu'à la décision** : motivé au départ, puis perdu devant l'offre, prudent, inquiet de se tromper.
- **Côté service**, un blueprint déroule le même parcours, de la prise de conscience au support : ce que la marque montre, et ce qu'elle doit faire en coulisses.

### 2 · Un programme à soi
[[vitaliz-decision-1]]

### 3 · Des données choisies
[[vitaliz-decision-2]]

### 4 · L'envie de revenir
[[vitaliz-decision-3]]

### 5 · La marque
[[vitalize-brand]]

- **Un logo en mouvement** : des lettres coupées, un « V » qui arrive comme un saut. La version miniature dessine une attache de montre.
- **Une charte qui encadre l'usage** : zones de protection, tailles minimales, interdits, échelle typographique.
- **Une marque pour tous, pas seulement pour les grands sportifs**. La garantie de trois ans répond au premier frein du persona : la fiabilité.

[[vitalize-shop]]

### Ce que ce projet montre
Un raisonnement tenu de bout en bout : un besoin de la cible, une décision, un écran. Et une marque construite pour porter l'ensemble.`,
        express: `- **Contexte** : dernier projet de Master — une marque de bracelets connectés de sport et son application mobile, pour suivre activité, sommeil, alimentation et santé. Projet d'école, marque fictive.
- **Problématique** : faire exister une nouvelle marque sur un marché saturé, et rassurer sur la fiabilité avant l'achat.
- **Son rôle** : personas, parcours, blueprint, identité, prototype, supports.
- **Solution** : un programme personnalisé, un accueil aux informations choisies, des challenges et un classement entre amis pour revenir ; un seul modèle par persona et une marque rassurante.`,
      },
      en: {
        standard: `### Context
Final Master's project: invent a brand of connected sports wristbands, Vitaliz, and design its mobile app, from personas to promotional material. The wristband tracks and helps improve everything that matters for sport and daily life: activity, sleep, nutrition, health.

*School project: fictional brand.*

### The problem
The connected wristband market is saturated, and buyers hesitate: which model to choose, and is the data reliable? How do you make a new brand exist, and reassure before purchase?

### Her role
Audiences and personas, experience map, service blueprint, app screens and prototype, brand identity and guidelines, promotional material.

### The solution
Three design decisions, each starting from a need of the audience, and a brand to carry them. Its tagline: “Votre vie, au centre de tout” (your life, at the centre of everything).

**One model per persona**: buyers no longer have to compare a whole range, they recognise the wristband made for them.

### 1 · The audience
Four audiences, from the broadest to the core target: urban professionals aged 27 to 37 who want to stay motivated, track their progress and connect the wristband to their other devices.

*Personas and journeys are working hypotheses: the exercise did not involve real users.*

[[vitalize-persona]]

- **His motivation**: reliable tracking, detailed data, an intuitive interface.
- **His barriers before buying**: how robust the product is, how reliable the sports and health data are.

[[vitalize-map]]

- **Doubt grows until the decision**: motivated at first, then lost in the offer, cautious, worried about choosing wrong.
- **On the service side**, a blueprint lays out the same journey, from awareness to support: what the brand shows, and what it has to do backstage.

### 2 · A programme of your own
[[vitaliz-decision-1]]

### 3 · Chosen data
[[vitaliz-decision-2]]

### 4 · A reason to come back
[[vitaliz-decision-3]]

### 5 · The brand
[[vitalize-brand]]

- **A logo in motion**: cut letters, a “V” that lands like a jump. The compact version draws a watch clasp.
- **Guidelines that frame its use**: clear space, minimum sizes, don'ts, type scale.
- **A brand for everyone, not only for serious athletes**. The three-year warranty answers the persona's first barrier: reliability.

[[vitalize-shop]]

### What this project shows
Reasoning held from end to end: a need of the audience, a decision, a screen. And a brand built to carry it all.`,
        express: `- **Context**: final Master's project — a brand of connected sports wristbands and its mobile app, to track activity, sleep, nutrition and health. School project, fictional brand.
- **Problem**: make a new brand exist in a saturated market, and reassure on reliability before purchase.
- **Her role**: personas, journeys, blueprint, identity, prototype, promotional material.
- **Solution**: a personalised programme, a home screen with chosen information, challenges and a ranking among friends to come back; one model per persona and a reassuring brand.`,
      },
    },
    attachment: 'vitalize',
    anchors: true,
    followUps: ['bloombar', 'rebrand', 'grdf'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'bloombar',
    question: {
      fr: "Parle-moi de Bloom Bar : comment a-t-elle créé l'univers visuel d'un nouveau produit ?",
      en: 'Tell me about Bloom Bar: how did she create the visual world of a new product?',
    },
    chip: { fr: 'Bloom Bar · Direction artistique', en: 'Bloom Bar · Art direction' },
    keywords: [
      ['bloom bar', 9], ['bloombar', 9], ['bloom', 7], ['barre', 5], ['cereale', 5], ['fleur', 5], ['flower', 5],
      ['illustration 3d', 8], ['3d', 6], ['packaging', 7], ['direction artistique', 5], ['art direction', 5], ['illustrator', 4],
    ],
    answer: {
      fr: {
        standard: `### Contexte
Projet de Master 2, en 2023 : inventer une marque et la direction artistique d'un nouveau produit. Bloom Bar : des barres de céréales aux fleurs, fabriquées en France.

*Projet d'école : marque fictive.*

### Problématique
Une barre de céréales se perd au milieu de dizaines d'autres. Comment rendre désirable une saveur inattendue, la fleur, et donner envie de goûter ?

### Son rôle
Direction artistique, charte graphique et toutes les illustrations, dessinées en 3D sous Illustrator, jusqu'au packaging et à la page d'accueil.

### La solution
Un univers gourmand et joyeux, où chaque fleur devient un objet en volume que l'on a envie de croquer.

### 1 · L'univers
[[bloombar-hero]]

- **Des fleurs en relief**, brillantes comme des bonbons : la fleur n'est plus un décor, elle devient l'ingrédient.
- **Quatre couleurs franches**, rouge, rose, bleu et jaune, sur des fonds pastel : gourmand sans être enfantin.
- **Une bibliothèque de fleurs** déclinée en dizaines de variantes, pour composer chaque visuel sans jamais se répéter.

### 2 · Le packaging
[[bloombar-box]]

- **L'emballage reprend le volume des fleurs** : il semble gonflé, et le nom se lit en relief.
- **Une barre par saveur, une couleur par barre** : on reconnaît le goût avant de lire l'étiquette.

### 3 · De la structure à l'univers
La structure de la page existait ; la direction artistique lui donne son identité. Faites défiler les deux versions.

[[bloombar-screens]]

### Ce que ce projet montre
Une direction artistique complète, de l'illustration 3D au packaging : un savoir-faire visuel qui nourrit aujourd'hui ses interfaces.`,
        express: `- **Contexte** : projet de Master 2 en 2023 — inventer une marque et la direction artistique de Bloom Bar, des barres de céréales aux fleurs. Projet d'école, marque fictive.
- **Problématique** : rendre désirable une saveur inattendue, la fleur.
- **Son rôle** : direction artistique, charte et illustrations 3D sous Illustrator, jusqu'au packaging et à la page d'accueil.
- **Solution** : des fleurs en relief, quatre couleurs franches et un packaging qui reprend le même volume.`,
      },
      en: {
        standard: `### Context
Master's year 2 project, in 2023: invent a brand and the art direction for a new product. Bloom Bar: cereal bars with flowers, made in France.

*School project: fictional brand.*

### The problem
A cereal bar gets lost among dozens of others. How do you make an unexpected flavour, the flower, desirable, and make people want to taste it?

### Her role
Art direction, brand guidelines and every illustration, drawn in 3D with Illustrator, down to the packaging and the home page.

### The solution
A joyful, indulgent world where each flower becomes an object in relief you want to bite into.

### 1 · The world
[[bloombar-hero]]

- **Flowers in relief**, shiny like sweets: the flower is no longer decoration, it becomes the ingredient.
- **Four bold colours**, red, pink, blue and yellow, on pastel backgrounds: indulgent without being childish.
- **A library of flowers** in dozens of variants, to compose every visual without repeating itself.

### 2 · The packaging
[[bloombar-box]]

- **The wrapper takes on the volume of the flowers**: it looks inflated, and the name reads in relief.
- **One bar per flavour, one colour per bar**: you recognise the taste before reading the label.

### 3 · From structure to world
The page structure already existed; the art direction gives it its identity. Scroll both versions.

[[bloombar-screens]]

### What this project shows
A complete art direction, from 3D illustration to packaging: a visual craft that feeds her interfaces today.`,
        express: `- **Context**: Master's year 2 project in 2023 — invent a brand and the art direction for Bloom Bar, cereal bars with flowers. School project, fictional brand.
- **Problem**: make an unexpected flavour, the flower, desirable.
- **Her role**: art direction, brand guidelines and 3D illustrations in Illustrator, down to the packaging and the home page.
- **Solution**: flowers in relief, four bold colours and packaging with the same volume.`,
      },
    },
    anchors: true,
    followUps: ['vitalize', 'rebrand', 'grdf'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'rebrand',
    question: {
      fr: "Parle-moi du rebranding de McDonald's : comment a-t-elle repositionné une marque connue pour une autre cible ?",
      en: "Tell me about the McDonald's rebranding: how did she reposition a well-known brand for a different audience?",
    },
    chip: { fr: 'McDonald’s · Rebranding', en: 'McDonald’s · Rebranding' },
    keywords: [
      ['mcdo', 7], ['mcdonald', 7], ['mc donald', 7], ['rebranding', 6], ['rebrand', 6], ['identite visuelle', 6], ['visual identity', 6],
      ['direction artistique', 6], ['art direction', 6], ['logo', 5], ['branding', 5], ['photoshop', 5], ['illustrator', 5],
      ['montage photo', 5], ['projet perso', 5], ['projet personnel', 5], ['personal project', 5], ['burger', 4],
    ],
    answer: {
      fr: {
        standard: `### Contexte
Exercice libre de rebranding, en Master 1 à la Digital School of Paris. La consigne : reprendre une marque existante et la faire parler à une autre cible. Marque choisie : McDonald's.

*Projet d'école, sans lien avec McDonald's.*

### Problématique
Tout le monde connaît la marque : rapide, bon marché, standardisée. Comment en faire une adresse plus haut de gamme, plus saine et toujours familiale, sans la rendre méconnaissable ?

### Son rôle
Direction artistique complète : logo, palette, typographies, messages, montages photo (Photoshop, Illustrator), maquettes ordinateur et mobile (Figma).

### La solution
Un McDonald's « rétro chic » : garder les codes que l'on reconnaît, changer ce qu'ils racontent.

### 1 · La cible
Des familles urbaines, des parents de 30 à 45 ans attentifs à ce qu'ils mangent. Ils veulent un vrai moment à table avec leurs enfants : de bons produits, un cadre confortable, et le plaisir du burger intact.

### 2 · Le logo
[[rebrand-logo]]

- **Des cercles à la place des arches** : un clin d'œil aux cercles des Looney Tunes, pour garder le côté famille dans une identité rétro.
- **Le rouge et le jaune restent**, adoucis : on reconnaît la marque. **Le vert s'ajoute**, pour le frais.
- **Deux typographies** : un « Mc » à empattements, élégant ; un « Donald's » rond et gras, convivial. Le haut de gamme et la famille dans le même logo.

### 3 · L'univers photo
[[rebrand-hero]]

- **Le burger devient un objet précieux** : posé dans des blocs de verre coloré, par montage photo.
- **Un burger vert à côté du classique** : le choix existe, le plaisir reste. C'est le sens de « I prefer that ».
- **Un décor de restaurant**, pas de fast-food : banquettes de velours rouge, laiton, lumière douce.

### 4 · Les messages
- **« Le confort McDonald's »** : on s'installe, on ne fait plus que passer.
- **« Faites la connaissance de nos producteurs »** et **« La transparence »** : l'origine des produits devient un argument.
- **« Le McDonald's intemporel »** : la marque assume son histoire.
- **Commander, récupérer, savourer** : le parcours reste simple, en trois étapes.

### 5 · Les écrans
Ordinateur et mobile : faites défiler chaque maquette.

[[rebrand-screens]]

### Ce que ce projet montre
Une identité construite de bout en bout, du logo aux écrans : la direction artistique au service d'un positionnement.`,
        express: `- **Contexte** : exercice libre de rebranding en Master 1 — faire parler McDonald's à une autre cible. Projet d'école, sans lien avec la marque.
- **Problématique** : rendre la marque plus haut de gamme, plus saine et familiale, sans la rendre méconnaissable.
- **Son rôle** : direction artistique complète — logo, palette, typographies, messages, montages photo, maquettes.
- **Solution** : un McDonald's « rétro chic », du logo aux écrans ordinateur et mobile.`,
      },
      en: {
        standard: `### Context
A free rebranding exercise, in the first year of a Master's at the Digital School of Paris. The brief: take an existing brand and make it speak to a different audience. Brand chosen: McDonald's.

*School project, not affiliated with McDonald's.*

### The problem
Everyone knows the brand: fast, cheap, standardised. How do you turn it into a more premium, healthier and still family-friendly place, without making it unrecognisable?

### Her role
Full art direction: logo, palette, typography, messages, photo compositing (Photoshop, Illustrator), desktop and mobile mockups (Figma).

### The solution
A “retro chic” McDonald's: keep the codes people recognise, change what they say.

### 1 · The audience
Urban families, parents aged 30 to 45 who care about what they eat. They want a real moment at the table with their children: good produce, a comfortable setting, and the pleasure of the burger intact.

### 2 · The logo
[[rebrand-logo]]

- **Circles instead of the arches**: a nod to the Looney Tunes rings, to keep the family feel within a retro identity.
- **Red and yellow stay**, softened: the brand is recognisable. **Green is added**, for freshness.
- **Two typefaces**: an elegant serif “Mc”; a round, bold, friendly “Donald's”. Premium and family in the same logo.

### 3 · The photographic world
[[rebrand-hero]]

- **The burger becomes a precious object**: set inside blocks of coloured glass, through photo compositing.
- **A green burger next to the classic one**: the choice exists, the pleasure stays. That is the meaning of “I prefer that”.
- **A restaurant setting**, not a fast-food one: red velvet banquettes, brass, soft light.

### 4 · The messages
- **“Le confort McDonald's”** (comfort): you settle in instead of passing through.
- **“Meet our producers”** and **“Transparency”**: where the produce comes from becomes an argument.
- **“The timeless McDonald's”**: the brand owns its history.
- **Order, collect, enjoy**: the journey stays simple, in three steps.

### 5 · The screens
Desktop and mobile: scroll each mockup.

[[rebrand-screens]]

### What this project shows
An identity built end to end, from the logo to the screens: art direction in the service of a positioning.`,
        express: `- **Context**: a free rebranding exercise in Master's year 1 — making McDonald's speak to a different audience. School project, not affiliated with the brand.
- **Problem**: make the brand more premium, healthier and family-friendly, without making it unrecognisable.
- **Her role**: full art direction — logo, palette, typography, messages, photo compositing, mockups.
- **Solution**: a “retro chic” McDonald's, from the logo to the desktop and mobile screens.`,
      },
    },
    anchors: true,
    followUps: ['vitalize', 'portfoliods', 'grdf'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'portfoliods',
    question: {
      fr: 'Peut-on voir le Design System de ce portfolio ?',
      en: 'Can I see this portfolio’s Design System?',
    },
    chip: { fr: 'Portfolio · Design System automatisé', en: 'Portfolio · AI-automated Design System' },
    keywords: [
      ['design system du portfolio', 9], ['design system de ce portfolio', 9], ['design system du site', 9],
      ['design system de ce site', 9], ['design system of this portfolio', 9], ['portfolio design system', 9],
      ['design system of this site', 9], ['design system', 3], ['regles de design', 4], ['design rules', 4],
    ],
    answer: {
      fr: {
        standard: `Oui : ce portfolio a son propre Design System, et il existe sous deux formes qui disent la même chose.

### Pour vous : une page à parcourir
- **Fondations** : accessibilité, mise en page, contenu.
- **Styles** : couleur, typographie, formes, élévation, icônes.
- **Composants** : rangés par fonction, chacun avec son exemple, son anatomie et ses états.

### Pour l'IA : un skill
Un skill est un dossier d'instructions qu'un agent IA charge de lui-même quand la tâche s'y prête — ici, dès qu'on lui demande de créer ou de modifier un écran. Il contient :

- **un fichier principal** : les quatre règles non négociables, chacune avec sa raison ;
- **trois fichiers de référence**, ouverts seulement au besoin : fondations, styles, composants ;
- **un script** que l'agent lance avant de livrer, pour vérifier ce qui peut l'être automatiquement (couleurs en dur, ombres, majuscules).

Un Design System classique documente pour des personnes. Un skill rend ces mêmes règles **applicables par une IA**, et vérifiables.

### Une seule source
La page n'a pas de contenu à elle : elle affiche directement les fichiers du skill. Ce que vous lisez est ce que l'IA applique.

### Ce que ça change
Même demande confiée à deux agents, sur un projet vide : ==7 critères sur 7== respectés avec le skill, ==3 sur 7== sans. Anne-Sophie l'a conçu et testé avec Claude Code, en corrigeant la règle après chaque test.`,
        express: `- **Le Design System de ce portfolio** se parcourt en trois niveaux : fondations, styles, composants.
- **Un skill** : les mêmes règles, dans un dossier qu'un agent IA charge avant de créer ou de modifier un écran, avec un script de vérification.
- **Une seule source** : la page affiche les fichiers du skill.
- **Résultat du test** : ==7 critères sur 7== avec le skill, ==3 sur 7== sans.`,
      },
      en: {
        standard: `Yes: this portfolio has its own Design System, and it exists in two forms that say the same thing.

### For you: a page to browse
- **Foundations**: accessibility, layout, content.
- **Styles**: colour, typography, shape, elevation, icons.
- **Components**: grouped by function, each with its example, anatomy and states.

### For the AI: a skill
A skill is a folder of instructions that an AI agent loads on its own when the task calls for it — here, whenever it is asked to create or change a screen. It contains:

- **a main file**: the four non-negotiable rules, each with its reason;
- **three reference files**, opened only when needed: foundations, styles, components;
- **a script** the agent runs before delivering, to check what can be checked automatically (hard-coded colours, shadows, capitals).

A classic Design System documents for people. A skill makes those same rules **applicable by an AI**, and verifiable.

### A single source
The page has no content of its own: it displays the skill files directly. What you read is what the AI applies.

### What it changes
The same request given to two agents, on an empty project: ==7 criteria out of 7== met with the skill, ==3 out of 7== without. Anne-Sophie designed and tested it with Claude Code, fixing the rule after each test.`,
        express: `- **This portfolio’s Design System** is browsed on three levels: foundations, styles, components.
- **A skill**: the same rules, in a folder an AI agent loads before creating or changing a screen, with a check script.
- **A single source**: the page displays the skill files.
- **Test result**: ==7 criteria out of 7== with the skill, ==3 out of 7== without.`,
      },
    },
    attachment: 'ds',
    followUps: ['bnp', 'designsystem', 'ai'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'education',
    question: { fr: 'Quelle est sa formation ?', en: 'What is her educational background?' },
    chip: { fr: 'Sa formation', en: 'Her education' },
    keywords: [
      ['formation', 5], ['diplome', 5], ['etudes', 3], ['master', 5], ['bachelor', 5], ['ecole', 4], ['school', 4],
      ['degree', 5], ['education', 5], ['studied', 4], ['etudie', 4], ['universit', 4], ['manaa', 6],
      ['chardon savard', 6], ['digital school', 6], ['bac', 3], ['cursus', 5], ['academi', 4],
    ],
    answer: {
      fr: {
        standard: `Une formation qui relie **arts appliqués, mode et design numérique**.

| Diplôme | École | Période |
|---|---|---|
| **Master Design UX/UI & Gestion de projet** | Digital School of Paris | 2021 – 2023 |
| **Bachelor Design de Mode & Textile** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Arts Appliqués** | IMAD, Caen | — |

Ce socle créatif nourrit aujourd'hui son travail de Product Designer : sens du détail, culture visuelle et rigueur de gestion de projet.`,
        express: `- **Master** Design UX/UI & Gestion de projet — Digital School of Paris (2021 – 2023).
- **Bachelor** Design de Mode & Textile — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Arts Appliqués — IMAD, Caen.`,
      },
      en: {
        standard: `An education linking **applied arts, fashion and digital design**.

| Degree | School | Period |
|---|---|---|
| **Master's in UX/UI Design & Project Management** | Digital School of Paris | 2021 – 2023 |
| **Bachelor in Fashion & Textile Design** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Applied Arts foundation year** | IMAD, Caen | — |

This creative foundation feeds her work as a Product Designer today: attention to detail, visual culture and project-management rigour.`,
        express: `- **Master's** in UX/UI Design & Project Management — Digital School of Paris (2021 – 2023).
- **Bachelor** in Fashion & Textile Design — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Applied Arts — IMAD, Caen.`,
      },
    },
    followUps: ['background', 'languages', 'skills'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'languages',
    question: { fr: 'Quelles langues parle-t-elle ?', en: 'Which languages does she speak?' },
    chip: { fr: 'Ses langues', en: 'Her languages' },
    keywords: [
      ['langue', 5], ['language', 5], ['anglais', 5], ['english', 5], ['espagnol', 5], ['spanish', 5],
      ['bilingue', 5], ['bilingual', 5], ['parle t elle', 4], ['speak', 4], ['francais', 3], ['french', 3],
      ['international', 3],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie travaille en **français** et en **anglais**.

| Langue | Niveau |
|---|---|
| Français | Natif |
| Anglais | Courant |
| Espagnol | B1 |`,
        express: `- **Français** : natif.
- **Anglais** : courant.
- **Espagnol** : B1.`,
      },
      en: {
        standard: `Anne-Sophie works in **French** and **English**.

| Language | Level |
|---|---|
| French | Native |
| English | Fluent |
| Spanish | B1 |`,
        express: `- **French**: native.
- **English**: fluent.
- **Spanish**: B1.`,
      },
    },
    followUps: ['education', 'availability', 'profile'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'softskills',
    question: {
      fr: 'Quels sont ses soft skills et ses engagements personnels ?',
      en: 'What are her soft skills and personal commitments?',
    },
    chip: { fr: 'Soft skills & engagements', en: 'Soft skills & commitments' },
    keywords: [
      ['soft skill', 7], ['softskill', 7], ['personnalite', 5], ['personality', 5], ['qualite', 4], ['hobb', 5],
      ['loisir', 5], ['passion', 4], ['benevol', 6], ['volunteer', 6], ['piano', 6], ['course a pied', 6],
      ['running', 5], ['engagement', 4], ['valeur', 3], ['values', 4], ['interet', 4], ['interests', 4],
      ['humain', 4], ['human', 3], ['collabor', 4], ['equipe', 3], ['team', 3], ['facilit', 4], ['communic', 4],
      ['caractere', 4], ['sport', 4], ['musique', 4], ['music', 4], ['en dehors', 4], ['outside work', 5],
      ['leadership', 4], ['manag', 3], ['travaille t elle', 3],
    ],
    answer: {
      fr: {
        standard: `Les soft skills d'Anne-Sophie se lisent dans ses missions autant que dans ses engagements.

### Dans le travail
- **Facilitation** : elle anime des ateliers de co-création (Caisse des Dépôts, Kering).
- **Esprit transverse** : coordination inter-équipes et co-construction de process entre les pôles IA et UX chez BNP Paribas CIB.
- **Écoute** : entretiens et tests utilisateurs au cœur de chaque projet.
- **Autonomie de bout en bout** : pilotage de projets digitaux complets chez Eden Park.

### En dehors
- **Bénévolat** — accompagnement à l'inclusion sociale et orientation administrative pour les jeunes de l'Aide Sociale à l'Enfance.
- **Piano classique** — plus de 5 ans de pratique : rigueur et régularité.
- **Course à pied** — endurance et constance.`,
        express: `- **Facilitation & écoute** : ateliers de co-création, entretiens et tests utilisateurs.
- **Esprit transverse** : coordination inter-équipes, process IA × UX.
- **Engagement** : bénévolat auprès des jeunes de l'Aide Sociale à l'Enfance.
- **Rigueur** : piano classique (+5 ans), course à pied.`,
      },
      en: {
        standard: `Anne-Sophie's soft skills show in her engagements as much as in her commitments.

### At work
- **Facilitation**: she runs co-creation workshops (Caisse des Dépôts, Kering).
- **Cross-functional mindset**: cross-team coordination and co-building processes between the AI and UX departments at BNP Paribas CIB.
- **Listening**: user interviews and testing at the heart of every project.
- **End-to-end autonomy**: managed complete digital projects at Eden Park.

### Outside work
- **Volunteering** — supporting social inclusion and administrative guidance for young people in child welfare care (Aide Sociale à l'Enfance).
- **Classical piano** — over 5 years of practice: rigour and consistency.
- **Running** — endurance and steadiness.`,
        express: `- **Facilitation & listening**: co-creation workshops, user interviews and testing.
- **Cross-functional mindset**: cross-team coordination, AI × UX processes.
- **Commitment**: volunteering with young people in child welfare care.
- **Rigour**: classical piano (5+ years), running.`,
      },
    },
    followUps: ['search', 'covenant', 'background'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'salary',
    question: { fr: 'Quelles sont ses prétentions salariales ?', en: 'What are her salary expectations?' },
    chip: { fr: 'Rémunération', en: 'Compensation' },
    keywords: [
      ['salair', 6], ['remuner', 6], ['pretention', 6], ['tjm', 6], ['tarif', 5], ['salary', 6], ['compensation', 6],
      ['package', 5], ['pay', 4], ['day rate', 6], ['daily rate', 6], ['rate', 3], ['combien', 3], ['budget', 4],
      ['fourchette', 5], ['k€', 4], ['brut', 4], ['wage', 5], ['how much', 4],
    ],
    answer: {
      fr: {
        standard: `La rémunération n'est pas un sujet que je peux traiter à sa place : elle dépend du **périmètre du poste**, du **niveau de responsabilité** et du **contexte de l'équipe**.

Anne-Sophie en parle volontiers de vive voix. Le plus simple : lui écrire en précisant le poste et votre fourchette, elle vous répondra directement.`,
        express: `- **Rémunération** : à discuter directement avec Anne-Sophie.
- **Dépend de** : périmètre, responsabilités, contexte d'équipe.
- **Prochaine étape** : un email avec le poste et votre fourchette.`,
      },
      en: {
        standard: `Compensation isn't something I can settle on her behalf: it depends on the **scope of the role**, the **level of responsibility** and the **team context**.

Anne-Sophie is happy to discuss it directly. The simplest route: email her with the role and your range, and she will get back to you.`,
        express: `- **Compensation**: to be discussed directly with Anne-Sophie.
- **Depends on**: scope, responsibilities, team context.
- **Next step**: an email with the role and your range.`,
      },
    },
    followUps: ['search', 'availability', 'profile'],
    actions: ['email'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'availability',
    question: {
      fr: 'Où est-elle basée et quelle est sa disponibilité ?',
      en: 'Where is she based and what is her availability?',
    },
    chip: { fr: 'Localisation & disponibilité', en: 'Location & availability' },
    keywords: [
      ['dispon', 6], ['availab', 6], ['mobilit', 6], ['remote', 5], ['teletravail', 6], ['preavis', 6],
      ['notice', 5], ['localis', 5], ['location', 4], ['paris', 4], ['habite', 4], ['based', 4], ['relocat', 5],
      ['freelance', 5], ['cdi', 5], ['contrat', 4], ['contract', 4], ['quand', 2], ['when can', 4], ['start date', 5],
      ['commencer', 4], ['hybride', 5], ['hybrid', 5], ['demenag', 5], ['deplacement', 4], ['ville', 3], ['where', 2],
      ['ou est', 3], ['full time', 4], ['temps plein', 4],
    ],
    answer: {
      fr: {
        standard: `### Localisation
Anne-Sophie est basée à **Paris**, où elle a mené l'ensemble de ses missions.

### Situation actuelle
Elle est en poste chez **mc2i** depuis janvier 2024, actuellement en mission chez BNP Paribas CIB.

### Disponibilité, mobilité, télétravail
Ces points dépendent du projet et se discutent au cas par cas. Le plus fiable est de lui poser la question directement : elle vous répondra avec précision.`,
        express: `- **Basée à** : Paris.
- **Situation** : en poste chez mc2i, mission BNP Paribas CIB.
- **Langues de travail** : français et anglais courant.
- **Disponibilité & télétravail** : à préciser avec elle par email.`,
      },
      en: {
        standard: `### Location
Anne-Sophie is based in **Paris**, where she has carried out all her engagements.

### Current situation
She has been at **mc2i** since January 2024, currently on assignment at BNP Paribas CIB.

### Availability, mobility, remote work
These depend on the project and are discussed case by case. The most reliable way is to ask her directly: she will give you a precise answer.`,
        express: `- **Based in**: Paris.
- **Situation**: employed at mc2i, on assignment at BNP Paribas CIB.
- **Working languages**: French and fluent English.
- **Availability & remote**: to be confirmed with her by email.`,
      },
    },
    followUps: ['search', 'languages', 'profile'],
    actions: ['email'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'contact',
    question: { fr: 'Comment contacter Anne-Sophie ?', en: 'How can I contact Anne-Sophie?' },
    chip: { fr: 'La contacter', en: 'Contact her' },
    keywords: [
      ['contact', 6], ['email', 5], ['mail', 5], ['joindre', 5], ['telephone', 5], ['phone', 5], ['linkedin', 5],
      ['appeler', 5], ['call', 3], ['reach', 4], ['ecrire', 4], ['rendez vous', 5], ['meeting', 4], ['entretien', 4],
      ['interview', 4], ['rencontrer', 5], ['meet', 4], ['numero', 4], ['coordonnees', 6], ['get in touch', 6],
    ],
    answer: {
      fr: {
        standard: `Anne-Sophie répond volontiers aux prises de contact.

| Canal | Coordonnées |
|---|---|
| **Email** | [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com) |
| **Téléphone** | [06 30 47 84 39](tel:+33630478439) |
| **LinkedIn** | [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy) |

Le bouton ci-dessous ouvre un email pré-rempli avec l'objet de votre choix.`,
        express: `- **Email** : [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com)
- **Téléphone** : [06 30 47 84 39](tel:+33630478439)
- **LinkedIn** : [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy)`,
      },
      en: {
        standard: `Anne-Sophie is happy to hear from you.

| Channel | Details |
|---|---|
| **Email** | [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com) |
| **Phone** | [+33 6 30 47 84 39](tel:+33630478439) |
| **LinkedIn** | [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy) |

The button below opens a pre-filled email with the subject of your choice.`,
        express: `- **Email**: [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com)
- **Phone**: [+33 6 30 47 84 39](tel:+33630478439)
- **LinkedIn**: [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy)`,
      },
    },
    followUps: ['search', 'profile', 'projects'],
    actions: ['email', 'cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cv',
    question: { fr: 'Puis-je voir son CV ?', en: 'Can I see her CV?' },
    chip: { fr: 'Voir son CV', en: 'See her CV' },
    keywords: [
      ['cv', 6], ['curriculum', 6], ['telecharg', 5], ['download', 5], ['pdf', 5], ['her resume', 5],
      ['resume', 2],
    ],
    answer: {
      fr: {
        standard: `Le CV complet d'Anne-Sophie est disponible ici : une vue structurée pour le parcourir en 10 secondes, et un bouton pour le **télécharger en PDF**.

### L'essentiel
- **mc2i** (depuis janv. 2024) — BNP Paribas CIB, La Caisse des Dépôts, GRDF.
- **Groupe Kering** (2022 – 2023) — app Privilege Card, ==40 000 utilisateurs==.
- **Eden Park** (2021 – 2022) — ==+20 % de ventes e-commerce==.
- **Master** Design UX/UI & Gestion de projet, Digital School of Paris.`,
        express: `- **Aujourd'hui** : Product Designer chez mc2i, mission BNP Paribas CIB.
- **Avant** : Groupe Kering, Eden Park, Balmain, Indress.
- **Formation** : Master Design UX/UI & Gestion de projet.
- **CV complet** : bouton ci-dessous.`,
      },
      en: {
        standard: `Anne-Sophie's full CV is available here: a structured view you can scan in 10 seconds, and a button to **download it as a PDF**.

### The essentials
- **mc2i** (since Jan 2024) — BNP Paribas CIB, La Caisse des Dépôts, GRDF.
- **Kering Group** (2022 – 2023) — Privilege Card app, ==40,000 users==.
- **Eden Park** (2021 – 2022) — ==+20% e-commerce sales==.
- **Master's** in UX/UI Design & Project Management, Digital School of Paris.`,
        express: `- **Today**: Product Designer at mc2i, on assignment at BNP Paribas CIB.
- **Before**: Kering Group, Eden Park, Balmain, Indress.
- **Education**: Master's in UX/UI Design & Project Management.
- **Full CV**: button below.`,
      },
    },
    followUps: ['profile', 'impact', 'contact'],
    actions: ['cv', 'email'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'projects',
    question: { fr: 'Quels sont ses principaux projets ?', en: 'What are her main projects?' },
    chip: { fr: 'Ses projets', en: 'Her projects' },
    keywords: [
      ['projet', 5], ['project', 5], ['etude de cas', 6], ['etudes de cas', 6], ['case stud', 6], ['portfolio', 5],
      ['realisation', 5], ['mission', 4], ['client', 4], ['travaux', 4], ['her work', 5], ['reference', 4],
    ],
    answer: {
      fr: {
        standard: `Trois missions en entreprise, puis des projets personnels, à explorer dans la barre latérale ou via les questions ci-dessous.

### Missions

| Projet | Sujet | Impact |
|---|---|---|
| **BNP Paribas CIB** | Cadrer une équipe UX augmentée par l'IA | ==+5 modules sur 17== · ==~1 500 utilisateurs== |
| **Banque d'investissement** | Suivi des clauses de crédit assisté par l'IA | Parcours avant / après · prototype navigable |
| **GRDF** | Refonte éco-conçue justdecarb.grdf.fr | ==Note C EcoIndex== + RGAA |

### Projets personnels
- **Portfolio · Design System automatisé avec l'IA** (2026) : le Design System de ce portfolio, écrit comme un skill que l'IA applique.
- **Vitaliz · Des personas à l'application mobile** (2023, Master 2) : étude UX complète d'une application de bracelet connecté, des personas au prototype.
- **Bloom Bar · Direction artistique et illustration 3D** (2023, Master 2) : direction artistique et illustration 3D d'une marque de barres aux fleurs.
- **McDonald's · Rebranding pour une nouvelle cible** (2021, Master 1) : repositionner une marque connue pour une nouvelle cible.`,
        express: `- **BNP Paribas CIB** : équipe UX augmentée par l'IA — ==+5 modules sur 17==.
- **Clauses de crédit** : suivi assisté par l'IA, parcours avant / après, prototype navigable.
- **GRDF** : refonte éco-conçue — ==Note C EcoIndex== + RGAA.
- **Projets personnels** : Design System du portfolio, Vitaliz, Bloom Bar, McDonald's.`,
      },
      en: {
        standard: `Three client missions, then personal projects, to explore in the sidebar or through the questions below.

### Missions

| Project | Topic | Impact |
|---|---|---|
| **BNP Paribas CIB** | Framing an AI-augmented UX team | ==+5 of 17 modules== · ==~1,500 users== |
| **Investment bank** | AI-assisted monitoring of loan clauses | Before / after journey · navigable prototype |
| **GRDF** | Eco-designed redesign of justdecarb.grdf.fr | ==EcoIndex grade C== + RGAA |

### Personal projects
- **Portfolio · AI-automated Design System** (2026): this portfolio's Design System, written as a skill that AI applies.
- **Vitaliz · From personas to the mobile app** (2023, Master's year 2): a full UX study of a connected wristband app, from personas to prototype.
- **Bloom Bar · Art direction and 3D illustration** (2023, Master's year 2): art direction and 3D illustration for a brand of flower bars.
- **McDonald's · Rebranding for a new audience** (2021, Master's year 1): repositioning a well-known brand for a new audience.`,
        express: `- **BNP Paribas CIB**: AI-augmented UX team — ==+5 of 17 modules==.
- **Loan clauses**: AI-assisted monitoring, before / after journey, navigable prototype.
- **GRDF**: eco-designed redesign — ==EcoIndex grade C== + RGAA.
- **Personal projects**: portfolio Design System, Vitaliz, Bloom Bar, McDonald's.`,
      },
    },
    followUps: ['bnp', 'covenant', 'grdf', 'vitalize'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'greeting',
    question: { fr: 'Bonjour !', en: 'Hello!' },
    keywords: [
      ['bonjour', 3], ['hello', 3], ['salut', 3], ['hi', 3], ['hey', 3], ['coucou', 3], ['bonsoir', 3],
      ['good morning', 3], ['ca va', 3], ['how are you', 3],
    ],
    answer: {
      fr: {
        standard: `Bonjour ! Je suis l'assistant portfolio d'**Anne-Sophie Leroy**, Product Designer spécialisée en UX/UI, Design Ops et workflows IA.

Je peux vous parler de son parcours, de ses projets (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), de ses compétences ou de sa façon d'intégrer l'IA dans le design. Par où souhaitez-vous commencer ?`,
        express: `Bonjour ! Posez-moi une question sur **Anne-Sophie Leroy** : profil, projets, compétences, IA & Design Ops.`,
      },
      en: {
        standard: `Hello! I'm the portfolio assistant of **Anne-Sophie Leroy**, a Product Designer specialising in UX/UI, Design Ops and AI workflows.

I can tell you about her background, her projects (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), her skills or how she brings AI into design. Where would you like to start?`,
        express: `Hello! Ask me anything about **Anne-Sophie Leroy**: profile, projects, skills, AI & Design Ops.`,
      },
    },
    followUps: ['profile', 'projects', 'ai'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'thanks',
    question: { fr: 'Merci !', en: 'Thank you!' },
    keywords: [
      ['merci', 5], ['thanks', 5], ['thank', 5], ['super', 2], ['parfait', 3], ['perfect', 3], ['great', 2],
      ['au revoir', 4], ['bye', 4],
    ],
    answer: {
      fr: {
        standard: `Avec plaisir ! Si le profil d'Anne-Sophie vous intéresse, le plus simple est de lui écrire directement — elle sera ravie d'échanger.`,
        express: `Avec plaisir ! Pour aller plus loin, écrivez directement à Anne-Sophie.`,
      },
      en: {
        standard: `You're welcome! If Anne-Sophie's profile is a match, the simplest next step is to write to her directly — she will be glad to talk.`,
        express: `You're welcome! To go further, write to Anne-Sophie directly.`,
      },
    },
    actions: ['email', 'cv'],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'fallback',
    question: { fr: '', en: '' },
    keywords: [],
    answer: {
      fr: {
        standard: `Je n'ai pas d'information fiable sur ce point, et je préfère ne rien inventer sur Anne-Sophie.

### Ce que je sais faire
- **Présenter son profil** et ce qui la différencie.
- **Détailler ses projets** : BNP Paribas CIB, Groupe Kering, GRDF, Caisse des Dépôts.
- **Expliquer sa pratique** : Design Ops, Design System, *AI Skills*, *vibecoding*.
- **Répondre aux questions pratiques** : formation, langues, outils, localisation.

Astuce : tapez \`/\` pour les commandes rapides (\`/cv\`, \`/projets\`, \`/skills\`, \`/contact\`, \`/stack\`). Et pour toute question précise, Anne-Sophie vous répondra directement.`,
        express: `Je n'ai pas cette information. Essayez une question sur son **profil**, ses **projets**, ses **compétences** ou l'**IA** — ou contactez-la directement.`,
      },
      en: {
        standard: `I don't have reliable information on that, and I'd rather not make anything up about Anne-Sophie.

### What I can do
- **Present her profile** and what sets her apart.
- **Detail her projects**: BNP Paribas CIB, Kering Group, GRDF, Caisse des Dépôts.
- **Explain her practice**: Design Ops, Design System, *AI Skills*, *vibecoding*.
- **Answer practical questions**: education, languages, tools, location.

Tip: type \`/\` for quick commands (\`/cv\`, \`/projects\`, \`/skills\`, \`/contact\`, \`/stack\`). And for any specific question, Anne-Sophie will answer you directly.`,
        express: `I don't have that information. Try a question about her **profile**, **projects**, **skills** or **AI** — or contact her directly.`,
      },
    },
    followUps: ['profile', 'projects', 'ai'],
    actions: ['cv', 'email'],
  },
];

export const intentsById: Record<string, Intent> = Object.fromEntries(intents.map((i) => [i.id, i]));

export function getIntent(id: string): Intent {
  return intentsById[id] ?? intentsById.fallback;
}

/** Texte de réponse selon la langue et le « modèle » (tonalité) sélectionné. */
export function getAnswerText(intentId: string, lang: Lang, model: ModelId): string {
  const a = getIntent(intentId).answer[lang];
  if (model === 'express') return a.express;
  if (model === 'deepdive' && a.deep) return `${a.standard}\n\n${a.deep}`;
  return a.standard;
}
