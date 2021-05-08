import ArrayShuffle from '../src/';

test('Shuffle an array and must be equal to', () => {
    const array = new Array(16)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 420).toString(36));
    const shuffled = ArrayShuffle(array);
    for (const item of array) expect(shuffled).toContain(item);
});

test('Shuffled array should be equal as the original array size', () => {
    const array = new Array(16)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 420).toString(36));
    const shuffled = ArrayShuffle(array);
    expect(shuffled.length).toBe(array.length);
});

test('should throw an error', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        ArrayShuffle(12313);
    }).toThrowError(TypeError);
});
