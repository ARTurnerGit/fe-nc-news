import React from "react";
import { Link } from "@reach/router";
import VotingButtons from "./VotingButtons";

function ArticleLarge({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  comment_count,
  body,
  username,
  handleNavClick,
}) {
  const createdDate = new Date(Date.parse(created_at));
  const userReadableDate = `${createdDate.getDate()} / ${createdDate.getMonth()} / ${createdDate.getFullYear()}`;

  return (
    <div className="article__container--large">
      <p className="article__information--large">
        <Link
          to={`/${topic}`}
          onClick={() => {
            handleNavClick(`/${topic}`);
          }}
        >
          {topic}
        </Link>
        <span>&#8226;</span>
        <Link
          to={`/user/${author}`}
          onClick={() => {
            handleNavClick(`/user/${author}`);
          }}
        >
          {author}
        </Link>
        <span>&#8226;</span>
        {userReadableDate}
      </p>
      <p className="article__title--large">
        <Link
          to={`/${topic}/${article_id}`}
          onClick={() => {
            handleNavClick(`/${topic}/${article_id}`);
          }}
        >
          {title}
        </Link>
      </p>
      <p className="article__comments--large">{comment_count} comments</p>
      <VotingButtons
        className="article__voting--large"
        votes={votes}
        article_id={article_id}
        username={username}
      />
      <p className="article__body--large">{body}</p>
    </div>
  );
}

export default ArticleLarge;
