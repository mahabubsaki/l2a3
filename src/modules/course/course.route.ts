/* Route content */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseZodSchema } from './course.schema';
import { courseGETController, coursePostController } from './course.controller';


const courseRouter = express.Router();

courseRouter.post('/', validateRequest(courseZodSchema), coursePostController);
courseRouter.get('/', courseGETController);


export default courseRouter;