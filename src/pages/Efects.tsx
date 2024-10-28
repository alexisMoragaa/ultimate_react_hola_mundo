import { useEffect, useState } from "react";
import Button from "../components/Button";

function Efects() {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("Se ejecuto el efecto", token);
  }, [token]);

  const onClick = () => {
    setToken(Math.random().toString());
  };
  return (
    <>
      <h3>
        Seccion <b>Efect0s</b>
        <Button onClick={onClick}>Obtener token</Button>
      </h3>
    </>
  );
}

export default Efects;
