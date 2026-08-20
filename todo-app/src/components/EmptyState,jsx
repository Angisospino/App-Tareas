import React, { useEffect, useState } from "react";
import "./EmptyState.css";

const STORAGE_KEY = "emptyStateDismissed";

const EmptyState = ({
  title = "No hay tareas todavía",
  message = "Agrega una nueva tarea para comenzar a organizar tu día.",
  buttonText = "Agregar tarea",
  onAction,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);

    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleAction = () => {
    if (onAction) {
      onAction();
    }
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="empty-state" aria-live="polite">
      <button
        className="empty-state__close"
        type="button"
        onClick={handleDismiss}
        aria-label="Cerrar mensaje"
      >
        ×
      </button>

      <div className="empty-state__icon" aria-hidden="true">
        ✓
      </div>

      <div className="empty-state__content">
        <h2 className="empty-state__title">{title}</h2>

        <p className="empty-state__message">{message}</p>

        <button
          className="empty-state__button"
          type="button"
          onClick={handleAction}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default EmptyState;