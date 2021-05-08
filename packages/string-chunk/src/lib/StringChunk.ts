export function StringChunk(str: string, size: number): string[] {
    if (typeof str !== 'string')
        throw new TypeError(
            `StringChunk(str, size): 'str' should be a string.`,
        );

    if (typeof size !== 'number')
        throw new TypeError(
            `StringChunk(str, size): 'size' should be a number.`,
        );

    if (size < 1)
        throw new RangeError(
            `StringChunk(str, size): 'size' should be greater than 1.`,
        );

    return str.match(new RegExp(`(.|[\r\n]){1,${size}}`, 'g'));
}
