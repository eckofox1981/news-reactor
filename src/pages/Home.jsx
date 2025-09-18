import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard.jsx";
import { Typography } from "@mui/material";
import { useBaseArticles } from "../store/store.js";
import { ArticleFeed } from "../components/ArticleFeed.jsx";
import { getTwentyPost } from "../api/fetchArticles.js";

export function Home() {
  2;

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
