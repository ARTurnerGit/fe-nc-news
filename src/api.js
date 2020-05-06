import axios from "axios";

export const getUserByUsername = (username) => {
  return axios
    .get(`https://art-news-server.herokuapp.com/api/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
    });
};

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

export const postCommentByArticleId = ({ article_id, username, body }) => {
  return axios
    .post(
      `https://art-news-server.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(
      ({
        data: {
          comment: { comment_id },
        },
      }) => {
        return comment_id;
      }
    );
};

export const patchItemByItemId = ({
  article_id,
  comment_id,
  changeInVotes,
}) => {
  let path = "https://art-news-server.herokuapp.com/api/";

  if (article_id !== undefined) {
    path += `articles/${article_id}`;
  } else if (comment_id !== undefined) {
    path += `comments/${comment_id}`;
  }

  return axios.patch(path, {
    inc_votes: changeInVotes,
  });
};

export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(
    `https://art-news-server.herokuapp.com/api/comments/${comment_id}`
  );
};
