type AtLeastOne<T> = { [K in keyof T]:
    { [L in K]: T[L] } &
    { [L in Exclude<keyof T, K>]?: T[L] }
}[keyof T];

export type AdaptiveValue<T> = T | AtLeastOne<{
    xs: T,
    sm: T,
    md: T,
    lg: T,
    xl: T
}>;
