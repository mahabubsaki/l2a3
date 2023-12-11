import mongoose, { Types } from "mongoose";
import { z } from "zod";

const courseMongooseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: [{
        name: {
            type: String,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    }],
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    durationInWeeks: {
        type: Number,
        required: true,
    },
    details: {
        level: {
            type: String,
            enum: ['Beginner', 'Intermediate', 'Advanced'],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
});


const courseZodSchema = z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string().refine(value => {
        console.log(Types.ObjectId.isValid(value));
        return Types.ObjectId.isValid(value);
    }, { message: "Invalid ID" }),
    price: z.number(),
    tags: z.array(z.object({
        name: z.string(),
        isDeleted: z.boolean(),
    }).strict()).nonempty(),
    startDate: z.string().refine(value => /^\d{4}-\d{2}-\d{2}$/.test(value), { message: "Invalid start Date given. Please use the 'YYYY-MM-DD' format." }),
    endDate: z.string().refine(value => /^\d{4}-\d{2}-\d{2}$/.test(value), { message: "Invalid start Date given. Please use the 'YYYY-MM-DD' format." }),
    language: z.string(),
    provider: z.string(),
    details: z.object({
        level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
        description: z.string(),
    }).strict(),
}).strict();



export {
    courseMongooseSchema,
    courseZodSchema
};