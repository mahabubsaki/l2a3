import mongoose, { Error } from 'mongoose';
import { TGenericErrorResponse } from '../interface/error';

const handleCastError = (
    err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {

    const statusCode = 400;

    return {
        statusCode,
        message: 'Invalid ID',
        errorDetails: Object.entries((err as Error.ValidationError)?.errors)[0][1],
        errorMessage: `${Object.entries((err as Error.ValidationError)?.errors)[0][1].value} is not a valid ID!`,
        stack: err.stack,
        success: false
    };
};

export default handleCastError;