import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  const navlinks = ["Home", "Login", "About"];

  return (
    <BrowserRouter>
      <Header navLinks={navlinks} />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
