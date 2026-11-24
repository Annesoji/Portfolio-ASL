<!-- source-hash: b4bd94f1e332 -->
---
name: asl-design-system
description: Design System of Anne-Sophie Leroy's portfolio — colours through tokens, neutral and solid surfaces, reserved shadow, colour meanings, component structure (buttons, tags, cards, menus), action hierarchy, layout and typography without all caps. Use it whenever you create or modify a component, a screen, a style, a colour or a button in this project, even if the request does not mention a “design system” (for example “add a card”, “make this block more visible”, “create a banner”).
---

# ASL portfolio Design System

This portfolio has a precise direction: restrained, readable, with colour reserved for what matters.
Your role is to build screens that blend into it, not to make them “prettier” in your own way.
When in doubt, go simpler.

## Before writing code

The system is organised in three files, from the most general to the most specific. Open the ones you need:

| You want to… | Read |
|---|---|
| Create or modify a component (button, tag, card, menu…) | `references/composants.md`: every component is described there (example, anatomy, states). Follow its structure rather than inventing one. |
| Choose a colour, a text size, a radius, an icon | `references/styles.md`. The source of truth for values remains `src/index.css`. |
| Compose a screen, write a label, check accessibility | `references/fondations.md` |

These three files are also the source of the portfolio's “Design System” page: a rule changed here changes the page.

## The four non-negotiable rules

These are the ones whose omission shows on screen straight away.

### 1. No hard-coded colour

Every colour goes through a token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Never `#640017`, `rgb(...)` or a standard Tailwind colour (`bg-red-500`, `text-gray-600`, `text-white`).

Why: tokens change value with the theme. A hard-coded colour stays fixed, so the screen breaks in dark mode, and it leaves the palette without anyone noticing.

Consequence: do not use Tailwind's `dark:` prefix. The theme is carried by `data-theme` on `<html>`; with tokens, both themes work without writing anything more.

- Yes: `className="bg-accent text-accent-fg"`
- No: `className="bg-[#640017] text-white"`

### 2. Neutral, solid surfaces

A background is a solid, neutral colour: `bg-bg`, `bg-elevated` or `bg-sidebar`. No gradient, no texture, no decorative shape, and no large coloured surface (an olive banner, a burgundy card).

Colour lives in the small elements that carry an action or a piece of information: buttons, tags, icon badges.

Why: background effects were tried and then removed, because they got in the way of reading without adding anything. And a large coloured surface overwhelms everything around it. To make a block stand out, work with text size, space and a single coloured action: see `references/fondations.md`, “Layout”.

- Yes: `className="rounded-3xl border border-line bg-elevated p-5"` with a `btn-primary` inside
- No: `className="bg-olive text-olive-fg"` across the full width

### 3. The shadow is reserved

Only one shadow exists, `shadow-signature`, and it serves two purposes: the prompt input (with its send button) and the main action of a screen (`btn-primary`). A card, a tag, a secondary menu or an image has no shadow: they stand out through a flat fill and a thin border (`border border-line`).

Why: if everything has a shadow, nothing stands out any more. The shadow says “this is where you act”.

### 4. One colour, one meaning

| Colour | Meaning | Tokens |
|---|---|---|
| Solid olive | Main action | `olive`, `olive-fg` |
| Pale olive | Positive element (tag, badge) | `olive-tint`, `olive-text` |
| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `accent`, `accent-fg`, `accent-text`, `accent-tint` |
| Turquoise | What comes from the AI | `--ai`, `--ai-text`, `--ai-tint` |
| Orange | Friction point, alert | `--warn-text`, `--warn-tint` |
| Vermilion | Punctuation only: list bullet, caret, small arrow. Never a text, never a background | `vermillion` |

Olive exists in two intensities, and the difference matters: solid for a button, pale for information. A tag is never solid olive, a button never pale olive: a button that is not the main action stays neutral (outlined or `bg-surface-2`).

Do not repurpose a colour because it “would look good”. If no meaning matches, stay neutral: `text-ink`, `text-muted`, `border-line`. Figures, in particular, stay neutral.

Why: as soon as a colour has two meanings, the reader can no longer rely on it.

## When the request contradicts a rule

Sometimes you are explicitly asked for what a rule forbids (“add a gradient”, “add a shadow so it stands out”). The person wants a result — for the block to be seen — not necessarily that particular means.

Build the compliant version that reaches the same goal, then say clearly what you did not do and why, and offer to do it anyway if they insist. Do not add it silently, and do not refuse without delivering anything.

## Composing the screen

A screen can follow the four rules and still fail: elements that overlap, lines that separate nothing. Before creating or reorganising a block, read “Layout” in `references/fondations.md`.

Worth remembering even without opening it: **no text is in all caps**, neither button, nor tag, nor label (no `uppercase` class), and **in a button, the icon is to the right of the label**.

## Before delivering

First run the check script on the files you created or modified:

```bash
node .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx
```

With no argument, it checks all of `src/`. It reports two levels:

- `✗` an error: a rule is broken (hard-coded colour, gradient, unplanned shadow, all-caps text), fix it before delivering;
- `?` to check: the script cannot decide on its own (a shadow, a coloured surface). See whether the use is legitimate.

The script does not see everything. It judges neither the meaning of a colour (rule 4), nor the structure of a component (icon on the right, suggestion card), nor the composition: a text that covers another escapes it. These points remain yours.

If you have to depart from a rule, write the reason just above the line, then say so clearly in your reply:

```tsx
{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}
```

A reported deviation is better than a hidden one.
