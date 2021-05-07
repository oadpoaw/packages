import Escapes from '../src';

test('Instantiating class should throw an error', () => {
    expect(() => {
        new Escapes();
    }).toThrow(Error);
});

test('Should not throw any errors', () => {
    expect(() => {
        Escapes.regex("123123][[];';l./,12");
        Escapes.addressSign('@@,pdafdsaufh @@@');
        Escapes.backticks('akjf`j`kj`khh`h`');
    }).not.toThrow();
});
