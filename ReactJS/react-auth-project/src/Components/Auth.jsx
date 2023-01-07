import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const login=()=>{
    setUser()
  }
  const logout=()=>{
    setUser(null)
  }  
  return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;
};
