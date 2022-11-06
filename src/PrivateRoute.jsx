import React from "react";
import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { auth } from "./firebase";
import AuthContext from "./store/auth-context";

export default function PrivateRoute({ children }) {
  const authCtx = useContext(AuthContext);
  if (authCtx.userName) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
