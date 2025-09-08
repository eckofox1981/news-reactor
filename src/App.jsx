import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { useColorScheme } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const openDrawer = (value) => {
    setSideBarIsOpen(value);
  };

  const enableDarkmode = (value) => {
    console.log("darkmode function:" + value);
  };

  return (
    <>
      <Header darkmode={enableDarkmode} toggleDrawer={openDrawer} />
      <Sidebar isOpen={sideBarIsOpen} toggleDrawer={openDrawer} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
