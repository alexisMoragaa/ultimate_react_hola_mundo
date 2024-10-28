import useUsers from "../hooks/useUsers";

function Efects() {
  const { users, loading, error } = useUsers();

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
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Efects;
