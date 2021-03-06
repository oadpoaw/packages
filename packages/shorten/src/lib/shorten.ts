export function shorten(text: string, maxLen = 2000) {
    if (typeof text !== 'string')
        throw new TypeError(
            `shorten(text, maxLen): 'text' should be a string.`,
        );
    if (typeof maxLen !== 'number')
        throw new TypeError(
            `shorten(text, maxLen): 'text' should be a number.`,
        );
    return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
}
