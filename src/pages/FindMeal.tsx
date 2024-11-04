import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "../components/FindMeal/Header";
import SideBar from "../components/FindMeal/SideBar";
import MainContent from "../components/FindMeal/MainContent";
import { Meal, Category, searchForm } from "../types";
import { useState } from "react";
import useFindMealHook from "../hooks/useFindMealHook";
import RecipiModal from "../components/FindMeal/RecipiModal";

function FindMeal() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`;

  const {
    data: dataMeal,
    loading: loadingMeal,
    findMeals,
    // getDetailMeal,
  } = useFindMealHook<Meal>(url);

  const searchMeal = (data: searchForm) => {
    url = `https:/www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`;
    findMeals(url);
  };

  // const getIdMeal = (idMeal: string) => {
  //   url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  //   console.log(url);
  //   // getDetailMeal(url);
  // };

  return (
    <>
      <Grid
        fontSize={14}
        templateAreas={`"header header" "nav main"`}
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
          <Header onSubmit={searchMeal} />
        </GridItem>

        <GridItem
          p="3"
          area={"nav"}
          pos="sticky"
          height="calc(100vh - 60px)"
          top="60px"
          left="0"
          bg="white"
          overflowY="auto"
        >
          <SideBar selected={selectedCategory} onClick={setSelectedCategory} />
        </GridItem>

        <GridItem overflowY="auto" p="2" bg="gray.100" area={"main"}>
          <MainContent
            data={dataMeal}
            loading={loadingMeal}
            openRecipe={onOpen}
          />
        </GridItem>
      </Grid>
      <RecipiModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default FindMeal;
