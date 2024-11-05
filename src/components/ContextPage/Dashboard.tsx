import useTodos from "../../hooks/useTodos";

function Dashboard() {
  const { todos } = useTodos();
  return (
    <>
      <p>{todos.length}</p>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;
