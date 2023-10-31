import { TasksPageContainer } from "@/containers/tasks-page-container";
import { getTasks } from "@/services/task";

function TasksPage() {
    return (
        <TasksPageContainer/>
    )
}

const taskPageLoader = async () => getTasks();

export { TasksPage, taskPageLoader };