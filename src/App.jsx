import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { setDarkMode } from "./functionality/darkmode";
import { RetractableSideBar } from "./components/RetractableSideBar";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navlinks = ["Home", "Login", "About"];

  const openSideBar = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <BrowserRouter>
      <RetractableSideBar
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
      />
      <Header
        navLinks={navlinks}
        darkmodeFunction={setDarkMode}
        openDrawer={openSideBar}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
