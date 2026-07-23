import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    onAddTask(task);
    setTask("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="Escribe una nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        type="submit"
        className="task-form__button"
      >
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;