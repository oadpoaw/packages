import differentiate from '../src/';

test('Differentiate', () => {
    const arr = [1, 2, 3, 6, 7];
    const arr2 = [2, 3, 4, 5];
    const diff = differentiate(arr, arr2);
    expect(diff).toContain(1);
    expect(diff).toContain(6);
    expect(diff).toContain(7);
});

test('type checks', () => {
    expect(() => {
        //@ts-expect-error
        differentiate(1234, []);
    }).toThrow('array_1');
    expect(() => {
        //@ts-expect-error
        differentiate([], 1234);
    }).toThrow('array_2');
});
