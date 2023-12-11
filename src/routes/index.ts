import express from "express";



const router = express.Router();

const applicationRoutes = [

];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;
