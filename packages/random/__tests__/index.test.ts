import Random from '../src';

test('Random', () => {
    expect(() => {
        new Random();
    }).toThrow();
    expect(() => {
        Random.number();
    }).not.toThrow();
    expect(() => {
        Random.string();
    }).not.toThrow();
});

test('Random Number in range', () => {
    const max = Math.floor(Math.random() * 100) + 100;
    const min = Math.floor(Math.random() * 100);
    const integer = Random.number(max, min);
    expect(integer).toBeGreaterThanOrEqual(min);
    expect(integer).toBeLessThanOrEqual(max);
});

test('Random String in length', () => {
    const length = Math.floor(Math.random() * 100);
    expect(Random.string(length).length).toStrictEqual(length);
});

test('Random String with Selected Characters', () => {
    const length = Math.floor(Math.random() * 100);
    const chars = [...'abcdef123456789'];
    const str = Random.string(length, chars);
    expect(chars).toEqual(expect.arrayContaining([...str]));
});
