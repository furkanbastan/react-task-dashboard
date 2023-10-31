import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "@/layouts/admin-layout";
import { HomePage } from "@/pages/home-page";
import { TasksPage, taskPageLoader } from "@/pages/tasks-page";
import { TaskCreatePage, taskCreatePageSubmitAction } from "@/pages/task-create-page";
import { TaskDetailPage, taskDetailPageLoader, taskDetailPageUpdateAction } from "@/pages/task-detail-page";
import { TaskEditPage, taskEditPageLoader, taskEditPagePutAction } from "@/pages/task-edit-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { ErrorPage } from "@/pages/error-page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: '/tasks',
            element: <TasksPage />,
            loader: taskPageLoader
          },
          {
            path: "/tasks/create",
            element: <TaskCreatePage />,
            action: taskCreatePageSubmitAction,
          },
          {
            path: "/tasks/:id",
            element: <TaskDetailPage />,
            loader: taskDetailPageLoader,
            action: taskDetailPageUpdateAction,
          },
          {
            path: "/tasks/:id/edit",
            element: <TaskEditPage />,
            loader: taskEditPageLoader,
            action: taskEditPagePutAction,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          }
        ]
      }
    ]
  }
]);