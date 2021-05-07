interface Logger {
    error: (err: any) => any;
    warn: (err: any) => any;
}

let hasBeenCalled = false;

export default function processor(logger: Logger) {
    if (hasBeenCalled)
        throw new Error(
            `processor(...) has already been called and it cannot be called twice or more`,
        );

    process.on('uncaughtException', (err) => {
        /* istanbul ignore next */
        logger.error(err);
        process.exit(1);
    });

    process.on('warning', (err) => {
        /* istanbul ignore next */
        logger.warn(err);
    });

    process.on('unhandledRejection', (reason) => {
        /* istanbul ignore next */
        logger.error(reason);
    });

    hasBeenCalled = true;
}
