import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import TitleProvider from "../providers/TitleProvider";
import TodosProvider from "../providers/TodosProvider";
import UserProvider from "../providers/UserProvider";
import ReducerLeson from "../components/ContextPage/ReducerLeson";
import TodosReducerProviders from "../providers/TodosReducerProvider";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import ReducerUno from "../components/ContextPage/ReducerUno";

function ContextPage() {
  return (
    <>
      <Container maxW="5xl">
        <SimpleGrid columns={2} spacing={10} mt={4}>
          <Box>
            <h2>Context</h2>
            <TodosProvider>
              <UserProvider>
                <TitleProvider>
                  <Dashboard />
                  <MainContent />
                </TitleProvider>
              </UserProvider>
            </TodosProvider>
          </Box>
          <Box>
            <h2>Reducers</h2>

            <ReducerUno />

            <TodosReducerProviders>
              <ReducerLeson />
            </TodosReducerProviders>
          </Box>
        </SimpleGrid>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </Container>
    </>
  );
}

export default ContextPage;
