import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "../components/ReactQuery/MainContext";
import { Container, Heading } from "@chakra-ui/react";

function ReactQuery() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxW="5xl">
        <Heading as="h2" size="2xl">
          React Query Section
        </Heading>
        <MainContent />
      </Container>
    </QueryClientProvider>
  );
}

export default ReactQuery;
