---
name: asl-design-system
description: Design System du portfolio d'Anne-Sophie Leroy — couleurs par tokens, surfaces neutres et unies, ombre réservée, sens des couleurs, structure des composants (boutons, tags, cartes, menus), hiérarchie des actions, mise en page et typographie sans majuscules. À utiliser dès qu'on crée ou modifie un composant, un écran, un style, une couleur ou un bouton dans ce projet, même si la demande ne parle pas de « design system » (par exemple « ajoute une carte », « rends ce bloc plus visible », « crée une bannière »).
---

# Design System du portfolio ASL

Ce portfolio a une direction précise : sobre, lisible, avec la couleur réservée à ce qui compte.
Ton rôle est de construire des écrans qui s'y fondent, pas de les rendre « plus beaux » à ta façon.
En cas de doute, fais plus simple.

## Avant d'écrire du code

Le système est rangé en trois fichiers, du plus général au plus précis. Ouvre ceux dont tu as besoin :

| Tu veux… | Lis |
|---|---|
| Créer ou modifier un composant (bouton, tag, carte, menu…) | `references/composants.md` : chaque composant y est décrit (exemple, anatomie, états). Suis sa structure plutôt que d'en inventer une. |
| Choisir une couleur, une taille de texte, un arrondi, une icône | `references/styles.md`. La source de vérité des valeurs reste `src/index.css`. |
| Composer un écran, écrire un libellé, vérifier l'accessibilité | `references/fondations.md` |

Ces trois fichiers sont aussi la source de la page « Design System » du portfolio : une règle changée ici change la page.

## Les quatre règles non négociables

Ce sont celles dont l'oubli se voit tout de suite à l'écran.

### 1. Aucune couleur écrite en dur

Toute couleur passe par un token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Jamais de `#640017`, de `rgb(...)` ni de couleur Tailwind standard (`bg-red-500`, `text-gray-600`, `text-white`).

Pourquoi : les tokens changent de valeur selon le thème. Une couleur en dur reste figée, donc l'écran casse en mode sombre, et elle sort de la palette sans que personne le remarque.

Conséquence : n'utilise pas le préfixe `dark:` de Tailwind. Le thème est porté par `data-theme` sur `<html>` ; avec des tokens, les deux thèmes fonctionnent sans rien écrire de plus.

- Oui : `className="bg-accent text-accent-fg"`
- Non : `className="bg-[#640017] text-white"`

### 2. Des surfaces neutres et unies

Un fond est une couleur pleine et neutre : `bg-bg`, `bg-elevated` ou `bg-sidebar`. Pas de dégradé, pas de texture, pas de forme décorative, et pas de grande surface colorée (un bandeau olive, une carte bordeaux).

La couleur vit dans les petits éléments qui portent une action ou une information : boutons, tags, pastilles d'icône.

Pourquoi : les effets de fond ont été essayés puis retirés, parce qu'ils gênaient la lecture sans rien apporter. Et une grande surface colorée écrase tout ce qui l'entoure. Pour qu'un bloc ressorte, joue sur la taille du texte, l'espace et une seule action colorée : voir `references/fondations.md`, « Mise en page ».

- Oui : `className="rounded-3xl border border-line bg-elevated p-5"` avec un `btn-primary` à l'intérieur
- Non : `className="bg-olive text-olive-fg"` sur toute la largeur

### 3. L'ombre est réservée

Une seule ombre existe, `shadow-signature`, et elle sert à deux choses : la zone de saisie du prompt (avec son bouton d'envoi) et l'action principale d'un écran (`btn-primary`). Une carte, un tag, un menu secondaire ou une image n'ont pas d'ombre : ils se détachent par un aplat et une bordure fine (`border border-line`).

Pourquoi : si tout a une ombre, plus rien ne ressort. L'ombre dit « c'est ici qu'on agit ».

### 4. Une couleur, un seul sens

| Couleur | Sens | Tokens |
|---|---|---|
| Olive plein | Action principale | `olive`, `olive-fg` |
| Olive pâle | Élément positif (tag, pastille) | `olive-tint`, `olive-text` |
| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | `accent`, `accent-fg`, `accent-text`, `accent-tint` |
| Turquoise | Ce qui vient de l'IA | `--ai`, `--ai-text`, `--ai-tint` |
| Orange | Point de friction, alerte | `--warn-text`, `--warn-tint` |
| Vermillon | Ponctuation seulement : puce de liste, curseur, petite flèche. Jamais un texte, jamais un fond | `vermillion` |

L'olive existe en deux intensités, et la différence compte : plein pour un bouton, pâle pour une information. Un tag n'est jamais en olive plein, un bouton jamais en olive pâle : un bouton qui n'est pas l'action principale reste neutre (contour ou `bg-surface-2`).

Ne détourne pas une couleur parce qu'elle « irait bien ». Si aucun sens ne correspond, reste neutre : `text-ink`, `text-muted`, `border-line`. Les chiffres, en particulier, restent neutres.

Pourquoi : dès qu'une couleur a deux sens, le lecteur ne peut plus s'y fier.

## Quand la demande contredit une règle

Il arrive qu'on te demande explicitement ce qu'une règle interdit (« mets un dégradé », « ajoute une ombre pour que ça ressorte »). La personne veut un résultat — que le bloc se voie — pas forcément ce moyen-là.

Construis la version conforme qui atteint le même but, puis dis clairement ce que tu n'as pas fait et pourquoi, et propose de le faire quand même si elle y tient. Ne l'ajoute pas en silence, et ne refuse pas sans rien livrer.

## Composer l'écran

Un écran peut respecter les quatre règles et rester raté : des éléments qui se chevauchent, des traits qui ne séparent rien. Avant de créer ou de réorganiser un bloc, lis « Mise en page » dans `references/fondations.md`.

À retenir même sans l'ouvrir : **aucun texte n'est tout en majuscules**, ni bouton, ni tag, ni libellé (pas de classe `uppercase`), et **dans un bouton, l'icône est à droite du libellé**.

## Avant de livrer

Lance d'abord le script de vérification sur les fichiers que tu as créés ou modifiés :

```bash
node .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx
```

Sans argument, il vérifie tout `src/`. Il signale deux niveaux :

- `✗` une erreur : une règle est enfreinte (couleur en dur, dégradé, ombre non prévue, texte en majuscules), corrige avant de livrer ;
- `?` à vérifier : le script ne peut pas trancher seul (une ombre, une surface colorée). Regarde si l'usage est légitime.

Le script ne voit pas tout. Il ne juge ni le sens d'une couleur (règle 4), ni la structure d'un composant (icône à droite, carte de suggestion), ni la composition : un texte qui en recouvre un autre lui échappe. Ces points restent les tiens.

Si tu dois t'écarter d'une règle, écris la raison juste au-dessus de la ligne, puis dis-le clairement dans ta réponse :

```tsx
{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}
```

Un écart signalé vaut mieux qu'un écart caché.
