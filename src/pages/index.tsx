import { createBrowserRouter } from "react-router-dom";
import FindMeal from "./FindMeal";
import ReactQuery from "./ReactQuery";
import Cms from "./Cms";
import ContextPage from "./ContextPage";
import Efects from "./Efects";
import EjerciciosAnteriores from "./EjerciciosAnteriores";
import Formularios from "./Formularios";
import Home from "./Home";
import NavBar from "../components/NavBar/NavBar";
import ErrorDetail from "./ErrorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorDetail />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/react-query", element: <ReactQuery /> },
      { path: "/find-meal", element: <FindMeal /> },
      { path: "/cms", element: <Cms /> },
      { path: "/context", element: <ContextPage /> },
      { path: "/efects", element: <Efects /> },
      { path: "/ejercicios-anteriores", element: <EjerciciosAnteriores /> },
      { path: "/formularios", element: <Formularios /> },
    ],
  },
]);

export default router;
