import { Button, SimpleGrid } from "@chakra-ui/react";
import { useReducer } from "react";

export default function ReducerUno() {
  type Action = {
    type: "ADD" | "MIN" | "RESET";
  };

  const reducer = (contador: number, action: Action) => {
    switch (action.type) {
      case "ADD":
        return contador + 1;
      case "MIN":
        return contador - 1;
      case "RESET":
        return 0;
    }
  };

  const [contador, distpatch] = useReducer(reducer, 0);

  return (
    <>
      <p>
        Count: <b>{contador}</b>
      </p>
      <SimpleGrid columns={3} spacing={2} mb={5}>
        <Button colorScheme="green" onClick={() => distpatch({ type: "ADD" })}>
          Add
        </Button>
        <Button colorScheme="red" onClick={() => distpatch({ type: "MIN" })}>
          Minus
        </Button>
        <Button colorScheme="gray" onClick={() => distpatch({ type: "RESET" })}>
          Reset
        </Button>
      </SimpleGrid>
    </>
  );
}
