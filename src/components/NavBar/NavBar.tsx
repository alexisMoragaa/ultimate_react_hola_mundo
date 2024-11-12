import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Grid templateColumns="repeat(8, 1fr)" boxShadow="lg" p={2}>
      <Link to="/">Home</Link>
      <Link to="/react-query">React Query</Link>
      <Link to="/find-meal">Find Meal</Link>
      <Link to="/cms">CMS</Link>
      <Link to="/context">Context</Link>
      <Link to="/efects">Efects</Link>
      <Link to="/ejercicios-anteriores">Ejercicios Anteriores</Link>
      <Link to="/formularios">Formularios</Link>
    </Grid>
  );
}
