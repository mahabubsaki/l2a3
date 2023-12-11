/* Route content */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseZodSchema } from './course.schema';
import { coursePostController } from './course.controller';


const courseRouter = express.Router();

courseRouter.post('/', validateRequest(courseZodSchema), coursePostController);


export default courseRouter;