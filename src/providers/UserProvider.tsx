import { ReactNode, useState } from "react";
import UserContext from "../contexts/UserContext";

type Props = {
  children: ReactNode;
};

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<{ name: string }>({ name: "Chanchito" });

  const toogleLogin = () => {
    setUser({ name: user.name === "Chanchito" ? "Anonimus" : "Chanchito" });
  };

  return (
    <UserContext.Provider value={{ user, toogleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
