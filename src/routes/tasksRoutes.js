import express from "express";
import TasksController from "../controllers/TasksController.js";

const router = express.Router();

router
    .get("/tasks", TasksController.listTasks)
    .post("/tasks", TasksController.addTask)
    .put("/tasks/:id", TasksController.updateTask)
    .delete("/tasks/:id", TasksController.deleteTask)

export default router;