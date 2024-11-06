import {
  Button,
  Card,
  CardBody,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import useTodosStore from "../../todosModule/store";

function ReducerLeson() {
  const { todos, add, remove } = useTodosStore();

  return (
    <>
      <Card>
        <CardBody>
          <Text>Reducer Clase 2 TODOS</Text>

          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => {
              let id = Math.random();
              add({ id: id, name: `Hola ${id}`, completed: false });
            }}
          >
            ADD TODO
          </Button>

          <UnorderedList mt={2} pl={0}>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                mt={1}
                ml={0}
                display="flex"
                justifyContent="space-between"
              >
                {todo.name}
                <Button
                  color="orange.300"
                  size="xs"
                  onClick={() => {
                    remove(todo.id);
                  }}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
    </>
  );
}

export default ReducerLeson;
