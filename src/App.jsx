import { useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { useMode } from "./functionality/store";
import { ArticlePage } from "./pages/ArticlePage";
import { EditArticle } from "./pages/EditArticle";
import { SearchPage } from "./pages/SearchPage";
import { Toast } from "./components/Toast";

function App() {
  const uiMode = useMode((store) => store.uiMode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: uiMode,
        },
      }),
    [uiMode]
  );

  useEffect(() => {
    document.body.classList.toggle("darkmode", uiMode === "dark");
  }, [uiMode]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<EditArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Toast />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
