import React from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
    const createUser = () =>{
        return createUserWithEmailAndPassword
    }
  const authInfo = {};
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
