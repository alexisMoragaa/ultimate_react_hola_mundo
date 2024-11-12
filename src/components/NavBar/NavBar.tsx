import { Grid } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <Grid templateColumns="repeat(8, 1fr)" boxShadow="lg" p={2} mb={3}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/react-query">React Query</NavLink>
        <NavLink to="/find-meal">Find Meal</NavLink>
        <NavLink to="/cms">CMS</NavLink>
        <NavLink to="/context">Context</NavLink>
        <NavLink to="/efects">Efects</NavLink>
        <NavLink to="/ejercicios-anteriores">Ejercicios Anteriores</NavLink>
        <NavLink to="/formularios">Formularios</NavLink>
      </Grid>
      <Outlet />
    </>
  );
}
