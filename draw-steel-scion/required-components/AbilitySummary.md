# AbilitySummary Component

## Description

Displays the full summary of a TTRPG class ability, including title, subtitle, keywords, action type, range, targets, added stats, results by tier, and optional effect.

## Props

```ts
type AbilitySummaryProps = {
  title: string;
  subtitle: string;
  keywords: string;
  actionType: string;
  range: string;
  targets: string;
  addedStats: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[];
  tier1Result: string;
  tier2Result: string;
  tier3Result: string;
  effect?: string;
  effectBeforeResult?: boolean; // Optional: defaults to false
};
```

## Layout

```
[Title] (Heading2)
[Subtitle] (Text)
[---------------------------] ← Horizontal rule
[keywords]                  [actionType]
[◩ range]                   [◎ targets]
[Power Roll + [addedStats.join(", ")]]

+--------+------------------+
| ≤11    | Tier 1 Result    |
| 12–16  | Tier 2 Result    |
| 17+    | Tier 3 Result    |
+--------+------------------+

Effect: [effect]
```

- Use emoji or SVG for ◩ and ◎.
- The effect appears _after_ the table by default, unless `effectBeforeResult` is true.

## Usage

Use for displaying detailed ability information in class views.

# Notes
1. Component Composition & Styling

The Title should use the Heading2 component.

The Subtitle, Keywords, ActionType, Range, and Targets should use the Text component with appropriate font sizing and layout.

The horizontal rule should be styled consistently with the design system — thin, subtle line.

The result table should be styled with borders, alternating row backgrounds (optional), and responsive design for smaller screens.

2. Icons & Symbols

◩ (range) and ◎ (targets) should ideally be replaced with custom SVGs or accessible icons for clarity and theming.

These icons should be accompanied by aria-labels for accessibility.

3. Accessibility (a11y)

Ensure semantic HTML (e.g., table, thead, tbody, tr, th, td).

Provide accessible labels and descriptions for screen readers.

Support keyboard navigation where applicable.

4. Responsiveness & Layout

On narrow screens, the tier result table should collapse gracefully, either into a stacked layout or a scrollable table.

Line wrapping should be handled gracefully for long subtitle or effect text.

5. Advanced Behavior

Optional prop collapsed?: boolean could be added to render the component in a minimized state (e.g. for ability previews).

Support for Markdown or limited HTML in effect field (e.g., <strong>, <em>, <ul>).

6. Theme Integration

Backgrounds, borders, and typography should inherit from Tailwind theme tokens.

Use design tokens for spacing, colors, and borders to ensure visual consistency.