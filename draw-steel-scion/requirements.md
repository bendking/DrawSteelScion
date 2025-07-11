# requirements.md

## Overview

This document outlines the core components and style requirements for a web app that displays a class view from the TTRPG **Draw Steel**. The app will be developed using **TypeScript**, **React**, and **Tailwind CSS**.

---

## Typography & Heading Components

Each heading is a reusable component with consistent font and styling:

| Component Name | Font               | Size | Capitalization       | Underlined |
| -------------- | ------------------ | ---- | -------------------- | ---------- |
| `Title`        | Fraunces Black     | 20px | All Caps             | Yes        |
| `Heading1`     | Fraunces Black     | 16px | Title Case           | Yes        |
| `Heading2`     | Fraunces Black     | 16px | Title Case           | No         |
| `Heading3`     | Fraunces ExtraBold | 14px | Title Case           | No         |
| `Heading4`     | Fraunces ExtraBold | 12px | Title Case           | No         |
| `Heading5`     | Fraunces Black     | 10px | Title Case           | No         |
| `Text`         | Alegreya           | 10px | Sentence Case / None | No         |

Tailwind utility classes should reflect these specs (e.g. `text-[20px] font-black uppercase underline` for `Title`).

---

## Component: `BulletList`

* **Font:** Same as `Text` component (Alegreya, 10px).
* **Bullet Shape:** Diamond (`◆` or SVG icon).
* **Implementation:** Children passed to `BulletList` are rendered using the `Text` component styling.

---

## Component: `AbilitySummary`

Displays the full summary of a TTRPG class ability.

### Props

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

### Layout

Render format:

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

* Use emoji or SVG for ◩ and ◎.
* The effect appears *after* the table by default, unless `effectBeforeResult` is true.

---

## Component: `AdvancementTable`

Displays class progression from level 1 onward.

### Props

```ts
type AdvancementTableProps = {
  columns: string[]; // e.g. ["Features", "Abilities", "Special"]
  rows: Array<{ level: string; [key: string]: string }>;
};
```

### Behavior

* The first column is always `"Level"`, rendered as the first column.
* Other columns follow the order in `columns[]`.
* All data is displayed in a responsive table with clear column headers and consistent row spacing.

### Example

```ts
columns: ["Features", "Abilities", "Special"]
rows: [
  {
    level: "1st",
    Features: "Second Wind",
    Abilities: "Strike",
    Special: "—"
  },
  {
    level: "2nd",
    Features: "Combat Reflexes",
    Abilities: "Improved Strike",
    Special: "—"
  }
]
```

---

## Notes

* Tailwind classes should be used exclusively for layout and styling.
* All components should be designed with reusability in mind.
* Fonts must be properly loaded (e.g., via Google Fonts or locally hosted).

---

## TODO

* [ ] Define icon assets for `◩` and `◎`
* [ ] Implement type-safe prop interfaces in TypeScript
* [ ] Finalize theme colors and spacing tokens for consistent layout
