import React from "react";
import { Link } from "@reach/router";
import VotingButtons from "./VotingButtons";

// PROPS: author, title, article_id, topic, created_at, votes, comment_count (all related to an article), username
class ArticleSmall extends React.Component {
  state = {};

  render() {
    const {
      author,
      title,
      article_id,
      topic,
      created_at,
      votes,
      comment_count,
    } = this.props;
    return (
      <div className="article__container--small">
        <p className="article__information--small">
          <Link to={`/${topic}`}>{topic}</Link>
          <span>&#8226;</span>
          {author}
          <span>&#8226;</span>
          {created_at}
        </p>
        <p className="article__title--small">
          <Link to={`/${topic}/${article_id}`}>{title}</Link>
        </p>
        <p className="article__comments--small">{comment_count} comments</p>
        <VotingButtons
          className="article__voting--small"
          votes={votes}
          article_id={article_id}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default ArticleSmall;
