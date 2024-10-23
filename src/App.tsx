import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = ["Tanjiro", "GOKU", "Naruto", "Luffy", "Ichigo"];

  const handleSelect = (element: string) => {
    console.log("Elemento seleccionado", element);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos elementos para mostrar"
  );

  const [isLoading, setisLoading] = useState(true);

  const handleClick = () => setisLoading(!isLoading);

  return (
    <>
      <Card>
        <CardBody title="Hola" text="mundo" />
        {contenido}
        <Button onClick={handleClick} isLoading={isLoading}>
          Hola Mundo
        </Button>
      </Card>
    </>
  );
}

export default App;
