import React from "react";
import "./Input.css";

function Input({
  type = "text",
  placeholder = "Escribe aquí...",
  value,
  onChange,
  name,
  id,
  disabled = false,
}) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;