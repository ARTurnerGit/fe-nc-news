import React from "react";
import * as api from "../../api";

// PROPS: author, username, comment_id
class DeleteButton extends React.Component {
  state = {};
  requestCommentDeletion = (e) => {
    api.deleteCommentByCommentId(this.props.comment_id).catch((err) => {
      console.dir(err);
      alert("There was a problem deleting this comment");
    });
  };
  render() {
    return (
      this.props.author === this.props.username && (
        <button onClick={this.requestCommentDeletion}>
          DELETE THIS COMMENT
        </button>
      )
    );
  }
}

export default DeleteButton;
