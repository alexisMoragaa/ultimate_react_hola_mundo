import { Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import useTodos from "../../hooks/useQuery/useTodos";

function MainContent() {
  const { data, error, isLoading } = useTodos();
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
