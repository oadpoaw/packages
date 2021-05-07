export default class Base64 {
    constructor() {
        throw new Error(
            `The '${this.constructor.name}' class cannot be instantiated.`,
        );
    }

    static encode(str: string) {
        return Buffer.from(str).toString('base64');
    }

    static decode(str: string, encoding: BufferEncoding = 'utf-8') {
        return Buffer.from(str, 'base64').toString(encoding);
    }
}
