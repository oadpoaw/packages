export default function differentiate<T>(array_1: T[], array_2: T[]): T[] {
    return array_1.filter((i) => array_2.indexOf(i) < 0);
}
