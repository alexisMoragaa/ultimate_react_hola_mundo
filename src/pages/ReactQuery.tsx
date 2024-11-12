import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "../components/ReactQuery/MainContext";
import { Container, Heading } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "../components/NavBar/NavBar";

function ReactQuery() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Container maxW="">
        <Heading as="h2" size="2xl">
          React Query Section
        </Heading>
        <MainContent />
      </Container>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default ReactQuery;
