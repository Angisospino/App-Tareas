import React from "react";
import "./TaskItem.css";

function TaskItem({ task, tasks, setTasks }) {
  // Cambiar estado de la tarea
  const toggleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Eliminar tarea
  const deleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : "pending"}`}>
      <span onClick={toggleComplete} className="task-text">
        {task.text}
      </span>

      <div className="buttons">
        <button className="complete-btn" onClick={toggleComplete}>
          {task.completed ? "Deshacer" : "Completar"}
        </button>

        <button className="delete-btn" onClick={deleteTask}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskItem;