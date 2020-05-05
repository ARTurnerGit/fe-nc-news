import React from "react";
import * as api from "../api";
import ArticleLarge from "./subcomponents/ArticleLarge";
import Comment from "./subcomponents/Comment";
import AddCommentForm from "./subcomponents/AddCommentForm";

// PROPS: topic_slug, article_id, username
class SingleArticle extends React.Component {
  state = { article: {}, comments: [], err: "" };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then((article) => {
        this.setState({ article, err: "" });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg });
      });

    api.getCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    if (this.state.err.length !== 0) return <h3>{this.state.err}</h3>;
    else
      return (
        <>
          <ArticleLarge {...this.state.article} />
          <AddCommentForm
            article_id={this.props.article_id}
            username={this.props.username}
          />
          {this.state.comments.map((comment) => {
            return (
              <Comment
                key={comment.comment_id}
                {...comment}
                username={this.props.username}
              />
            );
          })}
        </>
      );
  }
}

export default SingleArticle;
