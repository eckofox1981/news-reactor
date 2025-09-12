import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { UserCard } from "../components/UserCard";
import { LikeDislike } from "../components/LikeDislike";
import { useParams } from "react-router-dom";
import { Post } from "../object/Post";
import { useEffect, useState } from "react";
import { Tags } from "../components/Tags";

export function ArticlePage() {
  const articleId = useParams().id;

  const [article, setArticle] = useState(null);

  useEffect(() => {
    console.log("useeffefect");

    fetchArticle(articleId).then(setArticle);
  }, [articleId]);

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
          }}
        >
          <CardContent>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              {article.title}
            </Typography>
            <Typography variant="body1">{article.body}</Typography>
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
                marginBottom: "1px",
                marginLeft: "auto",
                width: "50%",
              }}
            >
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
                  borderRadius: 3,
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
            </Container>
            <Tags tags={article.tags} />
          </CardContent>
          <UserCard userId={article.userId} local={article.local} />
        </Card>
      </main>
    );
  };

  return <PublishArticle />;
}

async function fetchArticle(articleId) {
  //check first in localStorage
  const articles = JSON.parse(localStorage.getItem("local-articles")) || [];
  const localArticle = articles.find((a) => a.id == articleId);
  console.log(localArticle);
  console.log(localArticle);

  if (localArticle !== null || localArticle !== undefined) {
    return new Post(
      localArticle.id,
      localArticle.title,
      localArticle.body,
      localArticle.tags,
      localArticle.likes,
      localArticle.dislikes,
      localArticle.views,
      localArticle.userId,
      localArticle.local
    );
  }

  try {
    const response = await fetch(`https://dummyjson.com/posts/${articleId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const post = await response.json();
    console.log(post);

    return new Post(
      post?.id ? post?.id : "",
      post.title ? post?.title : "",
      post.body ? post?.body : "",
      post.tags ? post?.tags : [],
      post?.reactions?.likes ? post?.reactions?.likes : 0,
      post?.reactions?.dislikes ? post?.reactions?.dislikes : 0,
      post.views ? post?.views : "",
      post.userId ? post?.userId : ""
    );
  } catch (error) {
    console.error(error.message);

    return null;
  }
}
