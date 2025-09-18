import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { UserCard } from "../components/UserCard";
import { LikeDislike } from "../components/LikeDislike";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Tags } from "../components/Tags";
import { DeleteBtn } from "../components/DeleteButton";
import { addView, fetchSingleArticle } from "../api/fetchArticles";

export function ArticlePage() {
  const articleId = useParams().id;

  const [article, setArticle] = useState(null);

  const hasAddedView = useRef(false);

  useEffect(() => {
    fetchSingleArticle(articleId).then((fetched) => {
      if (!hasAddedView.current && fetched.local === true) {
        setArticle(addView(fetched));
        hasAddedView.current = true;
        fetchSingleArticle(articleId).then(setArticle);
      } else {
        setArticle(fetched);
      }
    });
  }, []);

  const PublishArticle = () => {
    if (article === null) {
      return (
        <main className="middle-display">
          <CircularProgress />
        </main>
      );
    }

    return (
      <main>
        <Card
          sx={{
            backgroundColor: "var(--background-primary)",
            color: "var(--text-color)",
            width: "80%",
            maxWidth: "1300rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              {article.title}
            </Typography>
            <Typography variant="body1">{article.body}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 40,
                alignSelf: "flex-end",
                gap: 0.25,
                marginTop: "auto",
                marginBottom: "1px",
                width: "fit-content",
              }}
            >
              <DeleteBtn id={article.id} local={article.local} />
              <LikeDislike likes={article.likes} dislikes={article.dislikes} />
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
                <Typography variant="overline">{article.views}</Typography>
              </Box>
            </Box>
            <Tags tags={article.tags} />
          </CardContent>
          <UserCard userId={article.userId} local={article.local} />
        </Card>
      </main>
    );
  };

  return <PublishArticle />;
}
