import {
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Meal } from "../../types";

type props = {
  meal: Meal;
  openRecipe: () => void;
};

function CardMeal({ meal, openRecipe }: props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Heading size="md">
          <Text>{meal.strMeal}</Text>
        </Heading>
        <CardFooter p="0">
          <Button color="white" bgColor="blue.400" onClick={openRecipe}>
            Ver Receta
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default CardMeal;
