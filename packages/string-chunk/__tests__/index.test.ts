import StringChunk from '../src';

test('string chunking', () => {
    expect(StringChunk('123456789', 2).length).toBe(5);
    expect(StringChunk('12 13 14 15 16', 3)).toStrictEqual([
        '12 ',
        '13 ',
        '14 ',
        '15 ',
        '16',
    ]);
});

test('type/range errors', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        StringChunk(0);
    }).toThrow(`'str' should be a string.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        StringChunk('', '');
    }).toThrow(`'size' should be a number.`);
    expect(() => {
        StringChunk('', 0);
    }).toThrow(`'size' should be greater than 1.`);
});
