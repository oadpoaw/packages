/**
 * 
 * @param array The Array to chunkify
 * @param size Size of the chunks
 */
 export default function ArrayChunk<T>(array: T[], size: number): T[][] {
    const clone = array.slice();

    return new Array(Math.ceil(clone.length / size))
        .fill(0)
        .map(_ => clone.splice(0, size));
  
}