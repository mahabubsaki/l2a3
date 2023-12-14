

export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorDetails: any;
    success: boolean;
    stack: string | undefined;
    errorMessage: string;
};