import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Registro from "../paginas/Registro";
import "./App.css";
import Login from "../paginas/Login";
import Dashboard from "../paginas/Dashboard";

const App = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn") === "yes";

  return (
    <div className="animated-bg h-screen w-full">
      <Routes>
        <Route
          path="/login"
          element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/registro"
          element={userLoggedIn ? <Navigate to="/dashboard" /> : <Registro />}
        />
        <Route
          path="/dashboard"
          element={userLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={
            userLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
