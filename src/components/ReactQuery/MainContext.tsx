import {
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import useTodos from "../../hooks/useQuery/useTodos";
import { useState } from "react";

function MainContent() {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = useTodos(userId);
  return (
    <>
      <SimpleGrid columns={2} mt={8}>
        <Heading as="h5" size="lg">
          Todo List: {data?.length}
        </Heading>

        <Select
          placeholder="Selecciona un usuario"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          <option value="">Ver Todos</option>
          <option value="1">Usuario 1</option>
          <option value="2">Usuario 2</option>
          <option value="3">Usuario 3</option>
        </Select>
      </SimpleGrid>

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
