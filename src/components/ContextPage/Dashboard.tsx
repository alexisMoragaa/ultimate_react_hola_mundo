import useTodos from "../../hooks/useTodos";
import useUserProvider from "../../hooks/useUserPrrovider";

function Dashboard() {
  const { todos } = useTodos();
  const { user, toogleLogin } = useUserProvider();
  return (
    <>
      <div className="row">
        <div className="col-8">
          <h4>Dashboard</h4>
          <p>
            Total de Tareas: <b>{todos.length}</b>
          </p>
        </div>
        <div className="col-4 d-flex justify-content-between align-items-start">
          <span className="mr-5">
            Usuario: <b>{user.name}</b>
          </span>
          <button className="btn btn-secondary ml-5" onClick={toogleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
