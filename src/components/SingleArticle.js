import React from "react";
import * as api from "../api";
import ArticleLarge from "./subcomponents/ArticleLarge";
import Comment from "./subcomponents/Comment";
import AddCommentForm from "./subcomponents/AddCommentForm";
import LoadingMessage from "./subcomponents/LoadingMessage";
import VotingButtons from "./subcomponents/VotingButtons";

// PROPS: topic_slug, article_id, username
class SingleArticle extends React.Component {
  state = { article: {}, comments: [], isLoading: true, ArticleErr: "" };

  componentDidMount() {
    this.requestArticleById();
    this.requestCommentsByArticleId();
  }

  requestArticleById = () => {
    return api
      .getArticleById(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false, ArticleErr: "" });
      })
      .catch((ArticleErr) => {
        this.setState({
          isLoading: false,
          ArticleErr: ArticleErr.response.data.msg,
        });
      });
  };

  requestCommentsByArticleId = () => {
    return api
      .getCommentsByArticleId(this.props.article_id)
      .then((comments) => {
        this.setState({ comments });
      });
  };

  render() {
    if (this.state.isLoading === true) return <LoadingMessage />;
    else if (this.state.ArticleErr.length !== 0)
      return <h3>{this.state.ArticleErr}</h3>;
    else
      return (
        <>
          <section className="main__article--large">
            <ArticleLarge {...this.state.article} />
          </section>
          <section className="main__form">
            <VotingButtons
              votes={this.state.article.votes}
              article_id={this.state.article.article_id}
              username={this.props.username}
            />
            <AddCommentForm
              article_id={this.props.article_id}
              username={this.props.username}
              requestCommentsByArticleId={this.requestCommentsByArticleId}
            />
          </section>
          <section className="main__comments">
            {this.state.comments.map((comment) => {
              return (
                <Comment
                  className="comment--small"
                  key={comment.comment_id}
                  {...comment}
                  username={this.props.username}
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
