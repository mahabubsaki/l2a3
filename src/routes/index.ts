import express from "express";
import courseRouter from "../modules/course/course.route";



const router = express.Router();

const applicationRoutes = [
    { path: '/course', controller: courseRouter },
];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;
