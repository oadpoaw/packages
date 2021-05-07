import { Request, Response, NextFunction } from 'express';

export default function AsyncWrapper(
    fn: (req: Request, res: Response, next: NextFunction) => any,
) {
    return function (req: Request, res: Response, next: NextFunction) {
        fn(req, res, next).catch((err: any) => {
            next(new HTTPError(err, req));
        });
    };
}

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

export class HTTPError extends Error {
    constructor(err: Error, req: Request, status = 500) {
        super(err.message);
        this.name = err.name;
        this.status = status;
        this.method = req.method;
        this.path = req.path;
        this.error = err;
    }

    status: number;
    method: string;
    path: string;
    error!: Error;
}
