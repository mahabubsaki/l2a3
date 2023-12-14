import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ICourse } from "./course.interface";
import { courseBestGet, courseGet, coursePost, courseWithReviewGet } from "./course.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../utilities/pick";
import queryBuilder from "../../utilities/queryBuilder";
import { IQueryBuilder } from "../../interface/error";
import { IReview } from "../review/review.interface";


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
export const courseGETController = catchAsync(async (req: Request, res: Response) => {

    const hydrateQuery = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder', 'minPrice', 'maxPrice', 'tags', 'startDate', 'endDate', 'language', 'provider', 'durationInWeeks', 'level']);
    const query: IQueryBuilder = queryBuilder(hydrateQuery);

    const { courses, meta } = await courseGet(query);
    sendResponse<ICourse[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: courses,
        meta: meta,
        message: "Courses retrieved successfully"
    });
});
export const courseWithReviewGETController = catchAsync(async (req: Request, res: Response) => {

    const id = req.params.courseId;

    const result = await courseWithReviewGet(id);
    sendResponse<{
        course: ICourse;
        reviews: IReview[];
    }>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Course and Reviews retrieved successfully"
    });
});
export const courseBestGETController = catchAsync(async (_: Request, res: Response) => {



    const result = await courseBestGet();
    sendResponse<{ course: ICourse; }>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Best course retrieved successfully"
    });
});
