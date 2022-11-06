import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/Login";
import MainHub from "./components/MainHub";
import PrivateRoute from "./PrivateRoute";
import News from "./components/hubpages/News";
import Sports from "./components/hubpages/Sports";
import Photos from "./components/hubpages/Photos";
import Tasks from "./components/hubpages/Tasks";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainHub />
          </PrivateRoute>
        }></Route>
      <Route
        path="/sports"
        element={
          <PrivateRoute>
            <Sports />
          </PrivateRoute>
        }></Route>
      <Route
        path="/photos"
        element={
          <PrivateRoute>
            <Photos />
          </PrivateRoute>
        }></Route>
      <Route
        path="/news"
        element={
          <PrivateRoute>
            <News />
          </PrivateRoute>
        }></Route>
      <Route
        path="/tasks"
        element={
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        }></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/news" element={<News />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;
