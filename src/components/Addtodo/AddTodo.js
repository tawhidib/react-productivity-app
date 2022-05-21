import React, { useRef } from "react";
import { toast } from "react-toastify";
import uuid from "react-uuid";

export default function AddTodo({ setTasks }) {
  const taskRef = useRef();
  const handleTaskAdd = (e) => {
    e.preventDefault();
    if (!!taskRef.current.value.trim()) {
      const newTask = {
        id: uuid(),
        content: taskRef.current.value.trim(),
        status: "pending",
      };
      setTasks((prevTasks) => [newTask, ...prevTasks]);

      toast.success("Task Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Please write your task", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    e.target.reset();
  };
  return (
    <form onSubmit={handleTaskAdd}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control fs-5 py-2 px-3"
          placeholder="Write your task..."
          ref={taskRef}
        />
        <button
          className="btn btn-outline-secondary addBtn px-4"
          type="submit"
          id="button-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-plus-lg add"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
