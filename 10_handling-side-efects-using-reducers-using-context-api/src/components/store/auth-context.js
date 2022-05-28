import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLogged", "1");
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogged");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
