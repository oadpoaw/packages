import ArrayShuffle from '@oadpoaw/array-shuffle';

export function StringShuffle(str: string): string {
    if (typeof str !== 'string')
        throw new TypeError(`StringShuffle(str): 'str' should be a string.`);

    return ArrayShuffle(str.split('')).join('');
}
