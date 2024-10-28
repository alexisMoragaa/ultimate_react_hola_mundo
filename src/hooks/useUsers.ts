import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function useUsers() {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";
    async function getUsers() {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data = (await response.json()) as User[];
        setUsers(data);
        setError(undefined);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();

    return () => controller.abort();
  }, []);

  return { users, loading, error };
}
