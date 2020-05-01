import axios from "axios";

export const getArticles = ({ sort_by, order, topic }) => {
  return axios
    .get("https://art-news-server.herokuapp.com/api/articles", {
      params: { sort_by, order, topic },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://art-news-server.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
