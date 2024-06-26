type Parts = (string | false | undefined | null | number)[];

export default function buildClassName(...parts: Parts) {
    return parts.filter(Boolean).join(' ');
}
