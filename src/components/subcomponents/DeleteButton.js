import React from "react";
import * as api from "../../api";
import ErrorMessage from "./ErrorMessage";

// PROPS: author, username, comment_id, requestCommentsByArticleId
class DeleteButton extends React.Component {
  state = { err: "" };
  requestCommentDeletion = (e) => {
    api
      .deleteCommentByCommentId(this.props.comment_id)
      .then(() => {
        this.props.requestCommentsByArticleId();
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ err: "there was a problem deleting this comment" });
      });
  };
  render() {
    if (this.state.err.length !== 0) {
      return <ErrorMessage err={this.state.err} />;
    } else {
      return (
        this.props.author === this.props.username && (
          <button onClick={this.requestCommentDeletion}>
            DELETE THIS COMMENT
          </button>
        )
      );
    }
  }
}

export default DeleteButton;
