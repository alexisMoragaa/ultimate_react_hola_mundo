import Button from "../components/Button/Button2";
import NavBar from "../components/NavBar/NavBar";
import fetchData from "../hooks/fetchData";

type User = {
  id: string | number;
  name: string;
};

function Efects() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error, addData, deleteData, updatedData } =
    fetchData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <NavBar />
      <h3>
        Seccion <b>Efectos</b>
      </h3>
      <Button
        onClick={() => addData({ id: data.length + 1, name: "Nuevo usuario" })}
      >
        Añadir
      </Button>

      <Button onClick={() => updatedData({ id: 1, name: "Chanchito Feliz" })}>
        Actualizar
      </Button>

      <ul>
        {data?.map((d) => {
          return (
            <li key={d.id}>
              {d.name}{" "}
              <Button onClick={() => deleteData(d.id)}>Eliminar</Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Efects;
