export class Escapes {
    constructor() {
        throw new Error(
            `The '${this.constructor.name}' class cannot be instantiated.`,
        );
    }

    /**
     * Escapes Special Characters to be compatible with Regexs
     * So special characters would not error out regex parsing
     */
    static regex(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Escapes the character `@` address sign
     */
    static addressSign(str: string) {
        return str.replace(/@/g, '@' + String.fromCharCode(8203));
    }

    /**
     * Escapes the character ` backtick
     */
    static backticks(str: string) {
        return str.replace(/`/g, '`' + String.fromCharCode(8203));
    }
}
