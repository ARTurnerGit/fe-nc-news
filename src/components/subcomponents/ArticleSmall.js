import React from "react";
import { Link } from "@reach/router";
import VotingButtons from "./VotingButtons";

// PROPS: author, title, article_id, topic, created_at, votes, comment_count (all related to an article), username
class ArticleSmall extends React.Component {
  state = {};

  render() {
    const { article_id, topic, created_at, votes, comment_count } = this.props;
    return (
      <div>
        <p>
          <Link to={`/${topic}/${article_id}`}>Hi, I'm a small article</Link>
          {" about "}
          <Link to={`/${topic}`}>{topic}</Link>, created on {created_at} with{" "}
          {votes} votes and {comment_count} comments
        </p>
        <VotingButtons
          votes={votes}
          article_id={article_id}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default ArticleSmall;
