import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    completed: { type: Boolean }
});

const tasks = mongoose.model('Task', taskSchema);

export default tasks;