import createLogger from '../src';

test('Should not throw any errors', () => {
    expect(() => {
        const logger = createLogger();
        logger.info('asdasda');
        logger.error('asdasda');
        logger.warn('asdasda');
        logger.error(new Error('asdad'));
    }).not.toThrow();
});
