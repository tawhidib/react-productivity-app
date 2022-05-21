import React from "react";
import { toast } from "react-toastify";

export default function MakePendingTaskButton({ task, tasks, setTasks }) {
  const handleMakePendingTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        return {
          ...task,
          status: "pending",
        };
      }
    });

    setTasks(newTasks);

    toast.info("Keep trying, Best of luck", {
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
        onClick={() => handleMakePendingTask(task.id)}
        className="shadow makePendingBtn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
    </div>
  );
}
