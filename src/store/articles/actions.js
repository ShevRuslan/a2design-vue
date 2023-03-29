import { LocalStorage } from "quasar";

export function loadArticles({ commit }) {
  let articles = JSON.parse(LocalStorage.getItem("articles"));
  if (!articles) {
    articles = [
      {
        id: 1,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Первая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 2,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Вторая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 3,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Третья новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 4,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Четвертая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 5,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Пятая новость",
        author: "Руслан Шевцов",
      },
    ];
    LocalStorage.set("articles", JSON.stringify(articles));
  }
  commit("addArticles", articles);
}

export function addArticle({ commit }, article) {
  let articles = JSON.parse(LocalStorage.getItem("articles"));
  if (!articles) {
    articles = [];
  }
  articles.push(article);
  LocalStorage.set("articles", JSON.stringify(articles));
  commit("addArticles", articles);
}
