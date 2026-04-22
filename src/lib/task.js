import task from "../data/data.json";

export  const getTask = async () => {
    return task.tasks;
}