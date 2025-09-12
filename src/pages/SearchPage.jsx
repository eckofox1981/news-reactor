import { Container, TextField, Typography } from "@mui/material";
import { useQueryStore } from "../functionality/store";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useEffect, useState } from "react";
import { Post } from "../object/Post";
import { ArticleFeed } from "../components/ArticleFeed";

export function SearchPage() {
  const [articleList, setArticleList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const query = useQueryStore((store) => store.query);
  const setQuery = useQueryStore((store) => store.setQuery);

  useEffect(() => {
    if (query === "") {
      return;
    }
    searchByQuery(query).then(setArticleList);
  }, [query]);

  const callSearchByTag = () => {
    if (tagQuery === "") {
      setArticleList([]);
    }
    searchByTag(tagQuery).then(setArticleList);
  };

  return (
    <main>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center " }}>
          Search for articles
        </Typography>
        <Typography variant="body1">
          You can search for article, either by query or by tags.
        </Typography>
        <span className="search-span">
          <TextField
            required
            value={searchQuery}
            autoComplete="off"
            label="Search by query"
            placeholder="query"
            style={{ width: "20rem" }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "1.5rem",
                  color: "var(--text-color)",
                  "&::placeholder": {
                    color: "var(--text-color)",
                    opacity: 0.7,
                  },
                },
              },
              inputLabel: {
                sx: {
                  color: "var(--text-color)",
                  "&.Mui-focused": {
                    color: "var(--text-color)",
                  },
                },
              },
            }}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <PageviewIcon
            fontSize="large"
            sx={{ height: "3rem", width: "3rem" }}
            onClick={() => {
              setQuery(searchQuery);
            }}
          />
        </span>
        <span className="search-span">
          <TextField
            required
            value={tagQuery}
            autoComplete="off"
            label="Search by tag"
            placeholder="tag"
            style={{ width: "20rem" }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "1.5rem",
                  color: "var(--text-color)",
                  "&::placeholder": {
                    color: "var(--text-color)",
                    opacity: 0.7,
                  },
                },
              },
              inputLabel: {
                sx: {
                  color: "var(--text-color)",
                  "&.Mui-focused": {
                    color: "var(--text-color)",
                  },
                },
              },
            }}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
            onChange={(e) => {
              setTagQuery(e.target.value);
            }}
          />
          <PageviewIcon
            fontSize="large"
            sx={{ height: "3rem", width: "3rem" }}
            onClick={() => {
              callSearchByTag();
            }}
          />
        </span>
        <ArticleFeed articleList={articleList} />
      </Container>
    </main>
  );
}

async function searchByQuery(query) {
  console.log("running" + query);

  try {
    const response = await fetch(
      `https://dummyjson.com/posts/search?q=${query}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const returned = await response.json();
    const posts = returned.posts || [];

    return posts.map(
      (post) =>
        new Post(
          post?.id ? post?.id : "",
          post.title ? post?.title : "",
          post.body ? post?.body : "",
          post.tags ? post?.tags : [],
          post?.reactions?.likes ? post?.reactions?.likes : 0,
          post?.reactions?.dislikes ? post?.reactions?.dislikes : 0,
          post.views ? post?.views : "",
          post.userId ? post?.userId : "",
          false
        )
    );
  } catch (error) {
    console.log(error.message);
  }
}

async function searchByTag(tag) {
  console.log("running" + tag);

  try {
    const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`, {
      method: "GET",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const returned = await response.json();
    const posts = returned.posts || [];

    return posts.map(
      (post) =>
        new Post(
          post?.id ? post?.id : "",
          post.title ? post?.title : "",
          post.body ? post?.body : "",
          post.tags ? post?.tags : [],
          post?.reactions?.likes ? post?.reactions?.likes : 0,
          post?.reactions?.dislikes ? post?.reactions?.dislikes : 0,
          post.views ? post?.views : "",
          post.userId ? post?.userId : "",
          false
        )
    );
  } catch (error) {
    console.log(error.message);
  }
}
