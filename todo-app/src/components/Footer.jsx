import React, { useEffect, useState } from "react";
import "./Footer.css";

const THEME_KEY = "app-theme";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem(THEME_KEY) === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">TaskApp</h3>
          <p className="footer-text">
            Organiza tus tareas y aprovecha mejor tu tiempo.
          </p>
        </div>

        <div className="footer-actions">
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            <span className="theme-icon" aria-hidden="true">
              {darkMode ? "☀️" : "🌙"}
            </span>

            <span>
              {darkMode ? "Modo claro" : "Modo oscuro"}
            </span>
          </button>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TaskApp. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
