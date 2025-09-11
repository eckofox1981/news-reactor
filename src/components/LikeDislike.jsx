import { Button, ButtonGroup } from "@mui/material";

export function LikeDislike({ likes, dislikes }) {
  return (
    <ButtonGroup
      sx={{
        display: "flex",
        alignItems: "center",
        width: 1,
      }}
    >
      <Button
        sx={{
          width: "50%",
          textWrap: "nowrap",
          backgroundColor: "var(--accent-color)",
          color: "var(--background-color)",
        }}
      >
        Likes: {likes}
      </Button>

      <Button
        sx={{
          width: "50%",
          textWrap: "nowrap",
          backgroundColor: "var(--contrast-color)",
          color: "var(--special-color)",
        }}
      >
        Dislikes: {dislikes}
      </Button>
    </ButtonGroup>
  );
}
