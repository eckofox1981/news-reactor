import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import "../styles/header.css";
import reactNewsLogo from "../assets/reactnewslogo.png";
import { NavLink } from "react-router-dom";

export function Header({ darkmode, toggleDrawer }) {
  return (
    <header>
      <img
        src={reactNewsLogo}
        alt="React News Logo"
        onClick={() => {
          toggleDrawer(true);
        }}
      />
      <div>
        <Typography variant="h1">React news</Typography>
        <Typography variant="h5">
          the best dummy news site on the web
        </Typography>
      </div>
      <div className="buttons">
        <ButtonGroup variant="contained" size="large">
          <NavLink to={"/"}>
            <Button>Home</Button>
          </NavLink>
          <NavLink to={"/login"}>
            <Button>Login</Button>
          </NavLink>
          <NavLink to={"/real-news"}>
            <Button>Real News</Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button>About</Button>
          </NavLink>
        </ButtonGroup>
        <ToggleButtonGroup
          color="info"
          size="small"
          exclusive
          onChange={(e) => {
            darkmode(e.target.value);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </header>
  );
}
