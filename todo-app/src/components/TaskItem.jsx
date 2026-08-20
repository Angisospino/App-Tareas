import React, { useState } from "react";
import "./TaskItem1.css";

function TaskItem1({ task, onDelete, onUpdate }) {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    const newStatus = !completed;
    setCompleted(newStatus);

    const updatedTask = {
      ...task,
      completed: newStatus,
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? updatedTask : item
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    if (onUpdate) {
      onUpdate(updatedTask);
    }
  };

  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = tasks.filter(
      (item) => item.id !== task.id
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    if (onDelete) {
      onDelete(task.id);
    }
  };

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div className="task-info">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleComplete}
        />

        <span>{task.title}</span>
      </div>

      <button onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
}

export default TaskItem1;