import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ICourse } from "./course.interface";
import { coursePost } from "./course.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";


export const coursePostController = catchAsync(async (req: Request, res: Response) => {

    const userData: ICourse = req.body;
    const result = await coursePost(userData);
    sendResponse<ICourse>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Course created successfully"
    });
});
