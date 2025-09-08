import { useEffect, useState } from "react";
import { Post } from "../object/Post.js";
import { use } from "react";
import { ArticleCard } from "../components/ArticleCard.jsx";
import { Container, Grid } from "@mui/material";

export function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetch30Posts = async () => {
      const original30Posts = await getThiryPost();
      console.log(original30Posts);
      setPost(original30Posts);
    };

    fetch30Posts();
  }, []);

  const PublishingPost = () => {
    if (posts === null || posts[0] === undefined) {
      return <i>Loading...</i>;
    } else {
      return posts.map((p) => (
        <ArticleCard
          key={p.id}
          id={p.id}
          title={p.title}
          body={p.body}
          likes={p.likes}
          dislikes={p.dislikes}
          views={p.views}
          userId={p.userId}
        />
      ));
    }
  };

  return (
    <main>
      <h1>You're home</h1>
      <Grid container spacing={2}>
        <PublishingPost />
      </Grid>
    </main>
  );
}

async function getThiryPost() {
  try {
    const response = await fetch(
      "https://dummyjson.com/posts?limit=30&sortBy=id&order=desc",
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
        post.userId ? post?.userId : ""
      );
    });
  } catch (error) {
    console.error(error.message);
  }
}
