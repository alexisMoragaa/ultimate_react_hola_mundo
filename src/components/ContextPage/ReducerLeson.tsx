import {
  Button,
  Card,
  CardBody,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { useContext } from "react";
import TodosReducerContext from "../../contexts/TodosReducerContext";

function ReducerLeson() {
  const { todos, dispatch } = useContext(TodosReducerContext);

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
              dispatch({
                type: "ADD",
                todo: { id: id, name: `Hola ${id}`, completed: false },
              });
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
                    dispatch({
                      type: "REMOVE",
                      idTodo: todo.id,
                    });
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
