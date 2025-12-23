# Component Docs Format

Use this folder to document each exported component. Follow the same outline for consistency:

1. **Overview:** What the component does and any design constraints (e.g., MD3 alignment, reliance on theme tokens).
2. **Props:** Table of props with types, defaults, and behavioral notes. Call out any HTML props passed through.
3. **Usage:** Minimal JSX examples that include required providers (e.g., `ConfigProvider`) and show common variants.
4. **Styling/behavior:** Describe how theme tokens, CSS modules, and helpers like `buildClassName` are applied, plus any responsive or adaptive props.
5. **Testing expectations:** Mention existing test coverage and what to add when changing behavior.

Add one `.md` file per component (e.g., `Button.md`) and keep code snippets small and runnable.
