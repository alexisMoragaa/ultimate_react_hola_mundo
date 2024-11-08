import {
  Heading,
  Text,
  Select,
  SimpleGrid,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import useTodos, { useTodosInfiniti } from "../../hooks/useQuery/useTodos";
import List from "./List";

function MainContent() {
  const pageSize = 15;
  const [userId, setUserId] = useState<number>();
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isPlaceholderData } = useTodos({
    userId,
    page,
    pageSize,
  });

  const {
    data: dataI,
    error: errorI,
    fetchNextPage,
    isFetchingNextPage,
  } = useTodosInfiniti(15);

  const infinityData = dataI?.pages.flat();
  return (
    <>
      <SimpleGrid columns={2} mt={8}>
        <Box>
          <Heading as="h5" size="lg">
            Todo List Pages: {data?.length}
          </Heading>

          <Select
            placeholder="Selecciona un usuario"
            value={userId}
            onChange={(e) => {
              e.target.value !== ""
                ? setUserId(Number(e.target.value))
                : setUserId(undefined);
            }}
          >
            <option value="">Ver Todos</option>
            <option value="1">Usuario 1</option>
            <option value="2">Usuario 2</option>
            <option value="3">Usuario 3</option>
          </Select>
          <List data={data} error={error} />
          <SimpleGrid columns={3} mb={2} spacing={50}>
            <Button
              colorScheme="gray"
              isDisabled={page == 1}
              onClick={() => setPage(page - 1)}
            >
              {"<<"}
            </Button>
            <Text>
              <Center>
                {isLoading || isPlaceholderData ? (
                  <Text>Cargando...</Text>
                ) : (
                  <Text>{page}</Text>
                )}
              </Center>
            </Text>
            <Button colorScheme="gray" onClick={() => setPage(page + 1)}>
              {">>"}
            </Button>
          </SimpleGrid>
        </Box>
        <Box>
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
        </Box>
      </SimpleGrid>
    </>
  );
}

export default MainContent;
