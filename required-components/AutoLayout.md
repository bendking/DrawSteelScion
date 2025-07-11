# Layout Component

## Description

The `Layout` component is the container that displays the full class view as a pseudo-document. It accepts structured content (using other components such as `Title`, `Heading1–5`, `Text`, `AbilitySummary`, etc.) and automatically organizes it into visually distinct "pages" that simulate a document-style flow.

Each page is composed of **two columns**, and content automatically flows into the next page when vertical space is exhausted.

## Key Features

* **Dynamic Paging:** Automatically wraps overflowing content onto a new page.
* **Two-Column Layout:** Each page is split into left and right columns.
* **Full-Viewport Height:** Each page matches the full height of the viewport (`100vh`).
* **Page Separator:** Pages are separated visually by a **dashed horizontal line**.
* **Scroll Navigation:** Users scroll vertically to view content across multiple pages (not true pagination).
* **Component-Agnostic:** The layout accepts any valid child component, and calculates flow based on height.

## Props

```ts
type LayoutProps = {
  children: React.ReactNode;
};
```

## Behavior

* The layout engine calculates height of each component and fills two columns per page.
* When a component doesn't fit on the current page, it flows into the next one.
* On small screens, columns stack vertically but still maintain paging behavior.

## Structure (Simplified)

```
|-------------------------------| ← Page 1 (100vh)
| Column 1       | Column 2     |
|                |              |
|-------------------------------| ← Dashed Separator
|-------------------------------| ← Page 2 (100vh)
| Column 1       | Column 2     |
|                |              |
|-------------------------------| ← Dashed Separator
...
```

## Styling Notes

* Tailwind CSS utility classes should be used for layout (`grid`, `gap`, `columns-2`, `min-h-screen`, etc.).
* Ensure consistent padding and spacing between columns and pages.
* Separator line: `border-t-2 border-dashed border-gray-400 my-8` (or similar).

## Accessibility & Performance

* Ensure page separators are non-obtrusive for screen readers.
* Use virtualization (if needed) for performance with large content sets.
* All child components should retain their semantic structure.

## Usage

Use the `Layout` component as the main container for rendering full class views. Combine it with `AbilitySummary`, `AdvancementTable`, headings, and text components to build a complete TTRPG class sheet presentation.

---

This component forms the backbone of the content display system, providing an immersive, structured reading experience.
