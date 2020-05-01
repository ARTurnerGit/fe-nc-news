import React from "react";
import { Link } from "@reach/router";

class ArticleSmall extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <Link to={`/${this.props.topic}/${this.props.article_id}`}>
            Hi, I'm a small article
          </Link>
          {" about "}
          <Link to={`/${this.props.topic}`}>{this.props.topic}</Link>, created
          on {this.props.created_at} with {this.props.votes} votes and{" "}
          {this.props.comment_count} comments
        </p>
      </div>
    );
  }
}

export default ArticleSmall;
