import { Response } from 'express';

type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    meta?: {
        page: number;
        total: number;
        limit: number;
    };
    data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
        meta: data?.meta ? data.meta : null
    });
};

export default sendResponse;