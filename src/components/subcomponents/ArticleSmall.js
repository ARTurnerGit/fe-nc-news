import React from "react";
import { Link } from "@reach/router";
import VotingButtons from "./VotingButtons";

function ArticleSmall({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  comment_count,
  username,
  handleNavClick,
}) {
  const createdDate = new Date(Date.parse(created_at));
  const userReadableDate = `${createdDate.getDate()} / ${createdDate.getMonth()} / ${createdDate.getFullYear()}`;

  return (
    <div className="article__container--small">
      <p className="article__information--small">
        <Link
          to={`/${topic}`}
          onClick={() => {
            handleNavClick(`/${topic}`);
          }}
        >
          {topic}
        </Link>
        <span>&#8226;</span>
        {author}
        <span>&#8226;</span>
        {userReadableDate}
      </p>
      <p className="article__title--small">
        <Link
          to={`/${topic}/${article_id}`}
          onClick={() => {
            handleNavClick(`/${topic}/${article_id}`);
          }}
        >
          {title}
        </Link>
      </p>
      <p className="article__comments--small">{comment_count} comments</p>
      <VotingButtons
        className="article__voting--small"
        votes={votes}
        article_id={article_id}
        username={username}
      />
    </div>
  );
}

export default ArticleSmall;
