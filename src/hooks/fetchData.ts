import { useEffect, useState } from "react";

type ID = {
  id?: string | number;
};

export default function fetchData<T extends ID>(url: string) {
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
    setData([{ ...element }, ...data]);

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

  const deleteData = async (id: string | number) => {
    setLoading(true);
    const initialData = [...data];
    setData(data.filter((element) => element.id != id));

    try {
      const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        setData(initialData);
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, addData, deleteData };
}
