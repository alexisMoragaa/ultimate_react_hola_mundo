import { useQuery } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = (userId: number | undefined): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos?";
  const queryParams = userId
    ? new URLSearchParams({
        userId: String(userId),
      })
    : "";
  console.log(queryParams);
  return fetch(url + queryParams).then((response) => {
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  });
};

function useTodos(userId: number | undefined) {
  return useQuery({
    queryKey: userId ? ["user", userId, "todos"] : ["todos"],
    queryFn: () => getTodos(userId),
  });
}

export default useTodos;
