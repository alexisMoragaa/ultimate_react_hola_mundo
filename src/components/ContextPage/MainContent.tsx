import useTitle from "../../hooks/useTitle";
import TodoList from "./TodoList";

function MainContent() {
  const { title } = useTitle();
  return (
    <>
      <h2>{title}</h2>
      <TodoList />
    </>
  );
}

export default MainContent;
