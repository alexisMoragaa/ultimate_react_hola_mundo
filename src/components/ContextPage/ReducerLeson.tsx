import {
  Button,
  Card,
  CardBody,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import useTodosStore from "../../todosModule/store";
import HeaderReducer from "./HeaderReducer";

function ReducerLeson() {
  const { todos, add, remove, update } = useTodosStore();

  return (
    <>
      <Card>
        <CardBody>
          <HeaderReducer />
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
                    update({
                      id: todo.id,
                      name: `Hola Feliz ${todo.id}`,
                      completed: false,
                    });
                  }}
                >
                  update
                </Button>

                <Button
                  color="red.300"
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
