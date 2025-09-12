import { Button, ButtonGroup } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import RateReviewIcon from "@mui/icons-material/RateReview";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import { NavLink } from "react-router-dom";
import { useSideBarStore } from "../functionality/store";

export function NavMenu() {
  const closeSideBar = useSideBarStore((store) => store.closeSideBar);

  return (
    <ButtonGroup
      variant="contained"
      size="large"
      onClick={() => {
        closeSideBar();
      }}
    >
      <NavLink to={"/"}>
        <Button>
          <HomeFilledIcon />
        </Button>
      </NavLink>
      <NavLink to={"/write"}>
        <Button>
          <RateReviewIcon />
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
