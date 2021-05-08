import Escapes from '../src';

test('Should not throw any errors', () => {
    expect(() => {
        const str = Escapes.regex("123123][[];';l./,12");
        Escapes.addressSign('@@,pdafdsaufh @@@');
        Escapes.backticks('akjf`j`kj`khh`h`');
        new RegExp(str);
    }).not.toThrow();
});

test('type checking', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        Escapes.regex(12);
    }).toThrow(`'str' should be a string.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Escapes.addressSign(12);
    }).toThrow(`'str' should be a string.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Escapes.backticks(12);
    }).toThrow(`'str' should be a string.`);
});
