import tasks from "../models/Task.js";

class TasksController {
    static listTasks = (req, res) => {
        tasks.find((err, tasks) => {
            res.status(200).json(tasks)
        })
    }

    static addTask = (req, res) => {
        let task = new tasks(req.body);
        task.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to add new task ` })
            } else {
                res.status(201).send(task.toJSON())
            }
        })
    }

    static updateTask = (req, res) => {
        const id = req.params.id;
        tasks.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Task updated successfully' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteTask = (req, res) => {
        const id = req.params.id;
        tasks.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Successfully removed task' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default TasksController;