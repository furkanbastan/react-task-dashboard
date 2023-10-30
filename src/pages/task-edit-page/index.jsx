import { TaskEditPageContainer } from "@/containers/task-edit-page-container";
import { getTask, updateTask } from "@/services/task";
import { redirect } from "react-router-dom";


function TaskEditPage() {
    return (
        <TaskEditPageContainer />
    );
}

const taskEditPageLoader = async ({ params }) => {
    return getTask(params.id);
}

const taskEditPagePutAction = async ({ params, request }) => {
    const formData = await request.formData();

    const task = {
        name: formData.get("task-name"),
        description: formData.get("task-description"),
        completed: !!formData.get("task-completed"),
        id: params.id,
    };

    await updateTask(task);

    return redirect(`/tasks/${params.id}`);
}

export { TaskEditPage, taskEditPageLoader, taskEditPagePutAction };