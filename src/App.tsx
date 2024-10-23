import "./App.css";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Vegeta", "Trunks", "Piccolo"];

  const handleSelect = (element: string) => {
    console.log("Elemento seleccionado", element);
  };

  return (
    <>
      <Card>
        <CardBody title="Hola" text="mundo" />
        <List data={list} onSelect={handleSelect} />
      </Card>
    </>
  );
}

export default App;
