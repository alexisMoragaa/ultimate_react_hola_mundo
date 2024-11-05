import { createContext, Dispatch } from "react";
import { Todo } from "../types";
import { TodoAction } from "../reducers/todosReducer";

type TodosReducerContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export default createContext<TodosReducerContextType>(
  {} as TodosReducerContextType
);
