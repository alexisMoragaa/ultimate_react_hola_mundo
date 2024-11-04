import { useState } from "react";
import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import { Todo } from "../types";

function ContextPage() {
  const [todos, setTodo] = useState<Todo[]>([
    { id: 0, name: "Cocinar", completed: false },
    { id: 1, name: "Barrer", completed: true },
  ]);

  const addTodo = (todo: Todo) => {
    setTodo([todo, ...todos]);
  };

  return (
    <>
      <Dashboard amount={todos.length} />
      <MainContent todos={todos} addTodo={addTodo} />
    </>
  );
}

export default ContextPage;
