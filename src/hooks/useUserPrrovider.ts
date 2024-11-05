import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function useUserProvider() {
  return useContext(UserContext);
}
