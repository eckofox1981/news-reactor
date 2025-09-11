import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export function LikeDislike({ likes, dislikes }) {
  const [likesCount, setLikeCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);

  const addLike = () => {
    setLikeCount(likesCount + 1);
  };

  const addDislike = () => {
    setDislikesCount(dislikesCount + 1);
  };

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
        onClick={() => {
          addLike();
        }}
      >
        Likes: {likesCount}
      </Button>

      <Button
        sx={{
          width: "50%",
          textWrap: "nowrap",
          backgroundColor: "var(--contrast-color)",
          color: "var(--special-color)",
        }}
        onClick={() => {
          addDislike();
        }}
      >
        Dislikes: {dislikesCount}
      </Button>
    </ButtonGroup>
  );
}
