import { useContext } from "react";
import TitleContext from "../contexts/TitleContext";

export default function useTitle() {
  return useContext(TitleContext);
}
