
import dateToWeek from "../../utilities/dateToWeek";
import { ICourse } from "./course.interface";
import Course from "./course.model";

export const coursePost = async (payload: ICourse): Promise<ICourse> => {
    payload.durationInWeeks = dateToWeek(payload.startDate, payload.endDate);
    const result = (await Course.create(payload)).toObject();
    return result;
};