import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function MainContent() {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => response.json() as Promise<Todo[]>)
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default MainContent;
