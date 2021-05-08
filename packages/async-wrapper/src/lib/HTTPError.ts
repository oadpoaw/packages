import type { Request } from 'express';

export class HTTPError extends Error {
    public status: number;
    public method: string;
    public path: string;
    public error!: Error;

    public constructor(err: Error, req: Request, status = 500) {
        super(err.message);
        this.name = err.name;
        this.status = status;
        this.method = req.method;
        this.path = req.path;
        this.error = err;
    }
}
