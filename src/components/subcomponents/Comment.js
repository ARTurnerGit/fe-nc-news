import React from "react";

//PROPS comment_id, votes, created_at, author, body (for the comment)
class Comment extends React.Component {
  state = {};
  render() {
    const { comment_id, votes, created_at, author, body } = this.props;
    return (
      <div>
        <p>
          I am comment {comment_id} by {author}. I was created at {created_at}{" "}
          and I currently have {votes} votes
        </p>
        <hr />
        <p>{body}</p>
      </div>
    );
  }
}

export default Comment;
