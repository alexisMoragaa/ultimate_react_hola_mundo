import {
  Button,
  Container,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { searchForm } from "../../types";

type Props = {
  onSubmit: (data: searchForm) => void;
};
function Header({ onSubmit }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<searchForm>();

  return (
    <>
      <Container mt={2} maxW="3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch color="gray" />
            </InputLeftElement>
            <Input
              mr={5}
              focusBorderColor={!!errors.search ? "red.500" : "blue.400"}
              isInvalid={!!errors.search}
              type="text"
              id="search"
              {...register("search", {
                required: true,
                minLength: {
                  value: 4,
                  message: "Minimo 4 caracteres",
                },
              })}
              placeholder="Intenta con 'Chiken o Beans'"
            />
            <Button colorScheme="teal" type="submit">
              Buscar
            </Button>
          </InputGroup>
          {errors?.search && (
            <FormErrorMessage>{errors?.search?.message}</FormErrorMessage>
          )}
        </form>
      </Container>
    </>
  );
}

export default Header;
