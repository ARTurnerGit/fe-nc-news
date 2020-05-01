import React from "react";

class ArticleSmall extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          Hi, I'm a small article about {this.props.topic}, created on{" "}
          {this.props.created_at} with {this.props.votes} votes and{" "}
          {this.props.comment_count} comments
        </p>
      </div>
    );
  }
}

export default ArticleSmall;
