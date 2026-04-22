
import TaskCard from "@/components/TaskCard/TaskCard";
import { getTask } from "@/lib/task";


const taskPage = async () => {
    const tasks = await getTask();
    return (
        <div>
            <h2>This is task page</h2>
            <p>task length {tasks.length}</p>
            <div className="flex flex-wrap gap-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default taskPage;