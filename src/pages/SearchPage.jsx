import { Container, TextField, Typography } from "@mui/material";
import { useQueryStore } from "../store/store";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useEffect, useState } from "react";
import { ArticleFeed } from "../components/ArticleFeed";
import "../styles/searchPage.css";
import { searchByQuery, searchByTag } from "../api/fetchArticles";

export function SearchPage() {
  const [articleList, setArticleList] = useState([]);
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
      <Container
        sx={{
          flex: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center " }}>
          Search for articles
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          You can search for article, either by query or by tags.
        </Typography>
        <span className="search-span">
          <TextField
            required
            value={query}
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
              setQuery(e.target.value);
            }}
          />
          <PageviewIcon
            fontSize="large"
            sx={{ height: "3rem", width: "3rem" }}
            onClick={() => {
              setTagQuery("");
              searchByQuery(query).then(setArticleList);
            }}
          />
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
              setQuery("");
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
