import { useState } from "react";

export default <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();

  async function fetchData(url: string) {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(`${response.status}`);

      const data = await response.json();
      setData(data.meals[0]);

      setError(undefined);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData };
};
