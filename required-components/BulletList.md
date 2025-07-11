# BulletList Component

## Description

A reusable list component for displaying bulleted lists with diamond-shaped bullets.

- **Font:** Alegreya (same as Text component)
- **Size:** 10px
- **Bullet Shape:** Diamond (`◆`) or SVG icon
- **Children:** Rendered using Text component styling

## Tailwind Example

```tsx
<ul className="list-none pl-4">
  <li className="before:content-['◆'] before:mr-2 font-alegreya text-[10px]">
    List item
  </li>
</ul>
```

## Usage

Use for bulleted lists throughout the app, especially where a custom diamond bullet is desired.
