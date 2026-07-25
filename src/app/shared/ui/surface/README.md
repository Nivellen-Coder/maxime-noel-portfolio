# Surface

The `Surface` component is the foundational container of the Nova Design System.

It provides a consistent visual layer for grouping content while supporting multiple visual styles such as glassmorphism, solid backgrounds and outlined containers.

---

## Features

- ✅ Standalone Angular component
- ✅ Angular Signals API
- ✅ OnPush Change Detection
- ✅ SSR compatible
- ✅ Fully themeable
- ✅ Design Token driven
- ✅ Accessible by default
- ✅ Storybook documented

---

## Import

```ts
import { SurfaceComponent } from '@nova/ui/surface';
```

```ts
@Component({
  standalone: true,
  imports: [
    SurfaceComponent
  ]
})
export class ExampleComponent {}
```

---

## Basic usage

```html
<nds-surface>

    Content

</nds-surface>
```

---

## Variants

```html
<nds-surface variant="glass">
```

```html
<nds-surface variant="solid">
```

```html
<nds-surface variant="outlined">
```

```html
<nds-surface variant="ghost">
```

---

## Padding

```html
padding="none"
padding="xs"
padding="sm"
padding="md"
padding="lg"
padding="xl"
```

---

## Radius

```html
radius="none"
radius="xs"
radius="sm"
radius="md"
radius="lg"
radius="xl"
radius="full"
```

---

## Interactive

```html
<nds-surface interactive>

    ...

</nds-surface>
```

---

## Glow

```html
<nds-surface glow>

    ...

</nds-surface>
```

---

## Accessibility

Surface does not introduce additional semantics.

When interaction is required, developers should provide the appropriate HTML element or ARIA role.

Example:

```html
<button>

    <nds-surface interactive>

        Save

    </nds-surface>

</button>
```

---

## Design Tokens

Surface relies entirely on Nova Design System tokens.

Examples:

- `--nds-surface-glass-bg`
- `--nds-surface-solid-bg`
- `--nds-surface-border`
- `--nds-shadow-xl`
- `--nds-radius-xl`
- `--nds-space-8`

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

Latest two major versions.

---

## Future improvements

- Spotlight effect
- Mouse parallax
- Animated border
- Noise overlay
- Motion presets
- CSS Anchor Positioning support
