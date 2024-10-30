import { useEffect, useState } from "react";

export default function fetchData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    async function getData() {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);

        const data: T[] = await response.json();
        setData(data);
        setError(undefined);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getData();
    return () => controller.abort();
  }, []);

  const addData = async (element: T) => {
    setLoading(true);
    const initialData = [...data];
    setData([{ id: 0, ...element }, ...data]);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(element),
        headers: { "Conteny-Type": "application/json" },
      });

      if (!response.ok) {
        setData(initialData);
        throw new Error(`${response.status}`);
      }

      const saveData = await response.json();
      setData([{ ...saveData, ...element }, ...initialData]);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, addData };
}
