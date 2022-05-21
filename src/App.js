import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTodo from "./components/Addtodo/AddTodo";
import TaskContent from "./components/TaskContent/TaskContent";
import DeleteTask from "./components/DeleteTask/DeleteTask";
import CompleteTaskButton from "./components/CompleteTaskButton/CompleteTaskButton";
import MakePendingTaskButton from "./components/MakePendingTaskButton/MakePendingTaskButton";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <header className="header py-3">
        <h2 className="todo">todo</h2>
      </header>

      <main className="container px-2 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-10">
            <AddTodo setTasks={setTasks} />

            <div className="task-contaier shadow px-2 py-3 mt-4 rounded">
              {!tasks.length ? (
                <p className="text-center fs-4 p-0 m-0 text-danger">
                  Nothing added in your task
                </p>
              ) : (
                tasks.map((task) => (
                  <div className="m-3" key={task.id}>
                    <div
                      className={`${task.status}-task shadow rounded p-3 d-flex justify-content-between align-items-center`}
                    >
                      {task.status === "pending" ? (
                        <CompleteTaskButton
                          setTasks={setTasks}
                          task={task}
                          tasks={tasks}
                        />
                      ) : (
                        <MakePendingTaskButton
                          setTasks={setTasks}
                          task={task}
                          tasks={tasks}
                        />
                      )}
                      <TaskContent content={task.content} />
                      <DeleteTask setTasks={setTasks} task={task} />
                    </div>
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
