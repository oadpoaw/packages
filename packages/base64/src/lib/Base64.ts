export class Base64 {
    constructor() {
        throw new Error(
            `The '${this.constructor.name}' class cannot be instantiated.`,
        );
    }

    static encode(str: string) {
        if (typeof str !== 'string')
            throw new TypeError(
                `Base64.encode(str): 'str' should be a string.`,
            );
        return Buffer.from(str).toString('base64');
    }

    static decode(str: string) {
        if (typeof str !== 'string')
            throw new TypeError(
                `Base64.decode(str): 'str' should be a string.`,
            );
        return Buffer.from(str, 'base64').toString('utf-8');
    }
}
