import { SimpleGrid, Box } from "@chakra-ui/react";
import TodoListPages from "./TodoListPages";
import TodoListInfinity from "./TodoListInfinity";

function MainContent() {
  return (
    <>
      <SimpleGrid columns={2} mt={8}>
        <Box>
          <TodoListPages />
        </Box>
        <Box>
          <TodoListInfinity />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default MainContent;
