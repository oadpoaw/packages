import processor from '../src';

test('Should work properly', () => {
    expect(() => {
        processor(console);
    }).not.toThrow();
});

test('Should throw an error', () => {
    expect(() => {
        processor(console);
    }).toThrow(Error);
});

test('Run bloated coverage', () => {
    process.emit('warning', new Error('bloated'));
});
