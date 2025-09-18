import { UserObject } from "../object/User";
import { Post } from "../object/Post";

export function saveLocalArticleAndUser(
  title,
  body,
  tags,
  username,
  city,
  state,
  gender
) {
  if (
    title === "" ||
    body === "" ||
    tags.length === 0 ||
    username === "" ||
    city === "" ||
    state === "" ||
    gender === ""
  ) {
    return false;
  }

  const users = JSON.parse(localStorage.getItem("rn-users")) || [];
  const localArticles =
    JSON.parse(localStorage.getItem("local-articles")) || [];

  let articleId;

  if (localArticles.length !== 0) {
    articleId = localArticles[localArticles.length - 1].id + 1;
    console.log(articleId);
  } else {
    articleId = 252;
  }

  const user = new UserObject(
    articleId * Math.floor(Math.random() * 10),
    username,
    "",
    "",
    "",
    gender,
    city,
    state,
    "user"
  );

  users.push(user);
  localStorage.setItem("rn-users", JSON.stringify(users));
  const post = new Post(
    articleId,
    title,
    body,
    tags || [],
    0,
    0,
    0,
    user.id,
    true
  );
  console.log(post);
  console.log(localArticles);
  localArticles.push(post);
  console.log(localArticles);

  localStorage.setItem("local-articles", JSON.stringify(localArticles));
  return post.id;
}
