import { UnorderedList, Text, ListItem } from "@chakra-ui/react";
import { Todo } from "../../hooks/useQuery/useTodos";

type Props = {
  data?: Todo[];
  error: Error | null;
};

export default function List({ data, error }: Props) {
  return (
    <>
      <UnorderedList styleType="'- '">
        {error && (
          <Text>No pudimos recuperrar los datos INFINITY: {error.message}</Text>
        )}

        {data?.map((todo) => (
          <ListItem key={todo.id}>{todo.title}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
