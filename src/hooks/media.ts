import { useEffect, useState } from "react";

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
