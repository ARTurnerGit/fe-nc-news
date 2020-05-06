import React from "react";
import * as api from "../api";
import ArticleLarge from "./subcomponents/ArticleLarge";
import Comment from "./subcomponents/Comment";
import AddCommentForm from "./subcomponents/AddCommentForm";
import LoadingMessage from "./subcomponents/LoadingMessage";
import VotingButtons from "./subcomponents/VotingButtons";
import ErrorMessage from "./subcomponents/ErrorMessage";

class SingleArticle extends React.Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    articleErr: "",
    commentsErr: "",
  };

  componentDidMount() {
    this.requestArticleById();
    this.requestCommentsByArticleId();
  }

  requestArticleById = () => {
    const { article_id } = this.props;
    return api
      .getArticleById(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false, articleErr: "" });
      })
      .catch((err) => {
        let msg = "";
        if (err.response.status === 400)
          msg =
            "Please check that the path is /topic/article_id where article_id is a number";
        else if (err.response.status === 404)
          msg = `Sorry, we can't find an article with the id ${this.props.article_id}`;
        this.setState({
          isLoading: false,
          articleErr: msg,
        });
      });
  };

  requestCommentsByArticleId = () => {
    const { article_id } = this.props;
    return api
      .getCommentsByArticleId(article_id)
      .then((comments) => {
        this.setState({ comments });
      })
      .catch((err) => {
        this.setState({ commentErr: err.response.data.msg });
      });
  };

  render() {
    const { article, comments, isLoading, articleErr } = this.state;
    const { username, article_id } = this.props;

    if (isLoading) return <LoadingMessage />;
    else if (articleErr.length !== 0) return <ErrorMessage err={articleErr} />;
    else
      return (
        <>
          <section className="main__article--large">
            <ArticleLarge {...article} />
          </section>
          <VotingButtons
            votes={article.votes}
            article_id={article.article_id}
            username={username}
          />
          <section className="main__form">
            <AddCommentForm
              article_id={article_id}
              username={username}
              requestCommentsByArticleId={this.requestCommentsByArticleId}
            />
          </section>
          <section className="main__comments">
            {comments.map((comment) => {
              return (
                <Comment
                  className="comment--small"
                  key={comment.comment_id}
                  {...comment}
                  username={username}
                  requestCommentsByArticleId={this.requestCommentsByArticleId}
                />
              );
            })}
          </section>
        </>
      );
  }
}

export default SingleArticle;
