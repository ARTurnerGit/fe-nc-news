import React from "react";

class AddCommentForm extends React.Component {
  state = { body: "" };

  submitComment = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  changeCommentText = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    console.log(this.state.body);
    return (
      <div>
        <form action="">
          <textarea
            onChange={this.changeCommentText}
            name=""
            id=""
            cols="30"
            rows="10"
            value={this.state.body}
            placeholder="Comment on this"
          ></textarea>
          <button onClick={this.submitComment}>SUBMIT MY COMMENT</button>
        </form>
      </div>
    );
  }
}

export default AddCommentForm;
