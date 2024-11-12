import {
  Button,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import useCreatePost from "../../hooks/useQuery/useCreatePost";
import useDeletePost from "../../hooks/useQuery/useDeletePost";
import { Post } from "../../types";

function Mutaciones() {
  const refTitle = useRef<HTMLInputElement>(null);
  const refBody = useRef<HTMLInputElement>(null);

  const {
    mutate,
    isPending,
    error: mutateError,
  } = useCreatePost(() => cleanForm);

  const { mutate: deleteMutation } = useDeletePost();

  const cleanForm = () => {
    if (refTitle.current?.value && refBody.current?.value) {
      refTitle.current.value = "";
      refBody.current.value = "";
    }
  };

  const { data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=15")
        .then((response) => response.data),
  });

  return (
    <>
      <Heading as="h5" size="lg">
        Mutaciones Post
      </Heading>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (refTitle.current?.value && refBody.current?.value) {
            mutate({
              id: 0,
              userId: 0,
              title: refTitle.current.value,
              body: refBody.current.value,
            });
          }
        }}
      >
        <div>
          <Text>Title</Text>
          <Input ref={refTitle} type="text" />
        </div>
        <div>
          <Text>Body</Text>
          <Input ref={refBody} type="text" />
        </div>
        <div>
          <Button type="submit" isDisabled={isPending}>
            {isPending ? "Creando..." : "Enviar"}
          </Button>
          {mutateError && <Text>{mutateError.message}</Text>}
        </div>
      </form>

      <UnorderedList styleType="'- '">
        {error && (
          <Text>No pudimos recuperrar los datos de Post: {error.message}</Text>
        )}

        {data?.map((todo) => (
          <ListItem key={todo.id} onClick={() => deleteMutation(todo)}>
            {todo.title}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default Mutaciones;
