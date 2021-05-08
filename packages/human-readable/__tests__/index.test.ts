import HumanReadable from '../src';

test('make', () => {
    expect(HumanReadable(123)).toStrictEqual('123');
    expect(HumanReadable(1234)).toStrictEqual('1,234');
    expect(HumanReadable(1234567)).toStrictEqual('1,234,567');
    expect(HumanReadable(123, ' ')).toStrictEqual('123');
    expect(HumanReadable(1234, ' ')).toStrictEqual('1 234');
    expect(HumanReadable(1234567, ' ')).toStrictEqual('1 234 567');
});

test('type errors', () => {
    expect(() => {
        // @ts-expect-error
        expect(HumanReadable(''));
    }).toThrow(`'n' should be a number.`);
    expect(() => {
        // @ts-expect-error
        expect(HumanReadable(123, 0));
    }).toThrow(`'separator' should be a string.`);
});
