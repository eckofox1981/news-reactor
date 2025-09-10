import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import "../styles/header.css";
import reactNewsLogo from "../assets/reactnewslogo.png";
import { useMode } from "../functionality/store";
import { NavMenu } from "./NavMenu";

export function Header({ toggleDrawer }) {
  const setUiMode = useMode((store) => store.setUiMode);

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
        <Typography
          variant="h1"
          sx={{
            color: "var(--contrast-color)",
            fontWeight: "800",
            margin: 0,
            textAlign: "center",
            fontSize: {
              "@media (max-width:680px)": {
                fontSize: "4rem",
              },
              "@media (max-width:580px)": {
                fontSize: "3rem",
              },
            },
          }}
        >
          React news
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "100",
            marginTop: -3,
            textAlign: "center",
          }}
        >
          the best dummy news site on the web
        </Typography>
      </div>
      <div className="buttons">
        <NavMenu />
        <ToggleButtonGroup
          color="info"
          size="small"
          exclusive
          onChange={(e) => {
            setUiMode(e.target.value);
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
