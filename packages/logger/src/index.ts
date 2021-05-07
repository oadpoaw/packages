import winston from 'winston';

export default function createLogger(transports: winston.transport[] = []) {
    return winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.errors({ stack: true }),
            winston.format.prettyPrint(),
            winston.format.printf(({ level, message, stack }) => {
                return `[${new Date()
                    .toLocaleString()
                    .toUpperCase()}] [${level}]: ${stack ?? message}`;
            }),
        ),
        defaultMeta: { service: 'user-service' },
        transports: [new winston.transports.Console(), ...transports],
    });
}
