import { useEffect, useState } from "react";
import axios from "axios";

export default function useFindMealHook<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    async function getCategory() {
      axios
        .get<{ meals: T[] }>(url, { signal })
        .then(({ data }) => !ignore && setData(data.meals))
        .finally(() => !ignore && setLoading(false));
    }

    getCategory();

    return () => {
      controller.abort();
      ignore = true;
    };
  }, [url]);

  return { data, loading };
}