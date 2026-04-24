
import { AddTask } from "@/components/AddTask/AddTask";
import TaskCard from "@/components/TaskCard/TaskCard";
import { createAtask } from "@/lib/Action";
import { getTask } from "@/lib/task";
import Link from "next/link";


const taskPage = async () => {
    const tasks = await getTask();
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="font-bold md:text-3xl p-2">This is task page</h2>
                <p>task length {tasks.length}</p>

                <AddTask createAtask={createAtask} />
                <Link href={"task/newtask"} >New Task</Link>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default taskPage;