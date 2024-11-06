import { createContext, Dispatch, useContext } from "react";
import { Todo } from "../types";
import { TodoAction } from "./TodosReducerProvider";

type TodosReducerContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

const TodosReducerContext = createContext<TodosReducerContextType>(
  {} as TodosReducerContextType
);

export default TodosReducerContext;

export function useTodos() {
  return useContext(TodosReducerContext);
}
