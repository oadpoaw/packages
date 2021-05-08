import StringShuffle from '../src';

test('should string shuffling', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const shuffled = StringShuffle(str);
    expect(shuffled.length).toBe(str.length);
    expect(shuffled).not.toStrictEqual(str);
    for (const char of [...str]) expect(shuffled).toContain(char);
});

test('should type error', () => {
    expect(() => {
        // @ts-expect-error
        StringShuffle(0);
    }).toThrow(`'str' should be a string.`);
});
