<!-- source-hash: bcf579b2c98a -->
# Components

All the portfolio's components, organised by function. Every component follows the same outline: when to use it, example, anatomy, states, do, don't. Reuse what exists before creating; if you need a component that is not here, build it with the same building blocks (pill, card, badge) and say so when you deliver.

Ready-to-use classes, defined in `src/index.css`:

| Class | What it is |
|---|---|
| `btn-primary` | Solid olive green button, with shadow |
| `btn-secondary` | Outlined button, without shadow |
| `icon-btn` | Round pale burgundy button containing a single icon |
| `icon-chip` | Small round badge placed inside a button |
| `tag` | Tag: information pill, in a single size; add the colour classes to it |
| `eyebrow` | Small label (section heading, label) |
| `caption` | Caption in italics |
| `t-all` | Standard transition, on any element that changes on hover |
| `rise` | Gentle appearance of a block |

Files to reuse as they are: `Markdown.tsx` (answers, tables), `Monogram.tsx`, `SectionNav.tsx`, `FlowBoard.tsx`, `CaseVisuals.tsx` (figure and principle cards), `PromptInput.tsx`, `TopBar.tsx`, `Sidebar.tsx`, all in `src/components/`.

## Actions

### Buttons

A button triggers an action. Its appearance states its importance.

#### Variants

<!-- exemple: buttons -->

| Variant | Class | When |
|---|---|---|
| Primary | `btn-primary` | The main action. Only one per area. |
| Outlined | `btn-secondary` | A neighbouring, less important action. |

All buttons are pills. The label is in sentence case, 13.5 px, semibold: it is in the classes, do not rewrite it.

#### Anatomy

1. Pill container
2. Label, in sentence case
3. Optional icon, always to the right of the label

```tsx
<button className="btn-primary">Me contacter <Mail size={16} aria-hidden /></button>
```

#### Full width with badge

<!-- exemple: buttons-wide -->

In a narrow column, the button takes the full width: label on the left, icon in an `icon-chip` badge on the right. The badge inverts the button's colours.

Two outlined buttons are the same component, even when their badge is a different colour: “New conversation” (olive badge) and “View the CV” (burgundy badge) both start from `btn-secondary`. Only the badge colour changes. Never rewrite a button's classes by hand: it would lose the shared states, starting with hover.

```tsx
<button className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
  Contacter par email
  <span className="icon-chip bg-olive-fg text-olive"><Mail size={13} aria-hidden /></span>
</button>
```

#### States

<!-- exemple: buttons-states -->

- Hover: a slight change, never a colour inversion. The solid button lightens (`hover:opacity-90`); the outlined button gets a neutral veil (`hover:bg-surface-2`), its text and outline do not change.
- Pressed: `active:scale-[0.98]`.
- Disabled: `disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none`.
- After a successful action: the label and the icon change (“Copied” and a check mark), without changing colour.

#### Do

- One solid and one outlined when two buttons follow each other.

#### Don't

- Two neighbouring solid buttons.
- A solid burgundy button with text.
- The icon to the left of the label.
- A button whose classes are rewritten by hand instead of starting from `btn-primary` or `btn-secondary`.

### Icon buttons

A secondary or supporting action, carried by a single icon.

#### Variants

<!-- exemple: iconbuttons -->

| Variant | Appearance | When |
|---|---|---|
| Standard | `icon-btn`: round, pale burgundy | Close, open the menu, collapse |
| Send | Round `bg-accent text-accent-fg`, with shadow | Only for sending the message |
| Stop | Round `bg-ink text-bg` | During an answer |

#### Accessibility

- Every icon button carries an `aria-label`.

### Segmented control

Two or three exclusive options, permanently visible: language, theme, before / after.

#### Variants

<!-- exemple: segmented -->

| Variant | When | Example |
|---|---|---|
| Without icon | The options are acronyms or very short words | Language: FR / EN |
| With icon | An icon helps recognise the option; it sits to the right of the label, in vermilion | Theme: Light + sun, Dark + moon |

Both versions exist and are used together: in the navigation drawer, the language control (without icon) and the theme control (with icon) sit side by side, at equal width. Do not replace one with the other, and do not write “Français / English” in full: the language is shown as acronyms.

The selected option is solid, in dark neutral (`bg-ink text-bg`): it is not an action colour. The others are in `text-muted`.

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

#### Don't

- More than three options: use a menu.

#### Accessibility

- Every option carries `aria-pressed`.

### Chips

A small pill that starts something: a follow-up question.

#### Example

<!-- exemple: chips -->

```tsx
<button className="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2">
  Question de relance <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
</button>
```

#### Anatomy

1. Outlined pill, neutral background
2. Label in sentence case
3. Small arrow on the right

