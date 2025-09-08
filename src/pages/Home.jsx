import { useEffect, useState } from "react";
import { Post } from "../object/Post.js";
import { use } from "react";

export function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async () => {
      const original30Posts = await getThiryPost();
      setPost(original30Posts);
    };
  }, []);

  return (
    <main>
      <h1>You're home</h1>
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
      new Post(
        post?.id ? post?.id : "",
        post.title ? post?.title : "",
        post.body ? post?.body : "",
        post.tags ? post?.tags : "",
        post.reactions.likes ? post?.reactions.likes : "",
        post.reactions.dislikes ? post?.reactions.dislikes : "",
        post.views ? post?.views : "",
        post.userId ? post?.userId : ""
      );
    });
  } catch (error) {}
}
