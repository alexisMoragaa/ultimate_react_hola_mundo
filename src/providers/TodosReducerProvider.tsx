import { ReactNode, useReducer } from "react";
import TodosReducerContext from "../contexts/TodosReducerContext";
import todosReducer from "../reducers/todosReducer";

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
