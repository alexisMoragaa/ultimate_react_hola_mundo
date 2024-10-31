import { useEffect, useState } from "react";
import axios from "axios";

export default function getCategories<T>(url: string) {
  const [dataCategory, setDataCategory] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    async function getCategory() {
      axios
        .get<{ meals: T[] }>(url, { signal })
        .then(({ data }) => !ignore && setDataCategory(data.meals))
        .finally(() => !ignore && setLoading(false));
    }

    getCategory();

    return () => {
      controller.abort();
      ignore = true;
    };
  }, []);

  return { dataCategory, loading };
}
