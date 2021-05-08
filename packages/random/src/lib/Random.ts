const defaults = {
    max: 100,
    min: 0,
    chars: [
        ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    ],
};

export class Random {
    constructor() {
        throw new Error(
            `The '${this.constructor.name}' class cannot be instantiated.`,
        );
    }

    static number(max: number = defaults.max, min: number = defaults.min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static string(length: number = 10, chars: string[] = defaults.chars) {
        return [...Array(length)]
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join('');
    }
}
