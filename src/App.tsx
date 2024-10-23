import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Alert from "./components/Alert";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    "Tanjiro",
    "GOKU",
    "Naruto",
    "Luffy",
    "Ichigo",
  ]);

  const handleSelect = (element: string) => {
    console.log("Elemento seleccionado", element);
  };

  const addMinion = () => {
    setItems([...items, "Minion"]);
  };

  const removeMinion = () => {
    setItems(items.slice(0, -1));
  };

  const contenido = items.length ? (
    <List data={items} onSelect={handleSelect} />
  ) : (
    "Sin elementos elementos para mostrar"
  );

  const [isLoading, setisLoading] = useState(false);

  const handleClick = () => setisLoading(!isLoading);

  const [alertState, setAlertState] = useState(false);

  const onClickAlert = () => {
    setAlertState(!alertState);
  };

  return (
    <>
      <Card>
        <Button onClick={addMinion}>
          Add Minion <FaPlus />{" "}
        </Button>
        <Button onClick={removeMinion}>
          {" "}
          Remove Minion <FaMinus />{" "}
        </Button>

        <CardBody title="Factory" text="Minion Factory by AMG" />
        {contenido}
        <Button onClick={handleClick} isLoading={isLoading}>
          Hola Mundo
        </Button>
      </Card>

      <Alert alertState={alertState} onClick={onClickAlert}>
        Alert Reto 01 Modulo Estilos
      </Alert>
    </>
  );
}

export default App;
