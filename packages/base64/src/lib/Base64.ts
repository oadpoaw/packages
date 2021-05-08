export const Base64 = {
    encode: (str: string) => {
        if (typeof str !== 'string')
            throw new TypeError(
                `Base64.encode(str): 'str' should be a string.`,
            );
        return Buffer.from(str).toString('base64');
    },
    decode: (str: string) => {
        if (typeof str !== 'string')
            throw new TypeError(
                `Base64.decode(str): 'str' should be a string.`,
            );
        return Buffer.from(str, 'base64').toString('utf-8');
    },
};
