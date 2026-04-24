import task from "../data/data.json";

export const getTask = async () => {
    return task.tasks;
}

export const postTask = async (newtask) => {
    newtask.id = task.tasks.length + 1;
    task.tasks.push(newtask);
    console.log("newtask", newtask)
    return{ success: true, message: "Task created successfully" }
}