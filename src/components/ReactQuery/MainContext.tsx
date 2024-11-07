import { Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function MainContent() {
  const getTodos = (): Promise<Todo[]> =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      return response.json();
    });

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <>
      <Heading as="h5" size="lg" mt={4}>
        Todo List
      </Heading>

      <UnorderedList styleType="'- '">
        {error && <Text>No pudimos recuperrar los datos: {error.message}</Text>}
        {isLoading && <Text>Cargando...</Text>}
        {data?.map((todo) => (
          <ListItem key={todo.id}>{todo.title}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default MainContent;
