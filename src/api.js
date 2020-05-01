import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://art-news-server.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    });
};
