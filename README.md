# Aprila Design System

A React component library with a warm, earthy theme built with CSS Modules and CSS custom properties. Ships with light and dark mode support out of the box.

## Installation

```sh
npm install @zudenkovas/aprila-design-system
```

## Usage

Import the styles once at the root of your app, then use the components:

```tsx
import '@zudenkovas/aprila-design-system/styles';
import { Button, Input, Typography } from '@zudenkovas/aprila-design-system';

function App() {
  return (
    <>
      <Typography variant="h1">Hello</Typography>
      <Input placeholder="Enter your name" />
      <Button variant="primary" label="Submit" />
    </>
  );
}
```

## Components

### Button

Supports variants: `primary`, `secondary`, `danger`, `outline`, `ghost`, `link` and sizes: `sm`, `md`, `lg`.

```tsx
<Button variant="primary" size="md" label="Click me" />
```

### Input

A styled input that extends all native `<input>` attributes.

```tsx
<Input type="email" placeholder="you@example.com" />
```

### Typography

Heading and paragraph styles using DM Serif Display (headings) and DM Sans (body). Supports variants `h1`–`h5` and `p`, with optional `color` (`default`, `primary`, `muted`, `destructive`).

```tsx
<Typography variant="h2" color="primary">Section Title</Typography>
<Typography variant="p">Body text goes here.</Typography>
```

## Theming

The library uses CSS custom properties for all colors and typography. Override any token on `:root` to customize:

```css
:root {
  --primary: hsl(220, 70%, 50%);
  --font-heading: 'Georgia', serif;
}
```

Add the `dark` class to any parent element to activate dark mode:

```html
<html class="dark">
```

## Development

```sh
npm install
npm run storybook     # launch Storybook
npm run build:lib     # build the library to dist/
```

## License

MIT