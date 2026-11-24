<!-- source-hash: df62a5704dae -->
# Foundations

What applies to every screen, whatever the component: accessibility, layout, content.
This file is also the source of the portfolio's “Design System” page: what you read here is what is displayed there.

## Accessibility

Everything must be readable, reachable by keyboard and announced, in both themes.

### Rules

- Every clickable element is a `<button>` or an `<a>`, never a `<div>`.
- Keyboard focus stays visible: it is handled globally, do not remove it.
- A state (selected, open) is also announced: `aria-pressed`, `aria-expanded`, `aria-current`.
- A button that contains only an icon carries an `aria-label`. A decorative icon carries `aria-hidden`.
- Animations stop when the person has asked for reduced motion.

### Verified contrasts

Ratios calculated from the values in `src/index.css`. WCAG AA threshold: 4.5 for text, 3 for an icon.

| Pair | Light | Dark |
|---|---|---|
| `text-ink` on `bg-bg` | 14.8 | 13.8 |
| `text-muted` on `bg-bg` | 6.7 | 8.4 |
| `text-muted` on `bg-elevated` | 7.3 | 7.5 |
| `text-olive-fg` on `bg-olive` | 6.5 | 5.4 |
| `text-accent-fg` on `bg-accent` | 12.8 | 7.0 |
| Pale olive tag | 7.5 | 6.5 |
| AI tag | 4.9 | 6.9 |
| Friction tag | 6.3 | 5.6 |
| `text-vermillion` on `bg-bg` | 3.3 | 5.3 |
| `border-line` on `bg-bg` | 1.4 | 1.3 |

All text pairs pass AA in both themes. Vermilion does not pass for text in the light theme: it remains punctuation. `border-line` is a decorative line: it must never be the only cue for a state. If you create a new pair, calculate its contrast before using it.

## Layout

A screen can respect every colour and still fail. Layout says how to rank, space and separate.

### Making a block stand out

When you are asked to make an element “visible”, use hierarchy, in this order:

1. **Text size and weight**: a heading in `font-display font-semibold`, larger than what surrounds it.
2. **Space**: air around the block sets it apart better than a frame.
3. **A single solid action**: a `btn-primary` draws the eye to where action is needed.

Do not add a coloured background, a shadow or a line to “mark” a block.

### Action hierarchy

<!-- exemple: hierarchy -->

| Importance | Button | Appearance |
|---|---|---|
| The main action of the screen | `btn-primary` | Solid, olive green, with shadow |
| A neighbouring, less important action | `btn-secondary` | Outlined |
| A secondary or supporting action | `icon-btn` | Burgundy icon button |

- **Two buttons side by side: one solid, one outlined.** The more important one is solid, therefore green. Never two solid neighbours.
- **Burgundy is not a colour for a solid button with text.** It is used for icon buttons and step numbers.
- **A button that is not the main action stays neutral**: outlined or `bg-surface-2`, never pale olive.
- When in doubt, go down a notch: a screen with too little colour reads better than a screen where everything calls out.

### Nothing overlaps

- Align comparable elements in a **grid** (`grid grid-cols-3 gap-3`): one column per element.
- Put `min-w-0` on a child of `flex` or `grid` that contains text, otherwise it pushes its neighbours.
- **Fit the text size to the available width**, not to the desire for impact.
- On a small screen, switch to one column (`grid-cols-1 sm:grid-cols-3`) rather than shrinking the text. Nothing overflows horizontally.

### Lines

A line separates two pieces of content. It does not decorate.

- **A card** has a thin outline on its four sides: `border border-line`.
- **A horizontal line** goes between two stacked pieces of content from the same set: the rows of a table, the header and the body of a card.
- **No line under an isolated block**: it would separate nothing.
- `border-rule` (strong line) is reserved for heading rules and the outline of outlined buttons.

### Spacing

Multiples of 4 px (`gap-2`, `gap-3`, `p-4`, `p-5`). Between two blocks: `my-4` to `my-6`.

### Checking by eye

The script checks colours, shadows and capitals, not composition. If you can display the screen, look at it at 375 px and 1280 px wide: no text should touch another. If you cannot display it, say so rather than assuming it holds.

## Content

How texts are written and what goes with them.

### No all-caps text

<!-- exemple: nocaps -->

No text is displayed in all caps: neither button, nor tag, nor label, nor selector option, nor caption. A capital on the first word, the rest in lower case.

- No `uppercase` class, no `text-transform`, no letter spacing to imitate capitals.
- Labels are written in sentence case in the data.
- The only exceptions: acronyms (FR, EN, CV, PDF, IA) and the “ASL” monogram.

To build hierarchy without capitals, work with weight, size and colour.

### Number or icon

<!-- exemple: numbericon -->

A number states an order. An icon states a subject.

- **Number**: only for elements that follow one another — a flow, a process, an ordered list.
- **Icon**: for elements with no order between them. Choose an icon that matches the content, not a repeated decorative icon.
- If neither adds information, put nothing.

A number is written in two ways, depending on what it numbers:

- **In a round burgundy badge** (`bg-accent text-accent-fg`): the steps of a journey or an approach, numbered cards.
- **“01” in burgundy italics, without a badge** (`font-display italic text-accent-text`): the entries of a list or a menu — projects in the navigation drawer, section anchors, numbered lists in an answer.

### Two languages

No visible text is written in a component. Every label exists in French and in English:

- interface texts: `src/data/i18n.ts`;
- content of the answers: `src/data/knowledgeBase.ts`.

The component receives `t` (the texts) or `lang` as a prop.
