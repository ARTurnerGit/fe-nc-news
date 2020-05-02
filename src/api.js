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

export const getArticleById = (article_id) => {
  return axios
    .get(`https://art-news-server.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://art-news-server.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getTopics = () => {
  return axios
    .get("https://art-news-server.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
