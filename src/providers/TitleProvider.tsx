import { ReactNode, useState } from "react";
import TitleContext from "../contexts/TitleContext";

type Props = {
  children: ReactNode;
};

export default function TitleProvider({ children }: Props) {
  const [title, setTtitle] = useState("Todos");

  const updateTitle = (title: string) => {
    setTtitle(title);
  };
  return (
    <TitleContext.Provider value={{ title, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
}
