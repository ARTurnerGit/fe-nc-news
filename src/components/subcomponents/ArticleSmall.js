import React from "react";
import { Link } from "@reach/router";

// PROPS: author, title, article_id, topic, created_at, votes, comment_count (all related to an article)
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
      <div>
        <p>
          <Link to={`/${topic}/${article_id}`}>Hi, I'm a small article</Link>
          {" about "}
          <Link to={`/${topic}`}>{topic}</Link>, created on {created_at} with{" "}
          {votes} votes and {comment_count} comments
        </p>
      </div>
    );
  }
}

export default ArticleSmall;
