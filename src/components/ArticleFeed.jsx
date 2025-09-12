import { Container, Grid, Typography } from "@mui/material";
import { ArticleCard } from "./ArticleCard";
import { FillerArticleCard } from "./FillerArticleCard";

export function ArticleFeed({ articleList }) {
  const PublishingPost = () => {
    if (!articleList) {
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
    }

    if (articleList.length === 0) {
      return <Typography variant="body1">No article found</Typography>;
    }

    return articleList.map((p) => (
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
  };

  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <PublishingPost />
    </Grid>
  );
}
