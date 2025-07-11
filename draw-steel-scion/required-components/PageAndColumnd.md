# Layout Components: Page & Column

This document describes the manual layout system for displaying Draw Steel class content using discrete `Page` and `Column` components. This structure gives granular control over content flow, allowing intentional placement of elements across pages and columns.

---

## Page Component

### Purpose

Represents a single “page” of content within the layout, with a fixed height and dashed separator below. Users scroll between pages vertically.

### Props

None required by default. Children are typically one or more `Column` components.

### Styles

- **Height:** `1000px`
- **Width:** `100%`
- **Padding:** As needed (e.g., `p-4`)
- **Border/Separator:** Bottom dashed border (`border-b border-dashed border-gray-400`)
- **Positioning:** Columns within the page are laid out horizontally with space between.

### Layout Notes

- Columns are arranged using `flex` layout (`flex-row`), aligned top-to-bottom.
- Use `gap-[100px]` or `space-x-[100px]` to maintain space between columns.

---

## Column Component

### Purpose

Defines a single vertical slice of content within a `Page`. Each page should contain 2 columns, manually placed.

### Props

None required; accepts any children content (headings, text, tables, etc.).

### Styles

- **Width:** `400px`
- **Height:** `100%` (fills the height of the page)
- **Overflow:** Content should flow naturally; if overflow occurs, developer should manually split into a new column or page.
- **Layout:** Vertical stack (`flex-col`), using standard spacing utilities like `space-y-4`.

---

## Example Usage (JSX-like pseudocode)

```tsx
<Page>
  <Column>
    <Heading1>Class Overview</Heading1>
    <Text>Draw Steel is a...</Text>
  </Column>
  <Column>
    <AbilitySummary ... />
  </Column>
</Page>

<Page>
  <Column>
    <AdvancementTable ... />
  </Column>
  <Column>
    <Heading2>Subclass Features</Heading2>
    <BulletList>
      <Text>Unique style per subclass</Text>
      ...
    </BulletList>
  </Column>
</Page>
```
