import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../../types";

export default function useCreatePost(onCreate: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Post) =>
      axios
        .post<Post>("https://jsonplaceholder.typicode.com/posts", post)
        .then((response) => response.data),
    onSuccess: (savedPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (post = []) => [
        savedPost,
        ...post,
      ]);

      onCreate();
    },
  });
}
