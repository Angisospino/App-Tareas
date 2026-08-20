import React, { useEffect, useState } from "react";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Cargar las tareas desde localStorage
  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);
  }, []);

  // Marcar una tarea como completada
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  return (
    <div className="task-list">
      <h2>Lista de tareas</h2>

      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${
              task.completed ? "completed" : ""
            }`}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span>{task.title}</span>
            </div>

            <button onClick={() => deleteTask(task.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;