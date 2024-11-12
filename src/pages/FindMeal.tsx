import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/FindMeal/Header";
import MainContent from "../components/FindMeal/MainContent";
import RecipiModal from "../components/FindMeal/RecipiModal";
import SideBar from "../components/FindMeal/SideBar";
import useFetchData from "../hooks/useFetchData";
import useFindMealHook from "../hooks/useFindMealHook";
import { Category, Meal, MealDetail, searchForm } from "../types";

function FindMeal() {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/";
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });

  let url = `${baseURL}filter.php?c=${selectedCategory.strCategory}`;

  const {
    data: dataMeal,
    loading: loadingMeal,
    findMeals,
  } = useFindMealHook<Meal>(url);

  const searchMeal = (data: searchForm) => {
    url = `${baseURL}search.php?s=${data.search}`;
    findMeals(url);
  };

  const {
    fetchData,
    data: detailMeal,
    loading: loadingModal,
  } = useFetchData<MealDetail>();
  const searchMealDetail = (meal: Meal) => {
    onOpen();
    fetchData(`${baseURL}lookup.php?i=${meal.idMeal}`);
    console.log(detailMeal);
  };

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
            openRecipe={searchMealDetail}
          />
        </GridItem>
      </Grid>
      <RecipiModal
        meal={detailMeal}
        loading={loadingModal}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default FindMeal;
