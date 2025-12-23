# File Layout

High-level map of the repository and what belongs where:

```
.
├─ docs/
│  ├─ hooks/                  # End-user hook docs (existing library docs)
│  └─ contributors/           # Contributor-focused docs (this folder)
├─ src/
│  ├─ components/             # UI components, each with its own folder, styles, and tests
│  ├─ core/
│  │  ├─ theme/               # Theme context and system appearance detection
│  │  ├─ styles/              # Shared style snippets (e.g., translucent surface)
│  │  ├─ types/               # Shared types like AdaptiveValue
│  │  └─ util/                # Small helpers such as class name builders
│  ├─ hooks/                  # Reusable hooks (media queries, theme access)
│  ├─ index.module.scss       # MD3 design tokens and theme CSS variables
│  ├─ index.ts                # Library entrypoint exporting components/hooks/theme/types/utils
│  └─ App.tsx                 # Vite playground/demo for local development
├─ dist/                      # Build artifacts (CJS/ESM bundles, types) produced by Rollup
├─ rollup.config.mjs          # Library build pipeline
├─ vite.config.ts             # Playground/dev server config
├─ jest.config.cjs            # Unit test config (Jest + Testing Library)
├─ package.json               # Scripts, dependencies, package metadata
└─ AGENTS.md                  # Pointer for LLMs/automation to contributor docs
```

Add new components/hooks under `src/` with colocated styles and tests; export them through `src/index.ts` so they ship in the library build.
