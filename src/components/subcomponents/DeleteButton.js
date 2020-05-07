import React from "react";
import * as api from "../../api";
import ErrorMessage from "./ErrorMessage";

class DeleteButton extends React.Component {
  state = { err: "" };

  requestCommentDeletion = (e) => {
    const { comment_id, removeCommentFromState } = this.props;
    removeCommentFromState(comment_id);
    api.deleteCommentByCommentId(comment_id).catch((err) => {
      this.setState({ err: "there was a problem deleting this comment" });
    });
  };
  render() {
    const { err } = this.state;
    const { author, username } = this.props;
    if (err.length !== 0) {
      return <ErrorMessage err={err} />;
    } else {
      return (
        author === username && (
          <div className="comment__delete">
            <button onClick={this.requestCommentDeletion}>
              DELETE THIS COMMENT
            </button>
          </div>
        )
      );
    }
  }
}

export default DeleteButton;
