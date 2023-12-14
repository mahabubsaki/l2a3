
import { IQueryBuilder } from "../../interface/error";
import dateToWeek from "../../utilities/dateToWeek";
import { ICourse } from "./course.interface";
import Course from "./course.model";

export const coursePost = async (payload: ICourse): Promise<ICourse> => {
    payload.durationInWeeks = dateToWeek(payload.startDate, payload.endDate);
    const result = (await Course.create(payload)).toObject();
    return result;
};
export const courseGet = async (query: IQueryBuilder): Promise<{ courses: ICourse[], meta: { total: number, limit: number, page: number; }; }> => {
    const courses = await Course.find(query.filter, null, {
        sort: query.sort,
        skip: (query.meta.page - 1) * query.meta.limit,
        limit: query.meta.limit
    });
    console.log({ query });
    const total = await Course.countDocuments(query.filter);
    return { courses, meta: { limit: query.meta.limit, page: query.meta.page, total } };
};