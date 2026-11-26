# Composants

Tous les composants du portfolio, rangés par fonction. Chaque composant suit la même trame : quand l'utiliser, exemple, anatomie, états, à faire, à éviter. Réutilise ce qui existe avant de créer ; si tu as besoin d'un composant qui n'est pas ici, construis-le avec les mêmes briques (pilule, carte, pastille) et dis-le en livrant.

Classes prêtes à l'emploi, définies dans `src/index.css` :

| Classe | Ce que c'est |
|---|---|
| `btn-primary` | Bouton plein vert olive, avec ombre |
| `btn-secondary` | Bouton en contour, sans ombre |
| `icon-btn` | Bouton rond bordeaux pâle contenant une seule icône |
| `icon-chip` | Petite pastille ronde placée dans un bouton |
| `tag` | Tag : pilule d'information, à une seule taille ; on y ajoute les classes de couleur |
| `eyebrow` | Petit libellé (titre de section, étiquette) |
| `caption` | Légende en italique |
| `t-all` | Transition standard, sur tout élément qui change au survol |
| `rise` | Apparition douce d'un bloc |

Fichiers à réutiliser tels quels : `Markdown.tsx` (réponses, tableaux), `Monogram.tsx`, `SectionNav.tsx`, `FlowBoard.tsx`, `CaseVisuals.tsx` (cartes de chiffres et de principes), `PromptInput.tsx`, `TopBar.tsx`, `Sidebar.tsx`, tous dans `src/components/`.

## Actions

### Boutons

Un bouton déclenche une action. Son aspect dit son importance.

#### Variantes

<!-- exemple: buttons -->

| Variante | Classe | Quand |
|---|---|---|
| Principal | `btn-primary` | L'action principale. Une seule par zone. |
| Contour | `btn-secondary` | Une action voisine, moins importante. |

Tous les boutons sont des pilules. Le libellé est en casse normale, 13,5 px, semi-gras : c'est dans les classes, ne le réécris pas.

#### Anatomie

1. Conteneur en pilule
2. Libellé, en casse normale
3. Icône facultative, toujours à droite du libellé

```tsx
<button className="btn-primary">Me contacter <Mail size={16} aria-hidden /></button>
```

#### Pleine largeur avec pastille

<!-- exemple: buttons-wide -->

Dans une colonne étroite, le bouton prend toute la largeur : libellé à gauche, icône dans une pastille `icon-chip` à droite. La pastille inverse les couleurs du bouton.

Deux boutons en contour sont le même composant, même si leur pastille n'a pas la même couleur : « Nouvelle conversation » (pastille olive) et « Voir le CV » (pastille bordeaux) partent tous deux de `btn-secondary`. Seule la couleur de la pastille change. Ne réécris jamais les classes d'un bouton à la main : il perdrait les états communs, à commencer par le survol.

```tsx
<button className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
  Contacter par email
  <span className="icon-chip bg-olive-fg text-olive"><Mail size={13} aria-hidden /></span>
</button>
```

#### États

<!-- exemple: buttons-states -->

- Survol : un changement léger, jamais une inversion de couleur. Le bouton plein s'éclaircit (`hover:opacity-90`) ; le bouton en contour reçoit un voile neutre (`hover:bg-surface-2`), son texte et son trait ne changent pas.
- Appui : `active:scale-[0.98]`.
- Désactivé : `disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none`.
- Après une action réussie : le libellé et l'icône changent (« Copié » et une coche), sans changer de couleur.

#### À faire

- Un plein et un contour quand deux boutons se suivent.

#### À éviter

- Deux boutons pleins voisins.
- Un bouton plein bordeaux avec du texte.
- L'icône à gauche du libellé.
- Un bouton dont les classes sont réécrites à la main au lieu de partir de `btn-primary` ou `btn-secondary`.

### Boutons-icônes

Une action secondaire ou d'appoint, portée par une seule icône.

#### Variantes

<!-- exemple: iconbuttons -->

| Variante | Aspect | Quand |
|---|---|---|
| Standard | `icon-btn` : rond bordeaux pâle | Fermer, ouvrir le menu, replier |
| Envoi | Rond `bg-accent text-accent-fg`, avec ombre | Uniquement l'envoi du message |
| Stop | Rond `bg-ink text-bg` | Pendant une réponse |

#### Accessibilité

- Chaque bouton-icône porte un `aria-label`.

### Sélecteur segmenté

Deux ou trois options exclusives, visibles en permanence : langue, thème, avant / après.

#### Variantes

<!-- exemple: segmented -->

| Variante | Quand | Exemple |
|---|---|---|
| Sans icône | Les options sont des sigles ou des mots très courts | Langue : FR / EN |
| Avec icône | Une icône aide à reconnaître l'option ; elle est à droite du libellé, en vermillon | Thème : Light + soleil, Dark + lune |

