import Button from "../components/Button/Button2";
import fetchData from "../hooks/fetchData";

type User = {
  id?: string;
  name: string;
};

function Efects() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error, addData } = fetchData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>
        Seccion <b>Efectos</b>
      </h3>
      <Button onClick={() => addData({ name: "Nuevo usuario" })}>Añadir</Button>
      <ul>
        {data?.map((d) => {
          return <li key={d.id}>{d.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Efects;
