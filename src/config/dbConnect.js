import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Tasks:WcFcZV6eclUY9nGu@cluster0.ynbbd5v.mongodb.net/Task");

const db = mongoose.connection;

export default db;