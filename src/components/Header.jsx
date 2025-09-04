import {
  Button,
  ButtonGroup,
  FormControlLabel,
  IconButton,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { buttonTheme } from "../styles/theme";
import { Menu } from "@mui/icons-material";

const theme = buttonTheme;

export function Header({ navLinks, darkmodeFunction, openDrawer }) {
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
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, display: { xs: "block" } }}
        onClick={openDrawer}
        className="hamburger"
      >
        <Menu sx={{ fontSize: 50 }} />
      </IconButton>
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
          <FormControlLabel
            control={<Switch />}
            label="Darkmode"
            onChange={darkmodeFunction}
          />
        </div>
      </ThemeProvider>
    </header>
  );
}
