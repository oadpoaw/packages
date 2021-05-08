import Escapes from '../src';

test('Instantiating class should throw an error', () => {
    expect(() => {
        new Escapes();
    }).toThrow(Error);
});

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
        //@ts-expect-error
        Escapes.regex(12);
    }).toThrow(`'str' should be a string.`);
    expect(() => {
        //@ts-expect-error
        Escapes.addressSign(12);
    }).toThrow(`'str' should be a string.`);
    expect(() => {
        //@ts-expect-error
        Escapes.backticks(12);
    }).toThrow(`'str' should be a string.`);
});
