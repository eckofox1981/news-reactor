import { Button, Drawer, TextField, Typography } from "@mui/material";
import reactNewsLogo from "../assets/reactnewslogo.png";
import "../styles/sidebar.css";
import { NavMenu } from "./NavMenu";
import {
  useBaseArticles,
  useQueryStore,
  useSideBarStore,
} from "../functionality/store";
import { Link, useNavigate } from "react-router-dom";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useState } from "react";

export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState();
  const baseArticles = useBaseArticles((store) => store.baseArticles);
  const sideBarOpen = useSideBarStore((store) => store.sideBarOpen);
  const closeSideBar = useSideBarStore((store) => store.closeSideBar);

  const setQuery = useQueryStore((store) => store.setQuery);

  const navigate = useNavigate();

  const TitleList = () => {
    return baseArticles.map((a) => (
      <Link
        key={a.id}
        to={`/article/${a.id}`}
        onClick={() => {
          closeSideBar();
        }}
      >
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
      <span className="query-bar">
        <TextField
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          autoComplete="off"
          label="Search for articles"
          placeholder="Type a search word"
          style={{ width: "20rem" }}
          slotProps={{
            input: {
              sx: {
                fontSize: "1.5rem",
                color: "var(hsl(0, 0%, 90%))",
                "&::placeholder": {
                  color: "var(hsl(0, 0%, 90%))",
                  opacity: 0.7,
                },
              },
            },
            inputLabel: {
              sx: {
                color: "var(hsl(0, 0%, 90%))",
                "&.Mui-focused": {
                  color: "var(hsl(0, 0%, 90%))",
                },
              },
            },
          }}
          sx={{
            width: "60%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(hsl(0, 0%, 90%))",
              },
              "&:hover fieldset": {
                borderColor: "var(hsl(0, 0%, 90%))",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(hsl(0, 0%, 90%))",
              },
            },
          }}
        />
        <PageviewIcon
          fontSize="large"
          sx={{
            height: "4rem",
            width: "4rem",
            ":hover": { cursor: "pointer" },
          }}
          onClick={() => {
            setQuery(searchQuery);
            navigate("/search");
            setSearchQuery("");
            closeSideBar();
          }}
        />
      </span>
      <TitleList />
    </Drawer>
  );
}
