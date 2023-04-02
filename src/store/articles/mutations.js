import { LocalStorage } from "quasar";

export function addArticles(state, articles) {
  state.articles = articles;
}
export function editArticle(state, { id, title, description, img }) {
  const article = state.articles.find((a) => a.id === id);
  if (article) {
    article.title = title;
    article.description = description;
    article.img = img;
  }
}
