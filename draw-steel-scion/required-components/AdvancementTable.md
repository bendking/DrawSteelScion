# AdvancementTable Component

## Description

Displays class progression from level 1 onward in a responsive table.

## Props

```ts
type AdvancementTableProps = {
  columns: string[]; // e.g. ["Features", "Abilities", "Special"]
  rows: Array<{ level: string; [key: string]: string }>;
};
```

## Behavior

- The first column is always "Level", rendered as the first column.
- Other columns follow the order in `columns[]`.
- All data is displayed in a responsive table with clear column headers and consistent row spacing.

## Example

```ts
columns: ["Features", "Abilities", "Special"];
rows: [
  {
    level: "1st",
    Features: "Second Wind",
    Abilities: "Strike",
    Special: "—",
  },
  {
    level: "2nd",
    Features: "Combat Reflexes",
    Abilities: "Improved Strike",
    Special: "—",
  },
];
```

## Usage

Use for displaying class advancement and progression tables.
