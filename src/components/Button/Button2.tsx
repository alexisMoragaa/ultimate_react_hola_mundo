import { ReactNode } from "react";
import style from "./button.module.css";
import { FaCheck } from "react-icons/fa";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  state?: boolean;
};

function Button({ children, onClick, state }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };

  const className = [style.btn, style.btnPrimary].join(" ");

  return (
    <button onClick={handleClick} type="button" className={className}>
      {state ? (
        <>
          Enviado <FaCheck />
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
