# `useAdaptiveValue<T, K>(value: AdaptiveValue<T>, defaultValue: K) -> T | K`
Internal hook that is used for resolving what value from `AdaptiveValue<T>` should be used based on current viewport width.

## `AdaptiveValue<T>`
It is special type that can be either `T` (in this case value of type `T` will be used regardless of viewport width) or an object with keys "xs", "sm", "md", "lg", "xl" (at least one of these keys should be specified) and values of type T.

## How `AdaptiveValue<T>` objects are treated
Let the viewport width be 790px. According to [the table](/docs/hooks/useMediaScreenSize.md) with screen width constants, this screen is middle-size (`md`). If `md` key is specified in `AdaptiveValue` object, it will be used. If not, we try to find and use a value for less screen sizes (starting from `sm` to `xs`). We use the last defined value that is less or equal to viewport width. If there are no such values specified, we use the default value, provided as a second argument to this hook.

**Example:**
```jsx
const value = {
    "xs": "1px",
    "md": "5px"
}
const adaptiveValue = useAdaptiveValue(value, "1px");

return (
    <span style={{padding: adaptiveValue}}>
        I am span. My padding on small devices will be equal to 1px, and on tablets and PCs to 5px.
    </span>
);
```

```jsx
const value = "10px";
const adaptiveValue = useAdaptiveValue(value, "unreachable");

return (
    <span style={{padding: adaptiveValue}}>
        I am span. My padding is not really adaptive. It is always 10px.
    </span>
);
```

```jsx
const value = {
    md: "Tablet",
    lg: "PC"
};
const adaptiveValue = useAdaptiveValue(value, "What is this device with small screen?..");
// xs, sm -> "What is this device with small screen?.."
// md -> "Tablet"
// lg, xl -> "PC"
return (
    <span>
        You are using {adaptiveValue}
    </span>
);
```

This hook is actively used by our components (like `Grid`), but you can also use it in your own components!

**Source:** [/src/hooks/media.ts#L57](/src/hooks/media.ts#L57)
