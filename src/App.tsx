import "./App.css";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Vegeta", "Trunks", "Piccolo"];
  return (
    <>
      <Card>
        <CardBody title="Hola" text="mundo" />
        <List data={list} />
      </Card>
    </>
  );
}

export default App;
