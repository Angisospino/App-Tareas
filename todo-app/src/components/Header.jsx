import React from "react";
import "./Header.css";

function Header({ title = "Mi Lista de Tareas", subtitle = "Organiza tu día de manera sencilla" }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;