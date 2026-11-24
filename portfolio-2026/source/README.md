# Portfolio interactif — Anne-Sophie Leroy

Portfolio conversationnel inspiré de l'ergonomie de Claude / Claude Code.
Product Designer — UX/UI, Design Ops & AI Workflows.

100 % statique et autonome : aucune clé API, aucune donnée envoyée. Les réponses viennent d'une base de connaissances TypeScript bilingue (FR / EN) et d'un moteur de correspondance par mots-clés.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

## Déployer sur GitHub Pages (une commande)

Prérequis : le projet est poussé sur un dépôt GitHub (`git remote add origin …`).

```bash
npm run deploy
```

La commande compile le site puis publie le dossier `dist/` sur la branche `gh-pages`.
Première fois uniquement : dans GitHub, **Settings → Pages → Source : Deploy from a branch → `gh-pages` / root**.

Le site est alors disponible sur `https://<utilisateur>.github.io/<dépôt>/`.
`vite.config.ts` utilise `base: './'` : aucun réglage de chemin n'est nécessaire, quel que soit le nom du dépôt.

## Ajouter le CV en PDF

Déposer le fichier dans `public/CV-Anne-Sophie-Leroy.pdf` (nom exact).

- Fichier présent : le bouton **Télécharger en PDF** le télécharge.
- Fichier absent : le bouton ouvre l'impression du navigateur avec une mise en page dédiée (`@media print`) — choisir « Enregistrer au format PDF ».

## Modifier le contenu

| Quoi | Où |
|---|---|
| Réponses de l'assistant, mots-clés, relances | `src/data/knowledgeBase.ts` |
| Données du CV, projets de la sidebar, contact | `src/data/profile.ts` |
| Textes de l'interface (FR / EN) | `src/data/i18n.ts` |
| Exemple de `SKILL.md` anonymisé | `src/data/skillExample.ts` |
| Parcours utilisateur du cas Covenant monitoring | `src/data/covenantFlow.ts` |
| Page Design System : règles (français) | `.claude/skills/asl-design-system/` — la page lit ces fichiers |
| Page Design System : traduction anglaise | `src/data/design-system-en/`, puis `npm run check:ds` |
| Exemples vivants de la page Design System | `src/components/DesignSystem.tsx` |
| Prototype Covenant navigable (copie anonymisée) | `public/prototypes/covenant-monitoring.html` |
| Couleurs, ombres (Design Tokens light / dark) | `src/index.css` |

### Ajouter une réponse

Dans `knowledgeBase.ts`, ajouter une intention :

```ts
{
  id: 'mon-sujet',
  question: { fr: '…', en: '…' },
  keywords: [['motcle', 5], ['expression exacte', 4]], // sans accent, en minuscules
  answer: {
    fr: { standard: '…', express: '…', deep: '…' },
    en: { standard: '…', express: '…', deep: '…' },
  },
  followUps: ['profile', 'ai'],
  actions: ['cv', 'email'],
}
```

- `express` → ASL Court, `standard` → ASL Complet, `standard + deep` → ASL Détaillé.
- Markdown pris en charge : titres `###`, listes, tableaux, blocs de code, `**gras**`, `*italique*`, liens, et `==badge d'impact==` pour les chiffres clés.
- Un mot-clé d'au moins 4 lettres fonctionne comme une racine (`recrut` reconnaît « recrutement ») ; une faute de frappe est tolérée sur les mots longs.

## Architecture

```
src/
├── components/   Sidebar, TopBar, WelcomeScreen, ChatMessage, Markdown,
│                 PromptInput, SkillPreview, CVPage, DesignSystem
├── data/         knowledgeBase, profile, i18n, skillExample
├── hooks/        useChat (conversation + streaming), useTheme, useLang
├── lib/          matcher (normalisation, scoring, slash commands)
└── types/
```

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · lucide-react · police Outfit (Google Fonts).
