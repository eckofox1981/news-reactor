import { useEffect, useState } from "react";
import { fetchUser, UserObject } from "../object/User";
import { FemaleSvg, MaleSvg } from "./minorComponents/Svg";
import "../styles/userCard.css";
import { Box, Container, LinearProgress } from "@mui/material";

export function UserCard({ userId, local }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const userFetched = await fetchUser(userId, local).catch(() => null);
      setUser(userFetched);
    };
    getUser();
  }, [userId, local]);

  const LoveSymbol = () => {
    if (user.gender === "male") {
      return <MaleSvg />;
    } else {
      return <FemaleSvg />;
    }
  };

  const LaCarte = () => {
    if (user === null) {
      return (
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            border: "1px solid var(--contrast-color)",
            borderRadius: 2,
            width: 365,
            height: 48,
            marginBottom: 1,
            backgroundImage:
              "linear-gradient(to right, var(--accent-color), var(--contrast-color), var(--contrast-color))",
            color: "var(--special-color)",
          }}
        >
          <LinearProgress sx={{ height: "1rem", marginTop: "1rem" }} />
        </Box>
      );
    } else {
      return (
        <Container
          disableGutters
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--contrast-color)",
            borderRadius: 2,
            width: 365,
            marginBottom: 1,
            backgroundImage:
              "linear-gradient(to right, var(--accent-color), var(--contrast-color), var(--contrast-color))",
            color: "var(--special-color)",
          }}
        >
          <LoveSymbol />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <b style={{ textAlign: "center" }}>{user.username}</b>
            <i style={{ textAlign: "center" }}>
              {user.city}, {user.state}
            </i>
          </Box>
        </Container>
      );
    }
  };

  return <LaCarte />;
}
