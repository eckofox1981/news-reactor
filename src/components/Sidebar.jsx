import { Drawer, Typography } from "@mui/material";
import reactNewsLogo from "../assets/reactnewslogo.png";
import "../styles/sidebar.css";
import { NavMenu } from "./NavMenu";
import { useBaseArticles, useSideBarStore } from "../functionality/store";
import { Link } from "react-router-dom";

export function Sidebar() {
  const baseArticles = useBaseArticles((store) => store.baseArticles);
  const sideBarOpen = useSideBarStore((store) => store.sideBarOpen);
  const closeSideBar = useSideBarStore((store) => store.closeSideBar);

  const TitleList = () => {
    return baseArticles.map((a) => (
      <Link key={a.id} to={`/article/${a.id}`}>
        <h3>{a.title}</h3>
      </Link>
    ));
  };

  return (
    <Drawer
      open={sideBarOpen}
      onClose={() => {
        closeSideBar();
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
      }}
      onClick={() => {
        closeSideBar();
      }}
    >
      <img
        src={reactNewsLogo}
        alt="React News Logo"
        className="logo"
        onClick={closeSideBar}
      />
      <Typography variant="h1" sx={{ fontSize: "2rem", alignSelf: "center" }}>
        React News
      </Typography>
      <div className="nav-menu">
        <NavMenu />
      </div>
      <TitleList />
    </Drawer>
  );
}
