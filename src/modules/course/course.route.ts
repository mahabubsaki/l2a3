/* Route content */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseZodSchema } from './course.schema';
import { courseBestGETController, coursePostController, courseWithReviewGETController } from './course.controller';


const courseRouter = express.Router();

courseRouter.post('/', validateRequest(courseZodSchema), coursePostController);
courseRouter.get('/', coursePostController);
courseRouter.get('/best', courseBestGETController);
courseRouter.get('/:courseId/reviews', courseWithReviewGETController);



export default courseRouter;