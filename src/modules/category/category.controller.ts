/* Controller content */

import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ICategory } from "./category.interface";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { categoryPost } from "./category.service";

export const categoryPostController = catchAsync(async (req: Request, res: Response) => {

    const userData: ICategory = req.body;
    const result = await categoryPost(userData);
    sendResponse<ICategory>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Categories retrieved successfully"
    });
});