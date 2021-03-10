import React, { useState, useEffect, createContext } from "react";
import { app } from "../Firebase";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
