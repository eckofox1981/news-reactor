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
import { LikeDislike } from "./LikeDislike";
import { Link } from "react-router-dom";
import { Tags } from "./Tags";
import { DeleteBtn } from "./DeleteButtong";

export function ArticleCard({
  id,
  title,
  body,
  likes,
  dislikes,
  views,
  tags,
  userId,
  local,
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
          backgroundColor: "var(--background-primary)",
          color: "var(--text-color)",
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
            <Link to={`/article/${id}`}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontStyle: "italic",
                  alignSelf: "flex-end",
                  marginTop: -1,
                }}
              >
                Read more
              </Button>
            </Link>
          </CardActions>
          <Container
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-end",
              height: 40,
              gap: 0.25,
              marginTop: "auto",
              marginRight: 0,
              marginBottom: "1px",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            <DeleteBtn id={id} local={local} />
            <LikeDislike likes={likes} dislikes={dislikes} />
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
          <Tags tags={tags} />
        </CardContent>

        <UserCard userId={userId} local={local} />
      </Card>
    </Paper>
  );
}
