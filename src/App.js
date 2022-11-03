import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/Login";
import MainHub from "./components/MainHub";

import { useContext, useEffect, useState } from "react";
import AuthContext from "./store/auth-context";
import Test from "./components/Test";
import News from "./components/hubpages/News";
import Sports from "./components/hubpages/Sports";

function App() {
  const authCtx = useContext(AuthContext);
  // const Login = React.lazy(() => import("./components/Login"));
  // const MainHub = React.lazy(() => import("./components/MainHub"));
  return (
    <Routes>
      <Route path="/" element={<MainHub />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mainhub" element={<MainHub />} />
      <Route path="/news" element={<News />} />
      <Route path="/sports" element={<Sports />} />
    </Routes>
  );
}

export default App;
