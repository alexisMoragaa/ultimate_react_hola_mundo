import { ReactNode, useReducer } from "react";
import TodosReducerContext from "./TodosReducerContext";

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

const todosReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "REMOVE":
      return todos.filter((t) => t.id != action.idTodo);
  }
  return todos;
};

type Props = {
  children: ReactNode;
};

export default function TodosReducerProviders({ children }: Props) {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosReducerContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosReducerContext.Provider>
  );
}
