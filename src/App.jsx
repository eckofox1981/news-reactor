import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider, useColorScheme } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { RealNews } from "./pages/RealNews";
import { Footer } from "./components/Footer";
import { useMode } from "./functionality/store";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const uiMode = useMode((store) => store.uiMode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [uiMode]
  );

  useEffect(() => {
    console.log(uiMode);

    localStorage.setItem("ui-mode", uiMode);
    document.body.classList.toggle("darkmode");
  }, [uiMode]);

  const openDrawer = (value) => {
    setSideBarIsOpen(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleDrawer={openDrawer} />
        <Sidebar isOpen={sideBarIsOpen} toggleDrawer={openDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/real-news" element={<RealNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
