# Button

Material Design 3 button with built-in ripple feedback and variant-based styling. Respects the current theme appearance (`light`/`dark`) provided by `ConfigProvider`.

## Props
| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"elevated", "filled", "filled-tonal", "outlined", "text"` | `"filled"` | Chooses the MD3 treatment and token set. Unknown values fall back to `filled` because of the lookup default. |
| `icon` | `React.ReactNode` | — | When provided, renders to the left of the label with adjusted padding. |
| `children` | `React.ReactNode` | — | Button label/content. |
| `className` / `style` | From `HTMLButtonElement` | — | Merged onto the root `<button>`. |
| `onClick` and other button props | From `HTMLButtonElement` | — | Additional attributes are forwarded through `cleanedProps`. |

## Usage
```tsx
import { Button, ConfigProvider } from "@nacteam/sdfui";

export const Actions = () => (
  <ConfigProvider>
    <div className="app light">
      <Button variant="filled" onClick={() => console.log("save")}>Save</Button>
      <Button variant="outlined" icon={<IconSave />}>
        Save draft
      </Button>
    </div>
  </ConfigProvider>
);
```

## Styling Notes
- Styles live in `src/components/Button/Button.module.scss` and use CSS custom properties from `src/index.module.scss` for MD3 color/elevation tokens.
- The component composes class names with `buildClassName` to combine the variant style, current `appearance`, optional icon class, the shared `translucentSurface` style, and any user `className`.
- A `Ripple` overlay is included to provide pressed feedback; keep it as the last child inside the button.
