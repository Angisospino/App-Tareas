import React, { useState, useEffect } from "react";
import "./TaskActions.css";

const TaskActions = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Cargar tareas desde localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar tarea
  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Completar tarea
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <h2>Lista de Tareas</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Agregar</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
          >
            <span onClick={() => toggleTask(task.id)}>
              {task.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskActions;