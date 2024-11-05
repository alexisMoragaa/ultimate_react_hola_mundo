import { createContext } from "react";

type TitleContextTipe = {
  title: string;
  updateTitle: (title: string) => void;
};

export default createContext<TitleContextTipe>({} as TitleContextTipe);
