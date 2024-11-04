import { ReactNode, useState } from "react";
import TodosContext from "../contexts/TodosContext";
import { Todo } from "../types";

type Props = {
  children: ReactNode;
};

function TodosProvider({ children }: Props) {
  const [todos, setTodo] = useState<Todo[]>([
    { id: 0, name: "Cocinar", completed: false },
    { id: 1, name: "Barrer", completed: true },
  ]);

  const addTodo = (todo: Todo) => {
    setTodo([todo, ...todos]);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
