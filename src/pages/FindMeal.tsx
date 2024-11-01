import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/FindMeal/Header";
import SideBar from "../components/FindMeal/SideBar";
import MainContent from "../components/FindMeal/MainContent";
import { meals, Category } from "../types";
import { useState } from "react";
import useFindMealHook from "../hooks/useFindMealHook";

function FindMeal() {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`;

  const { data: dataMeal, loading: loadingMeal } = useFindMealHook<meals>(url);

  return (
    <>
      <Grid
        fontSize={14}
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `230px 1fr` }}
      >
        <GridItem
          position="sticky"
          top={0}
          pl="2"
          boxShadow="lg"
          zIndex={1}
          area={"header"}
          bg="white"
        >
          <Header />
        </GridItem>

        <GridItem
          pos="sticky"
          top="60px"
          p="3"
          area={"nav"}
          minHeight="calc(100vh - 60px)"
          overflowY="auto"
          bg="white"
        >
          <SideBar selected={selectedCategory} onClick={setSelectedCategory} />
        </GridItem>

        <GridItem overflowY="auto" p="2" bg="gray.100" area={"main"}>
          <MainContent data={dataMeal} loading={loadingMeal} />
        </GridItem>
      </Grid>
    </>
  );
}

export default FindMeal;
