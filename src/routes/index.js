import express from "express";
import tasks from "./tasksRoutes.js";

const routes = (app) => {
    app.route('/tasks').get((req, res) => {
        res.status(200).send(tasks)
    })

    app.use(
        express.json(),
        tasks
    )
};

export default routes;