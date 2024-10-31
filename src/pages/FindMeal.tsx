import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/FindMeal/Header";
import SideBar from "../components/FindMeal/SideBar";
import MainContent from "../components/FindMeal/MainContent";
import { Category } from "../types";
import { useState } from "react";

function FindMeal() {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });
  return (
    <>
      <Grid
        fontSize={14}
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `230px 1fr` }}
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <Header />
        </GridItem>

        <GridItem p="3" area={"nav"} minHeight="calc(100vh - 60px)">
          <SideBar selected={selectedCategory} onClick={setSelectedCategory} />
        </GridItem>

        <GridItem pl="2" bg="green.300" area={"main"}>
          <MainContent />
        </GridItem>
      </Grid>
    </>
  );
}

export default FindMeal;
