import { Category } from "../../types";
import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import getCategories from "../../hooks/useFindMealHook";

type Props = {
  selected: Category;
  onClick: (category: Category) => void;
};

function SideBar({ selected, onClick }: Props) {
  const { dataCategory, loading } = getCategories<Category>(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );

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
        {dataCategory.map((c) => {
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
