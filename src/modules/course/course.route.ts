/* Route content */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseZodSchema } from './course.schema';
import { courseBestGETController, coursePostController, courseWithReviewGETController } from './course.controller';


const courseRouter = express.Router();

courseRouter.post('/course', validateRequest(courseZodSchema), coursePostController);
courseRouter.get('/courses', coursePostController);
courseRouter.get('/course/best', courseBestGETController);
courseRouter.get('/courses/:courseId/reviews', courseWithReviewGETController);



export default courseRouter;