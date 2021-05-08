export const defaults = {
    padding: 10,
    block: '■',
    padBlock: '□',
};

export function ProgressBar(
    percent: number,
    padding: number = defaults.padding,
    block: string = defaults.block,
    padblock: string = defaults.padBlock,
): string {
    if (percent < 0 || percent > 100)
        throw new Error(
            `(percent, padding?, block?, padblock?) => string; 'percent' should not be greater than 100 or less than 0.`,
        );

    if (!padding) padding = defaults.padding;
    if (!block || block.length !== 1) block = defaults.block;
    if (!padblock || padblock.length !== 1) padblock = defaults.padBlock;

    return block
        .repeat(Math.floor(percent * (padding * 0.01)))
        .padEnd(padding, padblock);
}
