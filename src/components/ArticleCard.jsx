import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { UserCard } from "./UserCard";

export function ArticleCard({
  id,
  title,
  body,
  likes,
  dislikes,
  views,
  userId,
}) {
  return (
    <Paper
      elevation={10}
      sx={{
        maxWidth: 400,
        margin: 1,
        alignContent: "center",
        backgroundColor: "primary.main",
        padding: 0.5,
      }}
    >
      <Card
        sx={{
          maxWidth: 398,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center", fontSize: 30 }}>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <CardActions sx={{ alignSelf: "flex-end", textIndent: 5 }}>
            <Button
              size="small"
              variant="contained"
              sx={{
                fontStyle: "italic",
                alignSelf: "flex-end",
                marginTop: -1,
              }}
            >
              Read more id:{id}
            </Button>
          </CardActions>
          <Container
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-end",
              height: 40,
              alignSelf: "flex-end",
              gap: 0.25,
              marginTop: "auto",
              marginRight: 0,
              marginBottom: 1,
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            <ButtonGroup
              sx={{
                backgroundColor: "var(--accent-color)",
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: 0,
                borderRight: "1px solid var(--contrast-color)",
              }}
            >
              <Button sx={{ width: "fit-content", textWrap: "nowrap" }}>
                Likes: {likes}
              </Button>

              <Button sx={{ width: "fit-content", textWrap: "nowrap" }}>
                Dislikes: {dislikes}
              </Button>
            </ButtonGroup>
            <Box
              sx={{
                backgroundColor: "var(--contrast-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 1,
                borderRadius: 3,
                height: 40,
                marginLeft: "auto",
                marginRight: 0,
                borderRadius: 3,
                color: "var(--background-primary)",
                paddingLeft: 0.5,
                paddingRight: 0.5,
              }}
            >
              <Typography gutterBottom sx={{ mt: 0.5 }}>
                Views:{" "}
              </Typography>
              <Typography variant="overline">{views}</Typography>
            </Box>
          </Container>
        </CardContent>

        <UserCard userId={userId} />
      </Card>
    </Paper>
  );
}
