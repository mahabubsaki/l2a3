import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/error';

const handleCastError = (
    err: mongoose.Error.CastError,
): TGenericErrorResponse => {
    const errorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];

    const statusCode = 400;

    return {
        statusCode,
        message: 'Invalid ID',
        errorDetails: [],
        errorMessage: '',
        stack: err.stack,
        success: false
    };
};

export default handleCastError;