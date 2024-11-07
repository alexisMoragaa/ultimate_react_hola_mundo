import { useQuery } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function useTodos() {
  const getTodos = (): Promise<Todo[]> =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      return response.json();
    });

  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

export default useTodos;
