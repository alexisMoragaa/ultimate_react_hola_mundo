import { useState } from "react";
import Button from "../components/Button";
import Button2 from "../components/Button/Button2";
import Card, { CardBody } from "../components/Card";
import List from "../components/List";
import Alert from "../components/Alert";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import ProductList from "../components/ProductList";
import ProductDashboard from "../components/ProductDashboard";
import NavBar from "../components/NavBar/NavBar";

function EjerciciosAnteriores() {
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

  const [stateSendButton, setStateSendButton] = useState(false);
  const onCLickSendButton = () => setStateSendButton(!stateSendButton);

  const [products, setProducts] = useState([
    { id: "1", name: "iphone" },
    { id: "2", name: "samsung" },
  ]);

  const addEnd = () => {
    setProducts([
      ...products,
      {
        id: Math.random().toString(),
        name: `Nuevo ${products.length + 1}`,
      },
    ]);
  };

  const addBegin = () => {
    setProducts([
      {
        id: Math.random().toString(),
        name: `Nuevo ${products.length + 1}`,
      },
      ...products,
    ]);
  };

  const deleteEnd = () => {
    setProducts(products.slice(0, -1));
  };

  const clean = () => {
    setProducts([]);
  };

  return (
    <>
      <NavBar />
      <Card>
        <Button onClick={addMinion}>
          Add Minion <FaPlus />
        </Button>

        <Button onClick={removeMinion}>
          Remove Minion <FaMinus />
        </Button>

        <CardBody title="Factory" text="Minion Factory by AMG" />
        {contenido}
        <Button onClick={handleClick} isLoading={isLoading}>
          Hola Mundo
        </Button>
      </Card>

      <hr />

      <Alert alertState={alertState} onClick={onClickAlert}>
        Alert Reto 01 Modulo Estilos
      </Alert>

      <hr />

      <Button2 onClick={onCLickSendButton} state={stateSendButton}>
        Enviar <IoIosSend />
      </Button2>

      <hr />
      <Button onClick={addBegin}>Comienzo</Button>
      <Button onClick={addEnd}>Final</Button>
      <Button onClick={deleteEnd}>Eliminar</Button>
      <Button onClick={clean}>Limpiar</Button>
      <ProductDashboard total={products.length} />
      <ProductList products={products} />
    </>
  );
}

export default EjerciciosAnteriores;
