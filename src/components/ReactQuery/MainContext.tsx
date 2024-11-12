import { SimpleGrid, Box } from "@chakra-ui/react";
import TodoListPages from "./TodoListPages";
import TodoListInfinity from "./TodoListInfinity";
import Mutaciones from "./Mutaciones";

function MainContent() {
  return (
    <>
      <SimpleGrid columns={2} mt={8} spacing={20}>
        <Box>
          <TodoListPages />
          <TodoListInfinity />
        </Box>
        <Box>
          <Mutaciones />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default MainContent;
