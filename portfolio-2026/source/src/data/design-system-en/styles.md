<!-- source-hash: 793e7e263f9c -->
# Styles

Colour, typography, shapes, elevation, icons. The source of truth for values remains `src/index.css`:
this file says what each style is for, it does not copy the values.

## Colour

Each colour has a single meaning. Everything goes through tokens, which change value with the theme.

### Surfaces and text

<!-- exemple: neutrals -->

| Class | Use |
|---|---|
| `bg-bg` | Background of the main area |
| `bg-sidebar` | Background of the navigation drawer |
| `bg-elevated` | Card, field, menu: what sits on the background |
| `bg-surface-2` | Hover, selected element, neutral button |
| `text-ink` | Main text |
| `text-muted` | Secondary text, caption |
| `bg-ink` + `text-bg` | Inverted neutral: selected option, Stop button. Never a hover state. |
| `border-line` | Standard outline of cards and fields |
| `border-rule` | Strong line: heading rule, outlined button |

Backgrounds are neutral and solid: no gradient, no texture, no translucent background, no large coloured surface.

### Dark theme

The dark theme uses the same tokens, with its own values in `src/index.css`.

- Backgrounds are almost neutral greys, barely warm: never brown or burgundy over a large surface. Colour stays on the elements that carry a meaning (olive, burgundy, turquoise, orange, vermilion).
- Text is an off-white with a hint of cream, not the palette's cream: on a dark background, overly coloured text reads less well and adds one more colour.
- Meaningful colours get lighter to keep their contrast; they keep the same meaning.

### Colours that carry meaning

<!-- exemple: meanings -->

| Colour | Meaning | Classes |
|---|---|---|
| Solid olive | Main action | `bg-olive` + `text-olive-fg` |
| Pale olive | Positive element: tag, result | `bg-olive-tint` + `text-olive-text` |
| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `bg-accent` + `text-accent-fg`, `bg-accent-tint` + `text-accent-text` |
| Turquoise | What comes from the AI | `bg-[var(--ai-tint)]` + `text-[var(--ai-text)]` |
| Orange | Friction point, alert | `bg-[var(--warn-tint)]` + `text-[var(--warn-text)]` |
| Vermilion | Punctuation: list bullet, caret, small arrow | `bg-vermillion`, `text-vermillion` |

### Reserved tokens

- `bg-bubble` + `text-bubble-fg`: the bubble of the sent message.
- `bg-[var(--overlay)]`: the scrim behind the navigation drawer, on small screens.
- `code-*`: only code blocks and the file preview. They stay dark in both themes.
- `hover:bg-accent-hover`: the hover of the send button.

### Do

- Use a token for every colour.
- Stay neutral if no meaning matches. Figures stay neutral.

### Don't

- Hard-code a colour, or use the `dark:` prefix.
- Repurpose a colour because it “would look good”.
- A pale olive button, a solid olive tag, vermilion text.

## Typography

Two typefaces, not one more: Poppins for headings, Outfit for everything else.

### Scale

<!-- exemple: typescale -->

| Use | Classes |
|---|---|
| Home heading | reserved for the home screen |
| Key figure | `font-display text-[1.7rem] font-semibold` |
| Section heading | `font-display text-[1.2rem] font-semibold` |
| Body text | `text-[15px]` or `text-sm` |
| Small label | `eyebrow` |
| Caption, detail | `text-xs`, `text-[12.5px]` |

### Rules

- Headings: `font-display` class, in `font-semibold`.
- Long text in `font-light`; what must stand out in `font-medium` or `font-semibold`.
- Build hierarchy through weight, size and colour, never through capitals (see `fondations.md`, “Content”).

## Shapes

Rounded shapes everywhere, with no sharp corner.

### Three radii

<!-- exemple: shapes -->

- Buttons, tags, badges: `rounded-full`.
- Cards, prompt input: `rounded-3xl`.
- Smaller inner elements: `rounded-2xl`.

## Elevation

Only one shadow exists, `shadow-signature`. It says “this is where you act”.

### Where it is used

<!-- exemple: elevation -->

Two places only: the prompt input (with its send button) and the main action of a screen (`btn-primary`).

### Do

- Set a card, a tag or a menu apart with a flat fill and a thin outline.

### Don't

- Add a shadow to “make it stand out”. If everything has a shadow, nothing stands out any more.

## Icons

A single library, `lucide-react`, between 12 and 18 px.

### Icon placement

<!-- exemple: iconplace -->

- In a button with a label, the icon is always to the right of the label.
- In a tag or before a name (a file, a role), it comes first: it qualifies the information.
- In a link written as text (LinkedIn, phone), it comes first too: it says which link it is. It is not a button: no background, no outline.

### Rules

- An icon matches the content, it is not repeated for decoration.
- A decorative icon carries `aria-hidden`.
