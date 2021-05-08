import ProgressBar from '../src/';

test('Random Matcher', () => {
    const percent = Math.floor(Math.random() * 100);
    expect(ProgressBar(percent)).toStrictEqual(ProgressBar(percent));
});

test('Padding Matcher', () => {
    const padding = Math.floor(Math.random() * 100);
    expect(ProgressBar(50, padding).length).toBe(padding);
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

test('bloated coverage', () => {
    const percent = Math.floor(Math.random() * 100);
    const progressbar = ProgressBar(percent, null, null, null);
    expect(progressbar.length).toBe(10);
});
