import { Button, ButtonGroup } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <ButtonGroup variant="contained" size="large">
      <NavLink to={"/"}>
        <Button>
          <HomeFilledIcon />
        </Button>
      </NavLink>
      <NavLink to={"/login"}>
        <Button>
          <LoginIcon />
        </Button>
      </NavLink>
      <NavLink to={"/real-news"}>
        <Button>
          <PublicIcon />
        </Button>
      </NavLink>
      <NavLink to={"/about"}>
        <Button>
          <InfoIcon />
        </Button>
      </NavLink>
    </ButtonGroup>
  );
}
