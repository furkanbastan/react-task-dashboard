import { useFetcher, useLoaderData } from "react-router-dom";
import * as S from './styles'
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";

function TaskDetailPageContainer() {
    const [isStatusSubmitting, setStatusSubmitting] = useState(false);
    const task = useLoaderData();
    const fetcher = useFetcher();

    const updateCompleted = (e) => {
        setStatusSubmitting(true);
        fetcher.submit(null, { method: "put" });
    }

    useEffect(() => {
        setStatusSubmitting(false);
    }, [task])

    return (
        <S.TaskDetailPageContainer>
            <S.EditButton to={`/tasks/${task.id}/edit`}>Edit</S.EditButton>
            <S.TaskDetail>
                <fetcher.Form method="put">
                    <S.Status $completed={task.completed}>
                        <input
                            hidden
                            type="checkbox"
                            name="task-completed"
                            onChange={updateCompleted}
                            defaultChecked={task.completed}
                        />
                        {task.completed ? "Completed" : "Not Completed"}
                        {isStatusSubmitting && <Loading />}
                    </S.Status>
                </fetcher.Form>
                <S.Name>{task.name}</S.Name>
                <S.Description>{task.description}</S.Description>
            </S.TaskDetail>
        </S.TaskDetailPageContainer>
    )
}

export { TaskDetailPageContainer };