import React from "react";
import { toast } from "react-toastify";

export default function CompleteTaskButton({ task, tasks, setTasks }) {
  const handleCompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        return {
          ...task,
          status: "complete",
        };
      }
    });

    setTasks(newTasks);

    toast.success("Congratulations for completing the task successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <button
        onClick={() => handleCompleteTask(task.id)}
        className="shadow checkBtn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>
      </button>
    </div>
  );
}
