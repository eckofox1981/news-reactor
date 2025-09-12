export class Post {
  constructor(id, title, body, tags, likes, dislikes, views, userId, local) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tags = tags;
    this.likes = likes;
    this.dislikes = dislikes;
    this.views = views;
    this.userId = userId;
    this.local = local;
  }
}
