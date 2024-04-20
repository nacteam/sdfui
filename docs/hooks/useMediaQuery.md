# `useMediaQuery(query: string) -> bool`
Checks if the current viewport matches the given media query.

**Example:**
```jsx
const isMd = useMediaQuery("(min-width: 768px)");

return (
    <span>
        {`Your device width is ${isMd ? "more" : "less"} than 768px.`}
    </span>
);
```

**Source:** [/src/hooks/media.ts#L4](/src/hooks/media.ts#L4)