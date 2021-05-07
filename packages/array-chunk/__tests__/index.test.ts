import ArrayChunk from '../src/';

test('Chunk an array with sum of chunks is 5', () => {
    expect(ArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2).length).toBe(5);
});
