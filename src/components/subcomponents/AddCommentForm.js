import React from "react";
import * as api from "../../api";
import ErrorMessage from "./ErrorMessage";

class AddCommentForm extends React.Component {
  state = { body: "", err: "" };

  submitComment = (e) => {
    e.preventDefault();
    this.sendComment();
  };

  sendComment = () => {
    const { body } = this.state;
    const { article_id, username, addCommentToState } = this.props;
    return api
      .postCommentByArticleId({
        body,
        article_id,
        username,
      })
      .then((comment) => {
        addCommentToState(comment);
        this.setState({
          body: "",
        });
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
    const { err, body } = this.state;
    const { username } = this.props;
    if (err.length !== 0) return <ErrorMessage err={err} />;
    else
      return (
        <form className="form__container" onSubmit={this.submitComment}>
          <input
            className="form__input"
            type="text"
            onChange={this.changeCommentText}
            value={body}
            placeholder={`What's on your mind, ${username}?`}
            required
          />
          <button className="form__button">SUBMIT MY COMMENT</button>
        </form>
      );
  }
}

export default AddCommentForm;
