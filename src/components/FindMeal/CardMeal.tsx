import {
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { meals } from "../../types";

type props = {
  meal: meals;
};

function CardMeal({ meal }: props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Heading size="md">
          <Text>{meal.strMeal}</Text>
        </Heading>
        <CardFooter p="0">
          <Button color="white" bgColor="blue.400">
            Ver Receta
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default CardMeal;
