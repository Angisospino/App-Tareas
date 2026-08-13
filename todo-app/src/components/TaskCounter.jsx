import React, { useEffect, useState } from "react";
import "./TaskCounter.css";

const TaskCounter = ({
  storageKey = "tasks",
  onFilterChange,
}) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Cargar tareas desde localStorage
  const loadTasks = () => {
    try {
      const storedTasks = localStorage.getItem(storageKey);
      const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];

      setTasks(Array.isArray(parsedTasks) ? parsedTasks : []);
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks();

    // Actualiza el componente cuando cambia localStorage
    const handleStorageChange = () => {
      loadTasks();
    };

    window.addEventListener("storage", handleStorageChange);

    // Evento personalizado para cambios realizados en la misma pestaña
    window.addEventListener("tasksUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("tasksUpdated", handleStorageChange);
    };
  }, [storageKey]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed === true
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  return (
    <section className="task-counter">
      <div className="task-counter__header">
        <h2>Mis tareas</h2>
        <span className="task-counter__total">
          {totalTasks} {totalTasks === 1 ? "tarea" : "tareas"}
        </span>
      </div>

      <div className="task-counter__stats">
        <div className="stat-card stat-card--total">
          <span className="stat-card__number">{totalTasks}</span>
          <span className="stat-card__label">Total</span>
        </div>

        <div className="stat-card stat-card--pending">
          <span className="stat-card__number">{pendingTasks}</span>
          <span className="stat-card__label">Pendientes</span>
        </div>

        <div className="stat-card stat-card--completed">
          <span className="stat-card__number">{completedTasks}</span>
          <span className="stat-card__label">Completadas</span>
        </div>
      </div>

      <div className="task-counter__filters">
        <span className="task-counter__filter-title">
          Filtrar tareas:
        </span>

        <div className="filter-buttons">
          <button
            type="button"
            className={`filter-button ${
              filter === "all" ? "filter-button--active" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            Todas
          </button>

          <button
            type="button"
            className={`filter-button ${
              filter === "pending" ? "filter-button--active" : ""
            }`}
            onClick={() => handleFilterChange("pending")}
          >
            Pendientes
          </button>

          <button
            type="button"
            className={`filter-button ${
              filter === "completed" ? "filter-button--active" : ""
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completadas
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskCounter;
