import type { Request, Response, NextFunction } from 'express';
import type { HTTPError } from './HTTPError';

export function makeCatcher(
    Logger: { error: (err: any) => any } | false = false,
) {
    return function (
        err: HTTPError,
        _req: Request,
        res: Response,
        _next: NextFunction,
    ) {
        if (Logger) Logger.error(err.error);

        res.status(err.status ?? 404);

        if (!res.headersSent) {
            res.json({
                message: err.message ?? 'Not Found',
                error:
                    process.env.NODE_ENV === 'production'
                        ? !err
                            ? {}
                            : err
                        : null,
            });
        }
    };
}
