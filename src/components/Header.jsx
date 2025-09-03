import {
  Button,
  ButtonGroup,
  FormControlLabel,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { buttonTheme } from "../styles/theme";

const theme = buttonTheme;

export function Header({ navLinks }) {
  const NavLinks = navLinks.map((link) => {
    return (
      <NavLink key={navLinks.indexOf(link)} to={"/" + link}>
        <Button variant="outlined" size="large">
          {link}
        </Button>
      </NavLink>
    );
  });

  return (
    <header>
      {/** LOGO TITLE NAV(HOME, LOGIN) DARKMODE */}

      <a href="">
        <img src="../reactnewslogo.png" alt="React News logo" />
      </a>
      <div className="react-news-title">
        <h1>React News</h1>
        <i>The best dummy news on the web</i>
      </div>
      <ThemeProvider theme={buttonTheme}>
        <div className="buttons-switch">
          <ButtonGroup>{NavLinks}</ButtonGroup>
          <FormControlLabel control={<Switch />} label="Darkmode" />
        </div>
      </ThemeProvider>
    </header>
  );
}
