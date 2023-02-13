import React, { createContext, useState } from "react";
import { API } from "../services/api";

type UserType = {
  id: number;
  name: string;
  photo: string;
  email: string;
  password: string;
  status: "Logged" | "Logged out";
};

interface IAuthContext {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  login: (email: string, password: string) => void;
  logout: () => void;
}
export const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState({} as UserType);

  function login(email: string, password: string) {
    API.get_user_list()
      .then((res) => {
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];

          if (element.email === email && element.password === password) {
            setUser({
              id: element.id,
              email: element.email,
              name: element.name,
              password: element.password,
              status: "Logged",
              photo: element.photo,
            });
          }
        }
      })
      .catch((err) => {
        console.log("Error Users");
      });
  }

  function logout() {
    user &&
      setUser({
        ...user,
        email: "",
        password: "",
        status: "Logged out",
      });
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
