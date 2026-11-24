# Fondations

Ce qui vaut pour tout écran, quel que soit le composant : accessibilité, mise en page, contenu.
Ce fichier est aussi la source de la page « Design System » du portfolio : ce que tu lis ici est ce qui y est affiché.

## Accessibilité

Tout doit pouvoir se lire, s'atteindre au clavier et s'annoncer, dans les deux thèmes.

### Règles

- Tout élément cliquable est un `<button>` ou un `<a>`, jamais un `<div>`.
- Le focus au clavier reste visible : il est géré globalement, ne le retire pas.
- Un état (sélectionné, ouvert) est aussi annoncé : `aria-pressed`, `aria-expanded`, `aria-current`.
- Un bouton qui ne contient qu'une icône porte un `aria-label`. Une icône décorative porte `aria-hidden`.
- Les animations se coupent quand la personne a demandé moins de mouvement.

### Contrastes vérifiés

Rapports calculés sur les valeurs de `src/index.css`. Seuil WCAG AA : 4,5 pour un texte, 3 pour une icône.

| Couple | Clair | Sombre |
|---|---|---|
| `text-ink` sur `bg-bg` | 14,8 | 13,8 |
| `text-muted` sur `bg-bg` | 6,7 | 8,4 |
| `text-muted` sur `bg-elevated` | 7,3 | 7,5 |
| `text-olive-fg` sur `bg-olive` | 6,5 | 5,4 |
| `text-accent-fg` sur `bg-accent` | 12,8 | 7,0 |
| Tag olive pâle | 7,5 | 6,5 |
| Tag IA | 4,9 | 6,9 |
| Tag friction | 6,3 | 5,6 |
| `text-vermillion` sur `bg-bg` | 3,3 | 5,3 |
| `border-line` sur `bg-bg` | 1,4 | 1,3 |

Tous les couples de texte passent AA dans les deux thèmes. Le vermillon ne passe pas pour du texte en thème clair : il reste une ponctuation. `border-line` est un trait décoratif : il ne doit jamais être le seul indice d'un état. Si tu crées un nouveau couple, calcule son contraste avant de l'utiliser.

## Mise en page

Un écran peut respecter toutes les couleurs et rester raté. La mise en page dit comment hiérarchiser, espacer et séparer.

### Faire ressortir un bloc

Quand on te demande qu'un élément « se voie », utilise la hiérarchie, dans cet ordre :

1. **La taille et la graisse du texte** : un titre en `font-display font-semibold`, plus grand que ce qui l'entoure.
2. **L'espace** : de l'air autour du bloc le détache mieux qu'un cadre.
3. **Une seule action pleine** : un `btn-primary` attire l'œil là où il faut agir.

N'ajoute ni fond coloré, ni ombre, ni trait pour « marquer » un bloc.

### Hiérarchie des actions

<!-- exemple: hierarchy -->

| Importance | Bouton | Aspect |
|---|---|---|
| L'action principale de l'écran | `btn-primary` | Plein, vert olive, avec ombre |
| Une action voisine, moins importante | `btn-secondary` | Contour |
| Une action secondaire ou d'appoint | `icon-btn` | Bouton-icône bordeaux |

- **Deux boutons côte à côte : un plein, un en contour.** Le plus important est plein, donc vert. Jamais deux pleins voisins.
- **Le bordeaux n'est pas une couleur de bouton plein avec texte.** Il sert aux boutons-icônes et aux numéros d'étape.
- **Un bouton qui n'est pas l'action principale reste neutre** : contour ou `bg-surface-2`, jamais olive pâle.
- En cas de doute, descends d'un cran : un écran avec trop peu de couleur se lit mieux qu'un écran où tout appelle.

### Rien ne se chevauche

- Aligne des éléments comparables dans une **grille** (`grid grid-cols-3 gap-3`) : une colonne par élément.
- Mets `min-w-0` sur un enfant de `flex` ou de `grid` qui contient du texte, sinon il pousse ses voisins.
- **Adapte la taille du texte à la largeur disponible**, pas à l'envie d'impact.
- Sur petit écran, passe en une colonne (`grid-cols-1 sm:grid-cols-3`) plutôt que de réduire le texte. Rien ne déborde en largeur.

### Les traits

Un trait sépare deux contenus. Il ne décore pas.

- **Une carte** a un contour fin sur ses quatre côtés : `border border-line`.
- **Un trait horizontal** se place entre deux contenus empilés du même ensemble : les lignes d'un tableau, l'en-tête et le corps d'une carte.
- **Pas de trait sous un bloc isolé** : il ne séparerait rien.
- `border-rule` (trait marqué) est réservé aux filets de titre et au contour des boutons en contour.

### Espacements

Multiples de 4 px (`gap-2`, `gap-3`, `p-4`, `p-5`). Entre deux blocs : `my-4` à `my-6`.

### Vérifier à l'œil

Le script contrôle les couleurs, les ombres et les majuscules, pas la composition. Si tu peux afficher l'écran, regarde-le à 375 px et à 1280 px de large : aucun texte ne doit en toucher un autre. Si tu ne peux pas l'afficher, dis-le plutôt que de supposer que ça tient.

## Contenu

Comment les textes s'écrivent et ce qui les accompagne.

### Pas de texte tout en majuscules

<!-- exemple: nocaps -->

Aucun texte n'est affiché tout en majuscules : ni bouton, ni tag, ni libellé, ni option de sélecteur, ni légende. Une majuscule au premier mot, le reste en minuscules.

- Pas de classe `uppercase`, pas de `text-transform`, pas d'espacement de lettres pour imiter des capitales.
- Les libellés s'écrivent en casse normale dans les données.
- Seules exceptions : les sigles (FR, EN, CV, PDF, IA) et le monogramme « ASL ».

Pour hiérarchiser sans capitales, joue sur la graisse, la taille et la couleur.

### Numéro ou icône

<!-- exemple: numbericon -->

Un numéro dit un ordre. Une icône dit un sujet.

- **Numéro** : seulement pour des éléments qui se suivent — un parcours, une démarche, une liste ordonnée.
- **Icône** : pour des éléments sans ordre entre eux. Choisis une icône qui correspond au contenu, pas une icône décorative répétée.
- Si aucun des deux n'apporte d'information, ne mets rien.

Un numéro s'écrit de deux façons, selon ce qu'il numérote :

- **Dans une pastille ronde bordeaux** (`bg-accent text-accent-fg`) : les étapes d'un parcours ou d'une démarche, les cartes numérotées.
- **« 01 » en italique bordeaux, sans pastille** (`font-display italic text-accent-text`) : les entrées d'une liste ou d'un menu — projets du menu latéral, ancres de section, listes numérotées d'une réponse.

### Deux langues

Aucun texte visible n'est écrit dans un composant. Chaque libellé existe en français et en anglais :

- textes d'interface : `src/data/i18n.ts` ;
- contenu des réponses : `src/data/knowledgeBase.ts`.

Le composant reçoit `t` (les textes) ou `lang` en propriété.
