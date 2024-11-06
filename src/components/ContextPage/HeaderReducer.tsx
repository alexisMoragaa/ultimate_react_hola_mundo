import { Text } from "@chakra-ui/react";
import useTodosStore from "../../todosModule/store";

export default function HeaderReducer() {
  const { todos } = useTodosStore();
  return (
    <>
      <Text>Reducer Clase 2 TODOS : {todos.length}</Text>
    </>
  );
}
