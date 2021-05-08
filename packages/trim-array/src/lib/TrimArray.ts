export function TrimArray(array: any[], maxLen: number = 10): any[] {
    if (array.length < maxLen) {
        return array;
    }
    array = array.slice(0, maxLen);
    array.push(`${array.length - maxLen} more...`);
    return array;
}
