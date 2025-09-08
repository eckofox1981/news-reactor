import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider, useColorScheme } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { RealNews } from "./pages/RealNews";

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    localStorage.setItem("ui-mode", mode);
    document.body.classList.toggle("darkmode");
  }, [mode]);

  const openDrawer = (value) => {
    setSideBarIsOpen(value);
  };

  const enableDarkmode = (value) => {
    console.log("running" + value);

    setMode(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header darkmode={enableDarkmode} toggleDrawer={openDrawer} />
        <Sidebar isOpen={sideBarIsOpen} toggleDrawer={openDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/real-news" element={<RealNews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
