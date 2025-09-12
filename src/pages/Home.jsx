import { useEffect, useState } from "react";
import { Post } from "../object/Post.js";
import { use } from "react";
import { ArticleCard } from "../components/ArticleCard.jsx";
import { Container, Grid, Typography } from "@mui/material";
import { FillerArticleCard } from "../components/FillerArticleCard.jsx";
import { useBaseArticles } from "../functionality/store.js";
import { ArticleFeed } from "../components/ArticleFeed.jsx";

export function Home() {
  const [posts, setPost] = useState([]);

  const baseArticles = useBaseArticles((store) => store.baseArticles);
  const setBaseArticles = useBaseArticles((store) => store.setBaseArticles);

  useEffect(() => {
    const fromLocalStorage = JSON.parse(localStorage.getItem("local-articles"));
    if (fromLocalStorage === undefined || fromLocalStorage === null) {
      getTwentyPost().then(setBaseArticles);
    } else {
      getTwentyPost().then((fetched) => {
        setBaseArticles([...fromLocalStorage, ...fetched]);
      });
    }
  }, []);

  return (
    <main>
      <Typography variant="h1" sx={{ textAlign: "center " }}>
        Latest news
      </Typography>
      <Typography variant="subtitle1">
        You can click on the fox to search for specific articles or tags{" "}
      </Typography>
      <ArticleFeed articleList={baseArticles} />
    </main>
  );
}

async function getTwentyPost() {
  try {
    const response = await fetch(
      "https://dummyjson.com/posts?limit=20&sortBy=id&order=desc",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const responseReturned = await response.json();
    return responseReturned.posts.map((post) => {
      return new Post(
        post?.id ? post?.id : "",
        post.title ? post?.title : "",
        post.body ? post?.body : "",
        post.tags ? post?.tags : [],
        post?.reactions?.likes ? post?.reactions?.likes : 0,
        post?.reactions?.dislikes ? post?.reactions?.dislikes : 0,
        post.views ? post?.views : "",
        post.userId ? post?.userId : "",
        false
      );
    });
  } catch (error) {
    console.error(error.message);
  }
}
