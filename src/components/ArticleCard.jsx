import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
} from "@mui/material";
import { mainTheme } from "../styles/theme";

export function ArticleCard({ post }) {
  const postToPublish = {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  };

  console.log(postToPublish);

  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.contrastText,
          minHeight: "100vh",
          p: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <CardContent>
            <h1>{postToPublish.title}</h1>
            <p>{postToPublish.body}</p>
            <i>{postToPublish.userId}</i>
          </CardContent>
          <CardActions>
            <Button size="small">Read...</Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
