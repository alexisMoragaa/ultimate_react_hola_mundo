import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type Filter = {
  userId: number | undefined;
  page: number;
  pageSize: number;
};

const getTodos = (filter: Filter): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, {
      params: {
        userId: filter.userId,
        _start: (filter.page - 1) * filter.pageSize,
        _limit: filter.pageSize,
      },
    })
    .then((response) => response.data);
};

function useTodos(filter: Filter) {
  return useQuery({
    queryKey: ["user", filter, "todos"],
    queryFn: () => getTodos(filter),
    placeholderData: (x) => x,
  });
}

const getTosInfinity = (
  pageParam: number,
  pageSize: number
): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, {
      params: {
        _start: (pageParam - 1) * pageSize,
        _limit: pageSize,
      },
    })
    .then((response) => response.data);
};

export function useTodosInfiniti(pageSize: number) {
  return useInfiniteQuery({
    queryKey: ["some"],
    queryFn: ({ pageParam }) => getTosInfinity(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
}

export default useTodos;
