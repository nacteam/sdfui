# `useMediaScreenSize() -> { isXs: bool, ..., isXl: bool }`
Returns an object with keys "isXs", "isSm", "isMd", "isLg", "isXl" and boolean values. If `is<screenSize>` is `true`, it means that current viewport width is great or equal than predefined screen size constant.

Constants values:
| xs | sm | md | lg | xl |
| -- | -- | -- | -- | -- |
| 0  | 576px | 768px | 992px | 1200px |

**Example:**
```jsx
const screenSize = useMediaScreenSize();

return (
    <span>
        Is XS: {screenSize.isXs.toString()} <br />
        Is SM: {screenSize.isSm.toString()} <br />
        Is MD: {screenSize.isMd.toString()} <br />
        Is LG: {screenSize.isLg.toString()} <br />
        Is XL: {screenSize.isXl.toString()} <br />
    </span>
);
```

```
Is XS: true
Is SM: true
Is MD: true
IS LG: true <-- actual screen size
Is XL: false
```

**Source:** [/src/hooks/media.ts#33](/src/hooks/media.ts)
