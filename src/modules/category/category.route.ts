/* Route content */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryZodSchema } from './category.schema';
import { categoryPostController } from './category.controller';


const categoryRouter = express.Router();

categoryRouter.post('/', validateRequest(categoryZodSchema), categoryPostController);

export default categoryRouter;