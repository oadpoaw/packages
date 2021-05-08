import type { Request, Response, NextFunction } from 'express';
import { HTTPError } from './HTTPError';

export function AsyncWrapper(
    fn: (req: Request, res: Response, next: NextFunction) => any,
) {
    return function WrappedAsync(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        fn(req, res, next).catch((err: any) => {
            next(new HTTPError(err, req));
        });
    };
}
