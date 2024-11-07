import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "../components/ReactQuery/MainContext";
import { Heading } from "@chakra-ui/react";

function ReactQuery() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Heading as="h2">React Query Section</Heading>
      <MainContent />
    </QueryClientProvider>
  );
}

export default ReactQuery;
