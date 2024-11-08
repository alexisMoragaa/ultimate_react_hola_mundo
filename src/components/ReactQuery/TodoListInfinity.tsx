import { Button, Center, Heading } from "@chakra-ui/react";
import List from "./List";
import { useTodosInfinity } from "../../hooks/useQuery/useTodos";

export default function TodoListInfinity() {
  const {
    data: dataI,
    error: errorI,
    fetchNextPage,
    isFetchingNextPage,
  } = useTodosInfinity(15);

  const infinityData = dataI?.pages.flat();

  return (
    <>
      <Heading as="h5" size="lg">
        Todo List Infinity: {infinityData?.length}
      </Heading>
      <List data={infinityData} error={errorI} />
      <Center>
        <Button
          colorScheme="blue"
          onClick={() => fetchNextPage()}
          isDisabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Cargando..." : "Cargar Mas"}
        </Button>
      </Center>
    </>
  );
}
