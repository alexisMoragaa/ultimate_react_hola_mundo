import {
  Button,
  Card,
  CardBody,
  Heading,
  SkeletonText,
  Text,
  Image,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { meals } from "../../types";

type Props = {
  data: meals[];
  loading: boolean;
};

function MainContent({ data, loading }: Props) {
  return loading ? (
    <SkeletonText mt="4" noOfLines={8} spacing="4" skeletonHeight="2" />
  ) : (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {data.map((meal) => (
          <Card key={meal.idMeal} boxShadow="lg">
            <CardBody>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                borderRadius="lg"
              />
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
        ))}
      </SimpleGrid>
    </>
  );
}

export default MainContent;
