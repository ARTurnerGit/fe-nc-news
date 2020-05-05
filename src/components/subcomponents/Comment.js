import React from "react";
import DeleteButton from "./DeleteButton";
import VotingButtons from "./VotingButtons";

//PROPS comment_id, votes, created_at, author, body (for the comment), username, requestCommentsByArticleId
class Comment extends React.Component {
  state = {};
  render() {
    const {
      comment_id,
      votes,
      created_at,
      author,
      body,
      username,
    } = this.props;
    return (
      <div>
        <p>
          I am comment {comment_id} by {author}. I was created at {created_at}{" "}
          and I currently have {votes} votes
        </p>
        <hr />
        <p>{body}</p>
        <VotingButtons
          votes={votes}
          comment_id={comment_id}
          username={username}
        />
        <DeleteButton
          author={author}
          username={username}
          comment_id={comment_id}
          requestCommentsByArticleId={this.props.requestCommentsByArticleId}
        />
      </div>
    );
  }
}

export default Comment;
