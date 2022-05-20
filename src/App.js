import React, { useRef, useState } from "react";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();

  const handleTaskAdd = (e) => {
    e.preventDefault();
    if (!!taskRef.current.value.trim()) {
      const newTask = {
        id: uuid(),
        content: taskRef.current.value.trim(),
        status: "pending",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);

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

  const handleDeleteTask = (id) => {
    let deletedContent = "";
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        deletedContent = task.content;
      }
    });

    setTasks(newTasks);

    toast.warn(`${deletedContent} deleted`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
    <div className="app">
      <header className="header py-3">
        <h2 className="todo">todo</h2>
      </header>

      <main className="container px-2 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-10">
            {/* task input start from here ... */}
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

            {/* task input ends here ... */}

            <div className="task-contaier shadow px-2 py-3 mt-4 rounded">
              {!tasks.length ? (
                <p className="text-center fs-4 p-0 m-0 text-danger">
                  Nothing added in your task
                </p>
              ) : (
                tasks.reverse().map((task) => (
                  <div className="m-3" key={task.id}>
                    {task.status === "pending" ? (
                      <div className="pending-task shadow rounded p-3 d-flex justify-content-between align-items-center">
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
                        <div className="fs-5 text-center">{task.content}</div>
                        <div>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="shadow trashBtn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="complete-task shadow rounded p-3 d-flex justify-content-between align-items-center">
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
                        <div className="fs-5 text-center">{task.content}</div>
                        <div>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="shadow trashBtn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
