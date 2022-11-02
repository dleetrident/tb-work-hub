import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import MainHub from "./components/MainHub";
import AuthProvider from "./store/AuthProvider";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return <div>{authCtx.authState ? <MainHub /> : <Login />}</div>;
}

export default App;
