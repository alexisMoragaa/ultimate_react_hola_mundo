import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = (userId: number | undefined): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, { params: { userId } })
    .then((response) => response.data);
};

function useTodos(userId: number | undefined) {
  return useQuery({
    queryKey: userId ? ["user", userId, "todos"] : ["todos"],
    queryFn: () => getTodos(userId),
  });
}

export default useTodos;
