import { ReactNode } from "react";
import style from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isLoading?: boolean;
};

function Button({ children, onClick, isLoading }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };

  const className = [
    "btn",
    isLoading ? "btn-secondary" : "btn-primary",
    style.button,
    style.padded,
    style.color,
  ].join(" ");

  return (
    <button
      onClick={handleClick}
      type="button"
      disabled={isLoading}
      className={className}
    >
      {isLoading ? "Cargando ..." : children}
    </button>
  );
}

export default Button;
