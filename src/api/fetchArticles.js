import { Post } from "../object/Post";

export async function getTwentyPost() {
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

export async function searchByQuery(query) {
  const local = JSON.parse(localStorage.getItem("local-articles")) || [];
  let list = local.map(
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
        true
      )
  );
  list = list.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.body.toLowerCase().includes(query.toLowerCase())
  );

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
    const posts = returned.posts;

    const articles = posts.map(
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

    if (articles.length !== 0) {
      list.push(...articles);
    }

    return list;
  } catch (error) {
    console.log(error.message);
  }
}

export async function searchByTag(tag) {
  const local = JSON.parse(localStorage.getItem("local-articles")) || [];
  let list = local.map(
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
        true
      )
  );
  list = list.filter((p) =>
    p.tags.some((postTag) => postTag.toLowerCase().includes(tag.toLowerCase()))
  );

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

    const articles = posts.map(
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

    if (articles.length !== 0) {
      list.push(...articles);
    }

    return list;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchSingleArticle(articleId) {
  //check first in localStorage
  const articles = JSON.parse(localStorage.getItem("local-articles")) || [];
  const localArticle = articles.find(
    (a) => a.id === Number.parseInt(articleId)
  );

  if (localArticle) {
    const article = new Post(
      localArticle.id,
      localArticle.title,
      localArticle.body,
      localArticle.tags,
      localArticle.likes,
      localArticle.dislikes,
      localArticle.views++,
      localArticle.userId,
      localArticle.local
    );

    return article;
  }

  //otherwise check in server
  try {
    const response = await fetch(`https://dummyjson.com/posts/${articleId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const post = await response.json();

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
  } catch (error) {
    console.error(error.message);

    return null;
  }
}

export function addView(article) {
  let articles = JSON.parse(localStorage.getItem("local-articles")).map((a) => {
    return new Post(
      a.id,
      a.title,
      a.body,
      a.tags,
      a.likes,
      a.dislikes,
      a.views,
      a.userId,
      a.local
    );
  });
  article.views = article.views + 1;
  articles = articles.filter((a) => a.id !== article.id);
  articles.push(article);
  localStorage.setItem("local-articles", JSON.stringify(articles));

  return { ...article };
}
