# Styling Conventions

- **CSS Modules:** Author component styles in `.module.scss` files; classes compile to camelCase in TypeScript. Avoid global selectors unless adding theme-level tokens.
- **Theme tokens:** Use CSS custom properties defined in `src/index.module.scss` (colors, elevation, shapes). Components should render with both `light` and `dark` appearance classes applied to a parent container.
- **Class composition:** Combine module classes with `buildClassName` to keep ordering predictable. Shared utilities (e.g., `translucentSurface`) live in `src/core/styles/ui.module.scss`.
- **Adaptive spacing/layout:** Accept `AdaptiveValue` props when sizing/margins can vary by breakpoint; resolve them with `useAdaptiveValue` and respect the breakpoints in `useMediaScreenSize`.
- **Structure:** Keep styles colocated with components and keep variant-specific rules (`filled`, `outlined`, etc.) inside the same module file.
- **Ripple/interaction:** Preserve focus/hover/pressed feedback used by existing components (e.g., `Ripple`), and ensure disabled states reflect MD3 token guidance.
