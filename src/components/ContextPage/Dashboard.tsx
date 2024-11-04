import { useContext } from "react";
import TodosContext from "../../contexts/TodosContext";

function Dashboard() {
  const { todos } = useContext(TodosContext);
  return (
    <>
      <p>{todos.length}</p>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;
