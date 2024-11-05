import { createContext } from "react";

type UserContextType = {
  user: { name: string };
  toogleLogin: () => void;
};

export default createContext<UserContextType>({} as UserContextType);
