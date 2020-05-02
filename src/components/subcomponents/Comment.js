import React from "react";

class Comment extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          I am comment {this.props.comment_id} by {this.props.author}. I was
          created at {this.props.created_at} and I currently have{" "}
          {this.props.votes} votes
        </p>
        <hr />
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Comment;
