import { ReactNode } from "react";
import style from "./alert.module.css";

type AlertProps = {
  children: ReactNode;
  alertState?: boolean;
  onClick?: () => void;
};

function Alert({ children, alertState, onClick }: AlertProps) {
  const estilos = [style.alert, alertState ? style.red : style.blue].join(" ");

  return (
    <div className={estilos} onClick={onClick}>
      {children}
    </div>
  );
}

export default Alert;
