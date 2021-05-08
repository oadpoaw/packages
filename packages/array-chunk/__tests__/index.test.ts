import ArrayChunk from '../src/';

test('Chunk an array with sum of chunks is 5', () => {
    expect(ArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2).length).toBe(5);
});

test('type checking and constraints', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        ArrayChunk(1234);
    }).toThrow(`'array' should be an array.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        ArrayChunk([], '');
    }).toThrow(`'size' should be number.`);
    expect(() => {
        ArrayChunk([], 0);
    }).toThrow(`'size' should be greater than 0.`);
});
