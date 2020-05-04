import React from "react";
import * as api from "../api";
import ArticleLarge from "./subcomponents/ArticleLarge";
import Comment from "./subcomponents/Comment";
import AddCommentForm from "./subcomponents/AddCommentForm";

// PROPS: topic_slug, article_id, username
class SingleArticle extends React.Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    });
    api.getCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    return (
      <>
        <ArticleLarge {...this.state.article} />
        <AddCommentForm
          article_id={this.props.article_id}
          username={this.props.username}
        />
        {this.state.comments.map((comment) => {
          return <Comment key={comment.comment_id} {...comment} />;
        })}
      </>
    );
  }
}

export default SingleArticle;
