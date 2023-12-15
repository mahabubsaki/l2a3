import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import Course from './modules/course/course.model';
import mongoose, { Types } from 'mongoose';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const test = async (_: Request, res: Response) => {
    const a = 'test';

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        await Course.findByIdAndUpdate('657b05f8378b36bfcc64aeeb', {
            $set: {
                price: 39.99,
                'details.level': 'Intermediate',
            },
            $pull: { tags: { name: { $in: ['Web Development'] } } },

        }, { session });
        const updatedCourse2 = await Course.findByIdAndUpdate('657b05f8378b36bfcc64aeeb', {
            $addToSet: {
                tags: {
                    $each: [
                        { name: 'New 23', isDeleted: false }
                    ]
                },

            },

        }, { session, new: true });

        await session.commitTransaction();
        res.send({ updatedCourse2 });
    } catch (err) {
        await session.abortTransaction();
    } finally {
        session.endSession();
    }
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;