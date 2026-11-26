# Styles

Couleur, typographie, formes, élévation, icônes. La source de vérité des valeurs reste `src/index.css` :
ce fichier dit à quoi sert chaque style, il ne recopie pas les valeurs.

## Couleur

Chaque couleur a un seul sens. Tout passe par des tokens, qui changent de valeur selon le thème.

### Surfaces et texte

<!-- exemple: neutrals -->

| Classe | Usage |
|---|---|
| `bg-bg` | Fond de la zone principale |
| `bg-sidebar` | Fond du menu latéral |
| `bg-elevated` | Carte, champ, menu : ce qui est posé sur le fond |
| `bg-surface-2` | Survol, élément choisi, bouton neutre |
| `text-ink` | Texte principal |
| `text-muted` | Texte secondaire, légende |
| `bg-ink` + `text-bg` | Neutre inversé : option choisie, bouton Stop. Jamais un état de survol. |
| `border-line` | Contour courant des cartes et des champs |
| `border-rule` | Trait marqué : filet de titre, bouton en contour |

Les fonds sont neutres et unis : pas de dégradé, pas de texture, pas de fond translucide, pas de grande surface colorée.

### Thème sombre

Le thème sombre suit les mêmes tokens, avec des valeurs à part dans `src/index.css`.

- Les fonds sont des gris presque neutres, à peine chauds : jamais de brun ni de bordeaux en grande surface. La couleur reste aux éléments qui portent un sens (olive, bordeaux, turquoise, orange, vermillon).
- Le texte est un blanc cassé à peine crème, pas le crème de la palette : sur un fond sombre, un texte trop coloré se lit moins bien et ajoute une couleur de plus.
- Les couleurs porteuses de sens s'éclaircissent pour garder leur contraste ; elles gardent le même sens.

### Couleurs porteuses de sens

<!-- exemple: meanings -->

| Couleur | Sens | Classes |
|---|---|---|
| Olive plein | Action principale | `bg-olive` + `text-olive-fg` |
| Olive pâle | Élément positif : tag, résultat | `bg-olive-tint` + `text-olive-text` |
| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | `bg-accent` + `text-accent-fg`, `bg-accent-tint` + `text-accent-text` |
| Turquoise | Ce qui vient de l'IA | `bg-[var(--ai-tint)]` + `text-[var(--ai-text)]` |
| Orange | Point de friction, alerte | `bg-[var(--warn-tint)]` + `text-[var(--warn-text)]` |
| Vermillon | Ponctuation : puce de liste, curseur, petite flèche | `bg-vermillion`, `text-vermillion` |

### Tokens réservés

- `bg-bubble` + `text-bubble-fg` : la bulle du message envoyé.
- `bg-[var(--overlay)]` : le voile derrière le tiroir du menu, sur petit écran.
- `code-*` : uniquement les blocs de code et l'aperçu de fichiers. Ils restent sombres dans les deux thèmes.
- `hover:bg-accent-hover` : le survol du bouton d'envoi.

### À faire

- Utiliser un token pour chaque couleur.
- Rester neutre si aucun sens ne correspond. Les chiffres restent neutres.

### À éviter

- Écrire une couleur en dur, ou utiliser le préfixe `dark:`.
- Détourner une couleur parce qu'elle « irait bien ».
- Un bouton en olive pâle, un tag en olive plein, un texte en vermillon.

## Typographie

Deux polices, pas une de plus : Poppins pour les titres, Outfit pour tout le reste.

### Échelle

<!-- exemple: typescale -->

| Usage | Classes |
|---|---|
| Titre d'accueil | réservé à l'écran d'accueil |
| Chiffre clé | `font-display text-[1.7rem] font-semibold` |
| Titre de section | `font-display text-[1.2rem] font-semibold` |
| Texte courant | `text-[15px]` ou `text-sm` |
| Petit libellé | `eyebrow` |
| Légende, détail | `text-xs`, `text-[12.5px]` |

### Règles

- Titres : classe `font-display`, en `font-semibold`.
- Texte long en `font-light` ; ce qui doit ressortir en `font-medium` ou `font-semibold`.
- Hiérarchiser par la graisse, la taille et la couleur, jamais par des capitales (voir `fondations.md`, « Contenu »).

## Formes

Des formes arrondies partout, sans angle vif.

### Trois rayons

<!-- exemple: shapes -->

- Boutons, tags, pastilles : `rounded-full`.
- Cartes, zone de saisie : `rounded-3xl`.
- Éléments internes plus petits : `rounded-2xl`.

## Élévation

Une seule ombre existe, `shadow-signature`. Elle dit « c'est ici qu'on agit ».

### Où elle sert

<!-- exemple: elevation -->

Deux endroits seulement : la zone de saisie (avec son bouton d'envoi) et l'action principale d'un écran (`btn-primary`).

### À faire

- Détacher une carte, un tag ou un menu par un aplat et un contour fin.

### À éviter

- Ajouter une ombre pour « faire ressortir ». Si tout a une ombre, plus rien ne ressort.

## Icônes

Une seule bibliothèque, `lucide-react`, entre 12 et 18 px.

### Place de l'icône

<!-- exemple: iconplace -->

- Dans un bouton avec libellé, l'icône est toujours à droite du libellé.
- Dans un tag ou devant un nom (un fichier, un rôle), elle est devant : elle qualifie l'information.
- Dans un lien écrit comme du texte (LinkedIn, téléphone), elle est devant aussi : elle dit de quel lien il s'agit. Ce n'est pas un bouton : pas de fond, pas de contour.

### Règles

- Une icône correspond au contenu, elle n'est pas répétée pour décorer.
- Une icône décorative porte `aria-hidden`.