Les deux versions existent et s'utilisent ensemble : dans le menu latéral, le sélecteur de langue (sans icône) et le sélecteur de thème (avec icône) sont côte à côte, à largeur égale. Ne remplace pas l'une par l'autre, et n'écris pas « Français / English » en toutes lettres : la langue s'affiche en sigles.

L'option choisie est pleine, en neutre foncé (`bg-ink text-bg`) : ce n'est pas une couleur d'action. Les autres sont en `text-muted`.

```tsx
{/* Sans icône : la langue */}
<div role="group" aria-label="Langue" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">FR</button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">EN</button>
</div>

{/* Avec icône : le thème */}
<div role="group" aria-label="Thème" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">
    Light <Sun size={12} className="text-vermillion" aria-hidden />
  </button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">
    Dark <Moon size={12} className="text-vermillion" aria-hidden />
  </button>
</div>
```

#### À éviter

- Plus de trois options : utilise un menu déroulant.

#### Accessibilité

- Chaque option porte `aria-pressed`.

### Puces cliquables

Une petite pilule qui lance quelque chose : une question de relance.

#### Exemple

<!-- exemple: chips -->

```tsx
<button className="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2">
  Question de relance <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
</button>
```

#### Anatomie

1. Pilule en contour, fond neutre
2. Libellé en casse normale
3. Petite flèche à droite

#### À éviter

- Un fond coloré au repos : ce n'est pas une action principale.
- Une inversion de couleur au survol : comme un bouton en contour, une puce reçoit un voile neutre (`hover:bg-surface-2`).

## Communication

### Tags

Un tag informe, il ne se clique pas.

#### Variantes

<!-- exemple: tags -->

