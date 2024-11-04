import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetail } from "../../types";

type Props = {
  meal: MealDetail;
};

const joinIngredients = (data: MealDetail) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (ingredient !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

function MealCardContent({ meal }: Props) {
  const ingredients = joinIngredients(meal);
  console.log(ingredients);
  return (
    <>
      <ModalHeader>{meal?.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          src={meal?.strMealThumb}
          alt={meal?.strMeal}
          borderRadius="lg"
        />

        <Heading size="md" mt="4">
          Ingredients
        </Heading>

        <OrderedList pl="3">
          {ingredients.map((i) => {
            return <ListItem key={i}>{i}</ListItem>;
          })}
        </OrderedList>

        <Heading size="md" mt="4">
          Instructions
        </Heading>

        <Text whiteSpace="pre-line">{meal?.strInstructions}</Text>
      </ModalBody>
    </>
  );
}

export default MealCardContent;
