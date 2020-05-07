import React from "react";
import DeleteButton from "./DeleteButton";
import VotingButtons from "./VotingButtons";

function Comment({
  comment_id,
  votes,
  created_at,
  author,
  body,
  username,
  removeCommentFromState,
}) {
  const createdDate = new Date(Date.parse(created_at));
  const userReadableDate = `${createdDate.getDate()} / ${createdDate.getMonth()} / ${createdDate.getFullYear()}`;

  return (
    <div className="comment__container">
      <p className="comment__info">
        {author}
        <span>&#8226;</span>
        {userReadableDate}
      </p>
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
        removeCommentFromState={removeCommentFromState}
      />
    </div>
  );
}

export default Comment;
