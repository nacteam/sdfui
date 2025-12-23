# Contributor Guide

Superdef UI (SDFUI) is a React + TypeScript Material Design 3 component library. Components are authored with SCSS modules and build-time tokens, packaged with Rollup for library consumers, and developed/tested via Vite + Jest.

## Architecture at a Glance
- **Library-first exports:** `src/index.ts` re-exports components, hooks, theme utilities, and the `buildClassName` helper; `rollup.config.mjs` builds CJS/ESM bundles and extracts CSS modules.
- **Theming:** `ConfigProvider` exposes `appearance` via `ThemeContext` and components pass `light`/`dark` class names through to trigger the CSS custom properties declared in `src/index.module.scss`.
- **Styling:** SCSS modules are compiled to camelCase classnames; shared utility styles live in `src/core/styles/ui.module.scss`; component styles rely on the design tokens in `src/index.module.scss` and `buildClassName` to compose classes.
- **Responsiveness:** Layout/spacings accept `AdaptiveValue` inputs and resolve through `useAdaptiveValue` + `useMediaScreenSize` in `src/hooks/media.ts`.
- **Developer tooling:** Vite powers the playground (`src/App.tsx`) and Jest + Testing Library cover unit tests alongside components.

## What to Read
- `docs/contributors/conventions/README.md` — index of workflow, PR, style, and file layout conventions.
- `docs/contributors/conventions/file.md` — current file/folder layout and what lives where.
- `docs/contributors/conventions/workflow.md` — how tasks are tracked in GitHub issues/projects.
- `docs/contributors/conventions/pullRequest.md` — PR title/body patterns and squash-merge expectations.
- `docs/contributors/conventions/styles.md` — styling and theme token expectations for new work.
- `docs/contributors/components/README.md` — how to document components in this folder.
- `docs/contributors/components/Button.md` — reference component doc example.
- `docs/contributors/hooks/README.md` — notes on documenting contributor-facing hooks.

Refer back here whenever adding components, hooks, or docs to keep the documentation consistent.
