import axios from "axios";
import { useEffect, useState } from "react";
import { Category, CategoryResponse } from "../../types";
import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";

type Props = {
  selected: Category;
  onClick: (category: Category) => void;
};

function SideBar({ selected, onClick }: Props) {
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    async function getCategory() {
      const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      axios
        .get<CategoryResponse>(url, { signal })
        .then(({ data }) => !ignore && setCategory(data.meals))
        .finally(() => !ignore && setLoading(false));
    }

    getCategory();

    return () => {
      controller.abort();
      ignore = true;
    };
  }, []);

  const selectedProps = {
    bgColor: "blue.400",
    color: "white",
    fontWeight: "bold",
    borderRadius: "3px",
  };

  return loading ? (
    <SkeletonText mt="4" noOfLines={8} spacing="4" skeletonHeight="2" />
  ) : (
    <>
      <Heading fontSize={15} mb={3} color="blue.400">
        CATEGORIAS
      </Heading>

      <VStack align="stretch">
        {category.map((c) => {
          return (
            <Link
              px={2}
              py={1}
              _hover={{ textDecoration: "none" }}
              key={c.strCategory}
              onClick={() => onClick(c)}
              {...(selected.strCategory == c.strCategory && selectedProps)}
            >
              {c.strCategory}
            </Link>
          );
        })}
      </VStack>
    </>
  );
}

export default SideBar;
