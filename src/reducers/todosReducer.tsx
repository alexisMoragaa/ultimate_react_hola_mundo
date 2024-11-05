import { Todo } from "../types";

type addTodo = {
  type: "ADD";
  todo: Todo;
};

type removeTodo = {
  type: "REMOVE";
  idTodo: number;
};

export type TodoAction = addTodo | removeTodo;

export default (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "REMOVE":
      return todos.filter((t) => t.id != action.idTodo);
  }
  return todos;
};
