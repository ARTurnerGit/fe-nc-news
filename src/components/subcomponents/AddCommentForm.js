import React from "react";
import * as api from "../../api";
import ErrorMessage from "./ErrorMessage";

// PROPS article_id, username, requestCommentsByArticleId
class AddCommentForm extends React.Component {
  state = { body: "", err: "" };

  submitComment = (e) => {
    e.preventDefault();
    this.sendComment();
  };

  sendComment = () => {
    return api
      .postCommentByArticleId({
        body: this.state.body,
        article_id: this.props.article_id,
        username: this.props.username,
      })
      .then(() => {
        this.setState({
          body: "",
        });
        this.props.requestCommentsByArticleId();
      })
      .catch((err) => {
        this.setState({
          err:
            "There was a problem submitting your comment, please try again later",
        });
      });
  };

  changeCommentText = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    if (this.state.err.length !== 0)
      return <ErrorMessage err={this.state.err} />;
    else
      return (
        <div>
          <form onSubmit={this.submitComment}>
            <label>
              Comment on this article:
              <input
                type="text"
                onChange={this.changeCommentText}
                value={this.state.body}
                placeholder={`Commenting as ${this.props.username}`}
                required
              />
            </label>
            <button>SUBMIT MY COMMENT</button>
          </form>
        </div>
      );
  }
}

export default AddCommentForm;
