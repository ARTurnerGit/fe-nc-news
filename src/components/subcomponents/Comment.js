import React from "react";
import DeleteButton from "./DeleteButton";
import VotingButtons from "./VotingButtons";

//PROPS comment_id, votes, created_at, author, body (for the comment), username, requestCommentsByArticleId
function Comment({
  comment_id,
  votes,
  created_at,
  author,
  body,
  username,
  requestCommentsByArticleId,
}) {
  return (
    <div>
      <p>
        I am comment {comment_id} by {author}. I was created at {created_at} and
        I currently have {votes} votes
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
        requestCommentsByArticleId={requestCommentsByArticleId}
      />
    </div>
  );
}

export default Comment;
