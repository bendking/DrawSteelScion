# Layout Component

## Description

The `Layout` component serves as the container for all `Page` components. It defines the full scrolling document view and inserts visual separators (dashed lines) between each page.

---

## Usage

```tsx
<Layout>
  <Page>...</Page>
  <Page>...</Page>
  <Page>...</Page>
</Layout>
```

## Responsibilities

- Stack `Page` components vertically
- Insert a dashed line separator between each page (except the last)
- Handle full-document vertical scrolling
- Maintain consistent spacing and visual rhythm

## Styles

- **Display:** `flex flex-col`
- **Width:** `100%`
- **Scroll Behavior:** Default vertical scroll; no snapping unless explicitly needed
- **Gap Between Pages:** Use `border-b border-dashed border-gray-400` on each `Page` except the last

> The dashed line is not the responsibility of the `Page` component directly — it is inserted between pages by the `Layout`.

## Implementation Notes

- The `Layout` component can use a wrapper function or utility to insert separators conditionally between pages.
- Alternatively, handle styling via `:not(:last-child)` pseudo-selector in CSS or apply the border-b directly within each `Page`, with the last page skipping it.

## Accessibility

- Ensure the layout scrolls naturally and doesn't trap focus
- Use semantic `section` or `article` tags inside `Page` components if appropriate

## Responsive Behavior

- The layout is primarily vertical and works naturally across screen sizes
- Individual `Page` and `Column` components are responsible for their own responsive behavior (e.g. stacking columns)

## Related Components

- **Page:** Represents a single page of content within the layout
- **Column:** Defines a vertical region of content inside a page

The `Layout` component creates the outer structure for displaying Draw Steel content as a flowing, pseudo-paged document.