#### Don't

- A coloured background at rest: it is not a main action.
- A colour inversion on hover: like an outlined button, a chip gets a neutral veil (`hover:bg-surface-2`).

## Communication

### Tags

A tag informs, it is not clickable.

#### Variants

<!-- exemple: tags -->

| Meaning | Classes |
|---|---|
| Positive element, result | `bg-olive-tint text-olive-text` |
| What the AI does | `bg-[var(--ai-tint)] text-[var(--ai-text)]` |
| Friction, pain point | `bg-[var(--warn-tint)] text-[var(--warn-text)]` |
| Neutral information | `border border-rule text-ink`, no background |
| Secondary neutral (an actor such as the system) | `bg-surface-2 text-ink` |
| Receding neutral (what happens outside the tool) | `border border-line text-muted` |

```tsx
<span className="tag bg-olive-tint text-olive-text">Résultat</span>
```

All tags are the same size: always start from the `tag` class (12 px, medium) and add only the colour. Do not write a size or spacing by hand.

In an answer, an impact figure is written `==chiffre==` and becomes a pale olive tag. It is the only size exception: it follows the surrounding text.

#### Anatomy

1. Pale solid pill, or outlined for the neutral one
2. Optional icon (12 px), before the text
3. Text in sentence case, in the same hue

#### Don't

- A tag in capitals: it would read as a button.
- A solid olive tag.

### Badges

A circle that carries an icon or a number.

#### Variants

<!-- exemple: badges -->

| Use | Size | Classes |
|---|---|---|
| Subject icon | 28 to 32 px | `bg-accent-tint text-accent-text` |
| Step number | 28 to 32 px | `bg-accent text-accent-fg` |
| Icon in a button | 24 px | `icon-chip`, inverted colours of the button |
| List bullet | 6 px | `bg-vermillion` |

### Messages

The conversation: the question in a bubble, the answer on the page.

#### Example

<!-- exemple: messages -->

#### Anatomy

1. Question bubble, on the right: `rounded-3xl rounded-br-md bg-bubble text-bubble-fg`
2. Monogram, hidden on mobile
3. Assistant name and model
4. Answer, without a bubble
5. Action buttons, then follow-up chips

#### States

- Waiting: three animated dots (`thinking-dot`).
- In progress: a caret (`caret`) after the last word.
- Interrupted: a neutral tag indicates it.

## Containers

### Cards

A card groups content: very rounded corner, thin outline, neutral background, no shadow.

```tsx
<div className="rounded-3xl border border-line bg-elevated p-5">…</div>
```

In an answer, the small cards of a grid use `rounded-2xl` and `p-4`. A card inside a card takes `bg-bg` to stand out.

#### Suggestion card

<!-- exemple: card-suggestion -->

A clickable card that suggests a question. Its structure is fixed, do not reinvent it. The whole card is clickable: the arrow shows that it opens, it is not a second button. Cards are laid out in two columns; a card alone on its last row takes the full width (`sm:col-span-2`).

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

#### Anatomy

1. Subject icon in a badge, on the left
2. Title, on the same line
3. Arrow at the top right, with no background or outline
4. Text, below, across the full width

#### Numbered card

<!-- exemple: card-numbered -->

For principles or steps that follow one another: number badge on the left, semibold title and one line of text.

#### Call-to-action card

<!-- exemple: card-cta -->

A title and a sentence on the left, a single `btn-primary` on the right; on mobile the button moves below.

#### Don't

- A coloured card or one with a shadow.
- A number on cards with no order between them.
- A solid button in a suggestion card.

### Table

For comparing elements against the same criteria.

#### Example

<!-- exemple: table -->

A table is always written in Markdown in the answer: `src/components/Markdown.tsx` formats it (header as a small label, thin rules, horizontal scrolling on mobile). Do not build it by hand.

## Navigation

### Navigation drawer

The identity, the projects and the shortcuts, always in the same place.

#### Example

<!-- exemple: sidemenu -->

The button that collapses or opens the menu is part of the component: a navigation drawer without it is incomplete.

#### Anatomy

1. Collapse button: an `icon-btn` at the start of the top bar, to the left of the title
2. Identity: monogram, name, job title
3. “New conversation” button, neutral
4. Project list, numbered in their order of presentation, then a collapsible “Personal projects” folder: folder icon, name, number of projects, chevron on the right. It is closed by default and opens when one of its projects is displayed
5. Shortcuts: contact by email as `btn-primary`, CV as `btn-secondary`
6. Settings: two segmented controls side by side, language (FR / EN, without icon) and theme (Light / Dark, with icon). Always both.

#### Behaviour

