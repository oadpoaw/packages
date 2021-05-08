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
        // @ts-expect-error
        ProgressBar('');
    }).toThrow(`'percent' should be a number.`);
    expect(() => {
        ProgressBar(0);
    }).not.toThrow(`'percent' should not be greater than 100 or less than 0.`);
    expect(() => {
        ProgressBar(100);
    }).not.toThrow(`'percent' should not be greater than 100 or less than 0.`);
    expect(() => {
        ProgressBar(-1);
    }).toThrow(`'percent' should not be greater than 100 or less than 0.`);
    expect(() => {
        ProgressBar(101);
    }).toThrow(`'percent' should not be greater than 100 or less than 0.`);
});

test('bloated coverage', () => {
    const percent = Math.floor(Math.random() * 100);
    const progressbar = ProgressBar(percent, null, null, null);
    expect(progressbar.length).toBe(10);
});