| Sens | Classes |
|---|---|
| Élément positif, résultat | `bg-olive-tint text-olive-text` |
| Ce que fait l'IA | `bg-[var(--ai-tint)] text-[var(--ai-text)]` |
| Friction, point de douleur | `bg-[var(--warn-tint)] text-[var(--warn-text)]` |
| Information neutre | `border border-rule text-ink`, sans fond |
| Neutre secondaire (un acteur comme le système) | `bg-surface-2 text-ink` |
| Neutre en retrait (ce qui se passe hors de l'outil) | `border border-line text-muted` |

```tsx
<span className="tag bg-olive-tint text-olive-text">Résultat</span>
```

Tous les tags ont la même taille : pars toujours de la classe `tag` (12 px, medium) et ajoute seulement la couleur. N'écris pas une taille ou un espacement à la main.

Dans une réponse, un chiffre d'impact s'écrit `==chiffre==` et devient un tag olive pâle. C'est la seule exception de taille : il suit le texte qui l'entoure.

#### Anatomie

1. Pilule pleine pâle, ou contour pour le neutre
2. Icône facultative (12 px), devant le texte
3. Texte en casse normale, de la même teinte

#### À éviter

- Un tag en capitales : il se lirait comme un bouton.
- Un tag en olive plein.

### Pastilles

Un rond qui porte une icône ou un numéro.

#### Variantes

<!-- exemple: badges -->

| Usage | Taille | Classes |
|---|---|---|
| Icône de sujet | 28 à 32 px | `bg-accent-tint text-accent-text` |
| Numéro d'étape | 28 à 32 px | `bg-accent text-accent-fg` |
| Icône dans un bouton | 24 px | `icon-chip`, couleurs inversées du bouton |
| Puce de liste | 6 px | `bg-vermillion` |

### Messages

La conversation : la question dans une bulle, la réponse sur la page.

#### Exemple

<!-- exemple: messages -->

#### Anatomie

1. Bulle de la question, à droite : `rounded-3xl rounded-br-md bg-bubble text-bubble-fg`
2. Monogramme, masqué sur mobile
3. Nom de l'assistant et modèle
4. Réponse, sans bulle
5. Boutons d'action, puis puces de relance

#### États

- En attente : trois points animés (`thinking-dot`).
- En cours : un curseur (`caret`) après le dernier mot.
- Interrompue : un tag neutre le signale.

## Contenants

### Cartes

Une carte regroupe un contenu : coin très arrondi, contour fin, fond neutre, pas d'ombre.

```tsx
<div className="rounded-3xl border border-line bg-elevated p-5">…</div>
```

Dans une réponse, les petites cartes d'une grille utilisent `rounded-2xl` et `p-4`. Une carte dans une carte prend `bg-bg` pour se détacher.

#### Carte de suggestion

<!-- exemple: card-suggestion -->

Une carte cliquable qui propose une question. Sa structure est fixe, ne la réinvente pas. Toute la carte est cliquable : la flèche montre qu'elle s'ouvre, elle n'est pas un second bouton. Les cartes se rangent sur deux colonnes ; une carte seule sur sa dernière ligne prend toute la largeur (`sm:col-span-2`).

```tsx
<button className="t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule">
  <span className="flex items-center gap-3">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text">
      <UserRound size={15} aria-hidden />
    </span>
    <span className="eyebrow flex-1 font-semibold text-ink">Titre</span>
    <ArrowUpRight size={15} className="t-all shrink-0 text-muted group-hover:text-ink" aria-hidden />
  </span>
  <span className="text-[14.5px] font-light leading-relaxed text-ink">Texte de la carte</span>
</button>
```

#### Anatomie

1. Icône de sujet dans une pastille, à gauche
2. Titre, sur la même ligne
3. Flèche en haut à droite, sans fond ni contour
4. Texte, en dessous, sur toute la largeur

#### Carte numérotée

<!-- exemple: card-numbered -->

Pour des principes ou des étapes qui se suivent : pastille de numéro à gauche, titre semi-gras et une ligne de texte.

#### Carte d'appel à l'action

<!-- exemple: card-cta -->

Un titre et une phrase à gauche, un seul `btn-primary` à droite ; sur mobile le bouton passe dessous.

#### À éviter

- Une carte colorée ou avec une ombre.
- Un numéro sur des cartes sans ordre entre elles.
- Un bouton plein dans une carte de suggestion.

### Tableau

Pour comparer des éléments selon les mêmes critères.

#### Exemple

<!-- exemple: table -->

Un tableau s'écrit toujours en Markdown dans la réponse : `src/components/Markdown.tsx` le met en forme (en-tête en petit libellé, filets fins, défilement horizontal sur mobile). Ne le construis pas à la main.

## Navigation

### Menu latéral

L'identité, les projets et les accès rapides, toujours au même endroit.

#### Exemple

<!-- exemple: sidemenu -->

Le bouton qui replie ou ouvre le menu fait partie du composant : un menu latéral sans ce bouton est incomplet.

#### Anatomie

1. Bouton de repli : un `icon-btn` au début de la barre du haut, à gauche du titre
2. Identité : monogramme, nom, métier
3. Bouton « Nouvelle conversation », neutre
4. Liste des projets, numérotés dans leur ordre de présentation, puis un dossier repliable « Projets personnels » : icône de dossier, nom, nombre de projets, chevron à droite. Il est fermé par défaut et s'ouvre quand l'un de ses projets est affiché
5. Accès rapides : contact par email en `btn-primary`, CV en `btn-secondary`
6. Réglages : deux sélecteurs segmentés côte à côte, la langue (FR / EN, sans icône) et le thème (Light / Dark, avec icône). Toujours les deux.

#### Comportement

- Sur ordinateur (à partir de 768 px) : visible par défaut, à largeur fixe. Le bouton de repli le masque et le contenu prend toute la largeur ; un second clic le rouvre.
- Sur petit écran : fermé par défaut. Le même bouton, au même endroit, l'ouvre en tiroir qui glisse depuis la gauche. Le tiroir ne couvre jamais tout l'écran (`w-[304px] max-w-[88vw]`), avec un voile derrière lui ; il se ferme au clic sur le voile ou sur le bouton-icône de fermeture placé dans son en-tête.

#### Accessibilité

- Le bouton de repli porte un `aria-label` qui dit ce qu'il fait (ouvrir ou replier le menu).

#### À éviter

- Un menu plein écran : il fait perdre le contexte. Voir un bout de la page rappelle qu'on n'a pas changé d'écran.

### Ancres de section

Dans une longue réponse, passer d'une section à l'autre sans tout faire défiler. Utilise `src/components/SectionNav.tsx`.

#### Exemple

<!-- exemple: anchors -->

Les ancres sont numérotées, car les sections se suivent. La barre reste collée en haut de la conversation.

### Menu déroulant

Une liste d'options qui s'ouvre sous son déclencheur : le choix du modèle, les commandes.

#### Exemple

<!-- exemple: menu -->

#### Anatomie

1. Déclencheur : pilule neutre en contour (`border border-line bg-elevated`)
2. Chevron à droite, qui se retourne à l'ouverture
3. Panneau `rounded-3xl border border-rule bg-elevated p-1.5`, sans ombre
4. Option choisie : coche bordeaux à droite

#### Accessibilité

- Le déclencheur porte `aria-haspopup="listbox"` et `aria-expanded` ; l'option choisie porte `aria-selected`.
- Le menu se ferme au clic extérieur et à Échap.

### Onglets

Un document à lire (le CV, le Design System) s'ouvre comme une page à côté de la conversation, jamais par-dessus elle. Il a son onglet dans la barre du haut, que l'on referme avec sa croix. Plusieurs documents peuvent rester ouverts en même temps. Voir `src/components/TopBar.tsx`.

#### Exemple

<!-- exemple: tabs -->

#### Anatomie

1. Onglet de la conversation, avec son titre
2. Onglet du document, avec un libellé court
3. Croix de fermeture, dans l'onglet du document
4. Action du document à droite de la barre (télécharger), à la place du niveau de détail

#### Comportement

- L'onglet actif a un fond neutre (`bg-surface-2 text-ink`) ; l'autre est en `text-muted`.
- Cliquer sur l'onglet de la conversation y revient sans fermer le document ; la croix le ferme et revient à la conversation.
- Tant qu'un document est affiché, la zone de saisie est masquée.

#### À éviter

- Ouvrir un document dans une fenêtre par-dessus la page : le portfolio n'a pas de fenêtre modale.
- Mettre le prototype dans un onglet : conçu pour 1280 px de large, il s'ouvre en plein écran.
- Une fenêtre pour écrire un email : le bouton de contact ouvre directement la messagerie de la personne (`mailto:`).

#### Accessibilité

- Les onglets portent `role="tab"` et `aria-selected` ; la croix porte un `aria-label`.

## Saisie

### Zone de saisie

Le point d'entrée de la conversation, et le seul champ qui porte l'ombre. Voir `src/components/PromptInput.tsx`.

#### Exemple

<!-- exemple: prompt -->

#### Anatomie

1. Conteneur `rounded-[28px] border border-line bg-elevated shadow-signature`
2. Bouton des commandes, neutre (`bg-surface-2 text-ink`)
3. Champ de texte, sans contour
4. Bouton d'envoi, rond bordeaux plein

#### États

- Vide : l'envoi est désactivé.
- Focus : le contour du conteneur se renforce (`focus-within:border-rule`).
- Pendant une réponse : l'envoi devient Stop.

## Données

### Chiffres clés

Une tuile par chiffre : le chiffre en grand, ce qu'il mesure en dessous.

#### Exemple

<!-- exemple: figures -->

```tsx
<ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <li className="min-w-0 rounded-2xl border border-line bg-elevated p-4">
    <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-ink">40 000</span>
    <span className="mt-1.5 block text-xs font-light leading-snug text-muted">utilisateurs actifs</span>
  </li>
</ul>
```

#### À faire

- Laisser le chiffre en neutre (`text-ink`) : sa taille suffit.

#### À éviter

- Colorer un chiffre.
- Deux chiffres sur la même ligne sans grille.

### Comparaison avant / après

Deux versions d'un même écran, superposées, avec une séparation que l'on fait glisser pour passer de l'une à l'autre.

#### Exemple

<!-- exemple: compare -->

#### Anatomie

1. Les deux images, cadrées de la même façon
2. Un tag « Avant » à gauche, un tag « Après » à droite
3. La séparation et sa poignée ronde, en neutre foncé
4. Une légende sous l'image

#### À faire

- Comparer deux écrans qui montrent la même chose : la même page, avant et après.

#### À éviter

- Colorer la poignée : elle se déplace, elle ne déclenche rien.
- Comparer deux écrans sans rapport : la séparation n'aurait plus de sens.

#### Accessibilité

- La séparation est un curseur (`input type="range"`) : elle se déplace au clavier et porte un `aria-label`.
- La légende dit en mots ce que montrent les deux images.

### Maquette défilante

Une maquette de page entière est trop haute pour être montrée d'un bloc. Elle s'affiche dans un cadre à hauteur fixe, que l'on fait défiler comme la vraie page.

#### Anatomie

1. Un cadre à hauteur fixe (`h-[460px] overflow-y-auto`), au contour fin
2. L'image entière à l'intérieur, à la largeur du cadre
3. Une légende sous le cadre
4. Pour un écran mobile : un cadre étroit, au format téléphone, à côté du cadre ordinateur

#### À éviter

- Réduire la maquette pour la faire tenir : elle deviendrait illisible.
- Un cadre sans légende : rien n'indiquerait qu'il se fait défiler.

#### Accessibilité

- Le cadre reçoit le focus (`tabIndex={0}`) et porte un `aria-label`, pour se faire défiler au clavier.

### Parcours en étapes

Qui fait quoi, étape par étape, et où ça coince. Utilise `src/components/FlowBoard.tsx` avec des données, sur le modèle de `src/data/covenantFlow.ts`.

#### Exemple

<!-- exemple: flow -->

#### Anatomie

1. Étapes numérotées, reliées par un filet vertical
2. Petites cartes : une action par acteur
3. Tag d'acteur : seule l'IA est colorée, les autres acteurs sont neutres
4. Frictions en tags orange, sous l'étape concernée
5. Sélecteur avant / après s'il y a deux parcours
