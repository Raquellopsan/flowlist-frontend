import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "../paginas/Registro";

const App = () => {
  return (
    <div className="animated-bg h-screen w-full">
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
};

export default App;
