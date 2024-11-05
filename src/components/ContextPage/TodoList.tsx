import useTodos from "../../hooks/useTodos";

function TodoList() {
  const { todos, addTodo } = useTodos();
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Chanchito Feliz",
            completed: false,
          })
        }
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <p>Hola llegamos</p>
    </>
  );
}

export default TodoList;
