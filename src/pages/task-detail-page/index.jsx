import { TaskDetailPageContainer } from "@/containers/task-detail-page-container";
import { completeTask, getTask } from "@/services/task";


function TaskDetailPage() {
    return (
        <TaskDetailPageContainer />
    )
}

const taskDetailPageLoader = async ({ params }) => {
    return getTask(params.id);
}

const taskDetailPageUpdateAction = ({ params }) => {
    return completeTask(params.id);
}

export { TaskDetailPage, taskDetailPageLoader, taskDetailPageUpdateAction };