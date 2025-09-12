import { useEffect, useState } from "react";
import { Post } from "../object/Post.js";
import { use } from "react";
import { ArticleCard } from "../components/ArticleCard.jsx";
import { Container, Grid, Typography } from "@mui/material";
import { FillerArticleCard } from "../components/FillerArticleCard.jsx";
import { useBaseArticles } from "../functionality/store.js";

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

  const PublishingPost = () => {
    if (baseArticles === null || baseArticles[0] === undefined) {
      return (
        <>
          <FillerArticleCard />
          <FillerArticleCard />
          <FillerArticleCard />
          <FillerArticleCard />
          <FillerArticleCard />
          <FillerArticleCard />
        </>
      );
    } else {
      return baseArticles.map((p) => (
        <ArticleCard
          key={p.id}
          id={p.id}
          title={p.title}
          body={p.body}
          likes={p.likes}
          dislikes={p.dislikes}
          views={p.views}
          tags={p.tags}
          userId={p.userId}
          local={p.local}
        />
      ));
    }
  };

  return (
    <main>
      <Typography variant="h1" sx={{ textAlign: "center " }}>
        Latest news
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <PublishingPost />
      </Grid>
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
