import { Button } from "@mui/material";
import { Post } from "../object/Post";
import { useLocation, useNavigate } from "react-router-dom";
import { useToastStore } from "../store/store";

export function DeleteBtn({ id, local }) {
  const navigate = useNavigate();
  const location = useLocation();

  const setToast = useToastStore((store) => store.setToast);

  if (!local) return null;

  const goTo = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={() => {
        if (deleteArticle(id)) {
          setToast({
            open: true,
            message: "Article deleted.",
            severity: "warning",
          });
          goTo();
        } else {
          setToast({
            open: true,
            message: "Article not deleted, something went wrong.",
            severity: "error.",
          });
        }
      }}
    >
      Delete
    </Button>
  );
}

function deleteArticle(id) {
  let localArticles = JSON.parse(localStorage.getItem("local-articles")) || [];
  localArticles = localArticles.map(
    (a) =>
      new Post(
        a.id,
        a.title,
        a.body,
        a.tags,
        a.likes,
        a.dislikes,
        a.views,
        a.userId,
        a.local
      )
  );
  localArticles = localArticles.filter((article) => article.id !== id);

  localStorage.setItem("local-articles", JSON.stringify(localArticles));
  //todo: add snackbar
  return true;
}
