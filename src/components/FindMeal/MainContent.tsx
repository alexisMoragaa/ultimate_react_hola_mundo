import { SimpleGrid } from "@chakra-ui/react";
import { meals } from "../../types";
import CardMeal from "./CardMeal";
import SkeletonCard from "./SkeletonCard";

type Props = {
  data: meals[];
  loading: boolean;
};

function MainContent({ data, loading }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {loading && skeletons.map((s) => <SkeletonCard key={s} />)}

        {!loading &&
          data &&
          data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />)}
      </SimpleGrid>
    </>
  );
}

export default MainContent;
