import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import "../styles/header.css";
import reactNewsLogo from "../assets/reactnewslogo.png";

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
        <h1>React News</h1>
        <p>the best dummy news site on the web</p>
      </div>
      <div className="buttons">
        <ButtonGroup variant="contained" size="large">
          <Button>Home</Button>
          <Button>Login</Button>
          <Button>Real News</Button>
          <Button>About</Button>
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
          <ToggleButton value="Light">Light</ToggleButton>
          <ToggleButton value="Dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </header>
  );
}
