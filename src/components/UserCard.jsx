import { useEffect, useState } from "react";
import { fetchUser, UserObject } from "../object/User";
import { FemaleSvg, MaleSvg } from "./minorComponents/Svg";
import "../styles/userCard.css";
import { Box, Container, LinearProgress } from "@mui/material";

export function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const userFetched = await fetchUser(userId).catch(() => null);
      setUser(userFetched);
    };
    getUser();
  }, []);

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
            width: 365,
            height: 38,
            margin: 1,
            border: "1px solid var(--contrast-color)",
            borderRadius: 2,
            backgroundImage:
              "linear-gradient(to right, var(--accent-color), var(--contrast-color), var(--contrast-color))",
            alignSelf: "center",
          }}
        >
          <LinearProgress />
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
