import { createBrowserRouter } from "react-router-dom";
import FindMeal from "./FindMeal";
import ReactQuery from "./ReactQuery";

const router = createBrowserRouter([
  { path: "/", element: <>Hola</> },
  { path: "/react-query", element: <ReactQuery /> },
  { path: "/find-meal", element: <FindMeal /> },
]);

export default router;
