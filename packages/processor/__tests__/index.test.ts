import processor from '../src';

test('processor', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        processor(0);
    }).toThrow(`'logger' should be an object.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        processor({});
    }).toThrow(`'logger.error' should be a function.`);
    expect(() => {
        // @ts-expect-error Testing Purposes
        processor({
            error: () => {
                console.log('boop');
            },
        });
    }).toThrow(`logger.warn' should be a function.`);
    processor(console);
    expect(() => {
        processor(console);
    }).toThrow(Error);
});

test('Run bloated coverage', () => {
    process.emit('warning', new Error('bloated'));
});
