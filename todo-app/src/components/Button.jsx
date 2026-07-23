import React from "react";
import "./Button.css";

function Button({
  text = "Botón",
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
}) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;