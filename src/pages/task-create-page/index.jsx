import { TaskCreatePageContainer } from '@/containers/task-create-page-container'
import { addTask } from '@/services/task';
import { redirect } from 'react-router-dom';


function TaskCreatePage() {
    return (
        <TaskCreatePageContainer />
    )
}

const taskCreatePageSubmitAction = async ({ request }) => {
    const formData = await request.formData();

    const id = Math.random().toString(36).substring(2, 9);
    const name = formData.get('task-name');
    const description = formData.get('task-description');
    console.log({ id: id, name: name, description: description, completed: false });

    await addTask({ id: id, name: name, description: description, completed: false });

    return redirect(`/tasks/${id}`);
}

export { TaskCreatePage, taskCreatePageSubmitAction };