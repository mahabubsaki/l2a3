import express from "express";
import courseRouter from "../modules/course/course.route";
import categoryRouter from "../modules/category/category.route";



const router = express.Router();

const applicationRoutes = [
    { path: '/course', controller: courseRouter },
    { path: '/categories', controller: categoryRouter },
];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;
