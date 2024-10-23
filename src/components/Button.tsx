import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isLoading: boolean;
};

function Button({ children, onClick, isLoading }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      disabled={!isLoading}
      className={`btn ${isLoading ? "btn-primary" : "btn-secondary"}`}
    >
      {!isLoading ? "Cargando ..." : children}
    </button>
  );
}

export default Button;
