import TrimArray from '../src';

test('Simple Trim', () => {
    const array = new Array(Math.floor(Math.random() * 10 + 11))
        .fill(0)
        .map((_) => Math.floor(Math.random() * 100) + 100);
    const arr = new Array(5)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 100) + 100);
    expect(TrimArray(array).length).toBe(11);
    expect(TrimArray(arr).length).toBe(5);
    expect(TrimArray(arr)).toEqual(arr);
    expect(TrimArray(array, 2).length).toBe(3);
    expect(() => {
        // @ts-expect-error Testing Purposes
        TrimArray(12312);
    }).toThrow();

    expect(() => {
        // @ts-expect-error Testing Purposes
        TrimArray([], '123');
    }).toThrow();
});
