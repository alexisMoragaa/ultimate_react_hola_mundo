import { Todo } from "../../types";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

function TodoList({ todos, addTodo }: Props) {
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
