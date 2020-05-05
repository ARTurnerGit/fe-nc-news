import React from "react";
import * as api from "../../api";

// PROPS article_id, username, requestCommentsByArticleId
class AddCommentForm extends React.Component {
  state = { body: "" };

  submitComment = (e) => {
    e.preventDefault();
    api
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
        console.dir(err);
        alert(
          "There was a problem submitting your comment, please try again later"
        );
      });
  };

  changeCommentText = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
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
