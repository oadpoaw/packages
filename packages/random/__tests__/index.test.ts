import Random from '../src';

test('Random', () => {
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

test('run constraints and type checking', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        Random.number('11');
    }).toThrow(`'max' should be a number.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Random.number(1, '');
    }).toThrow(`'min' should be a number`);
    expect(() => {
        Random.number(1, 2);
    }).toThrow(`'min' cannot be greater than or equal to 'max'.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Random.string('');
    }).toThrow(`'length' should be a number.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Random.string(11, [1231]);
    }).toThrow(`'chars' should be an array of strings.`);
    expect(() => {
        Random.string(-1);
    }).toThrow(`'length' cannot be less than or equal to 0.`);
    expect(() => {
        Random.string(10, []);
    }).toThrow(`'chars' cannot be empty.`);
});