- On desktop (from 768 px upwards): visible by default, at a fixed width. The collapse button hides it and the content takes the full width; a second click reopens it.
- On a small screen: closed by default. The same button, in the same place, opens it as a drawer that slides in from the left. The drawer never covers the whole screen (`w-[304px] max-w-[88vw]`), with a scrim behind it; it closes on a click on the scrim or on the close icon button placed in its header.

#### Accessibility

- The collapse button carries an `aria-label` that says what it does (open or collapse the menu).

#### Don't

- A full-screen menu: it makes you lose context. Seeing a piece of the page is a reminder that you have not changed screen.

### Section anchors

In a long answer, move from one section to another without scrolling through everything. Use `src/components/SectionNav.tsx`.

#### Example

<!-- exemple: anchors -->

The anchors are numbered, because the sections follow one another. The bar stays stuck to the top of the conversation.

### Menu

A list of options that opens under its trigger: the model choice, the commands.

#### Example

<!-- exemple: menu -->

#### Anatomy

1. Trigger: neutral outlined pill (`border border-line bg-elevated`)
2. Chevron on the right, which flips on opening
3. Panel `rounded-3xl border border-rule bg-elevated p-1.5`, without shadow
4. Selected option: burgundy check mark on the right

#### Accessibility

- The trigger carries `aria-haspopup="listbox"` and `aria-expanded`; the selected option carries `aria-selected`.
- The menu closes on an outside click and on Escape.

### Tabs

A document to read (the CV, the Design System) opens as a page next to the conversation, never on top of it. It has its own tab in the top bar, closed with its cross. Several documents can stay open at the same time. See `src/components/TopBar.tsx`.

#### Example

<!-- exemple: tabs -->

#### Anatomy

1. Conversation tab, with its title
2. Document tab, with a short label
3. Close cross, inside the document tab
4. Document action on the right of the bar (download), in place of the level of detail

#### Behaviour

- The active tab has a neutral fill (`bg-surface-2 text-ink`); the other is in `text-muted`.
- Clicking the conversation tab returns to it without closing the document; the cross closes it and returns to the conversation.
- While a document is displayed, the prompt input is hidden.

#### Don't

- Opening a document in a window on top of the page: the portfolio has no dialog.
- Putting the prototype in a tab: designed for 1280 px wide, it opens full screen.
- A window to write an email: the contact button opens the person's mail app directly (`mailto:`).

#### Accessibility

- Tabs carry `role="tab"` and `aria-selected`; the cross carries an `aria-label`.

## Input

### Prompt input

The entry point of the conversation, and the only field that carries the shadow. See `src/components/PromptInput.tsx`.

#### Example

<!-- exemple: prompt -->

#### Anatomy

1. Container `rounded-[28px] border border-line bg-elevated shadow-signature`
2. Commands button, neutral (`bg-surface-2 text-ink`)
3. Text field, without outline
4. Send button, round, solid burgundy

#### States

- Empty: sending is disabled.
- Focus: the container's outline strengthens (`focus-within:border-rule`).
- During an answer: Send becomes Stop.

## Data

### Key figures

One tile per figure: the figure in large, what it measures below.

#### Example

<!-- exemple: figures -->

```tsx
<ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <li className="min-w-0 rounded-2xl border border-line bg-elevated p-4">
    <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-ink">40 000</span>
    <span className="mt-1.5 block text-xs font-light leading-snug text-muted">utilisateurs actifs</span>
  </li>
</ul>
```

#### Do

- Leave the figure neutral (`text-ink`): its size is enough.

#### Don't

- Colouring a figure.
- Two figures on the same line without a grid.

### Before / after comparison

Two versions of the same screen, stacked, with a divider you drag to move from one to the other.

#### Example

<!-- exemple: compare -->

#### Anatomy

1. The two images, framed the same way
2. A “Before” tag on the left, an “After” tag on the right
3. The divider and its round handle, in dark neutral
4. A caption under the image

#### Do

- Compare two screens that show the same thing: the same page, before and after.

#### Don't

- Colouring the handle: it moves, it triggers nothing.
- Comparing two unrelated screens: the divider would no longer make sense.

#### Accessibility

- The divider is a slider (`input type="range"`): it moves with the keyboard and carries an `aria-label`.
- The caption says in words what the two images show.

### Step flow

Who does what, step by step, and where it gets stuck. Use `src/components/FlowBoard.tsx` with data, modelled on `src/data/covenantFlow.ts`.

#### Example

<!-- exemple: flow -->

#### Anatomy

1. Numbered steps, linked by a vertical rule
2. Small cards: one action per actor
3. Actor tag: only the AI is coloured, the other actors are neutral
4. Frictions as orange tags, under the step concerned
5. Before / after segmented control if there are two flows
