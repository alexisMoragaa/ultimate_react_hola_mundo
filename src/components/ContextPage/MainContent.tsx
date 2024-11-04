import { Todo } from "../../types";
import TodoList from "./TodoList";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

function MainContent({ todos, addTodo }: Props) {
  return (
    <>
      <p>Main Content</p>
      <TodoList todos={todos} addTodo={addTodo} />
    </>
  );
}

export default MainContent;
