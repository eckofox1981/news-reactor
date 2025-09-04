import { createTheme } from "@mui/material";

export const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#12fbf6",
      light: "#e6f1f4",
      dark: "#0d0d1a",
      contrastText: "#0a4c77",
    },
  },
});

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#12fbf6",
      light: "#e6f1f4",
      dark: "#0d0d1a",
      contrastText: "#0a4c77",
    },
    secondary: {
      main: "#e6f1f4",
      light: "#12fbf6",
      contrastText: "#0a4c77",
    },
  },
});
