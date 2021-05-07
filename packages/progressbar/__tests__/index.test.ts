import ProgressBar, { defaults } from '../src/';

test('Random Matcher', () => {
    const percent = Math.floor(Math.random() * 100);
    expect(ProgressBar(percent)).toBe(ProgressBar(percent));
});

test('Padding Matcher', () => {
    const padding = Math.floor(Math.random() * 100);
    expect(ProgressBar(50, padding).length).toEqual(padding);
});

test('Block Matcher', () => {
    const percent = Math.floor(Math.random() * 100);
    const block = 'X';
    expect(ProgressBar(percent, null, block)).toContain(block);
});

test('Pad Block Matcher', () => {
    const percent = Math.floor(Math.random() * 100);
    const padblock = 'O';
    expect(ProgressBar(percent, null, null, padblock)).toContain(padblock);
});

test('Should throw errors', () => {
    expect(() => {
        ProgressBar(0);
    }).not.toThrow(Error);
    expect(() => {
        ProgressBar(100);
    }).not.toThrow(Error);
    expect(() => {
        ProgressBar(-1);
    }).toThrow(Error);
    expect(() => {
        ProgressBar(101);
    }).toThrow(Error);
});

test('Randomize Matching with defaults', () => {
    const percent = Math.floor(Math.random() * 100);
    const padding = Math.floor(Math.random() * 100);
    const progressbar = ProgressBar(percent, padding, null, null);
    expect(progressbar).toContain(defaults.block);
    expect(progressbar).toContain(defaults.padBlock);
});
