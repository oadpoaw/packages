export function shorten(text: string, maxLen: number = 2000) {
    if (typeof text !== 'string')
        throw new TypeError(
            `shorten(text, maxLen): 'text' should be a type of string`,
        );
    if (typeof maxLen !== 'number')
        throw new TypeError(
            `shorten(text, maxLen): 'text' should be a type of number`,
        );
    return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
}
