import { useEffect, useState } from "react";
import { AdaptiveValue } from "../core/types";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const updateMatches = () => {
            setMatches(mediaQuery.matches);
        };

        // Initial check
        updateMatches();

        const listener = () => {
            updateMatches();
        };

        // Add listener for changes in media query
        mediaQuery.addEventListener("change", listener);

        // Cleanup function to remove listener
        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    }, [query]); // Re-run effect when query changes

    return matches;
}

export const useMediaScreenSize = () => {
    // Returns true if the screen size is great than or equal to the given size
    const isXs = true;
    const isSm = useMediaQuery("(min-width: 576px)");
    const isMd = useMediaQuery("(min-width: 768px)");
    const isLg = useMediaQuery("(min-width: 992px)");
    const isXl = useMediaQuery("(min-width: 1200px)");
    
    return { isXs, isSm, isMd, isLg, isXl };
}

export const isAdaptiveValue = <T>(
    value: AdaptiveValue<T>
): value is Exclude<typeof value, T> => {
    const valueUpcast = value as Exclude<typeof value, T>;
    return (
        valueUpcast.xs !== undefined ||
        valueUpcast.sm !== undefined ||
        valueUpcast.md !== undefined ||
        valueUpcast.lg !== undefined ||
        valueUpcast.xl !== undefined
    );
}

export const useAdaptiveValue = <T, K>(
    value: AdaptiveValue<T>,
    defaultValue: K
): T | K => {
    const screenSize = useMediaScreenSize();
    if (isAdaptiveValue(value)) {
        if (screenSize.isXl && value.xl !== undefined) return value.xl;
        if (screenSize.isLg && value.lg !== undefined) return value.lg;
        if (screenSize.isMd && value.md !== undefined) return value.md;
        if (screenSize.isSm && value.sm !== undefined) return value.sm;
        return value.xs ?? defaultValue;
    } else {
        return value as T;
    }
}
