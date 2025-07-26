import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Registro from "../paginas/Registro";
import Login from "../paginas/Login";
import Dashboard from "../paginas/Dashboard";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");

    // Solo redirige automáticamente si estás en la raíz "/"
    if (location.pathname === "/") {
      if (userLoggedIn === "yes") {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }
  }, [navigate, location.pathname]);

  return (
    <div className="animated-bg h-screen w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<div>Cargando...</div>} />
        {/* Esto evitará errores si se accede a una ruta inexistente */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
