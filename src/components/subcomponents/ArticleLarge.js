import React from "react";

// PROPS: author, title, article_id, body, topic, created_at, votes, comment_count (for the article)
class ArticleLarge extends React.Component {
  state = {};
  render() {
    const { title, article_id, body, topic } = this.props;
    return (
      <div>
        <p>
          This is article {article_id}, called {title}, about {topic}. Here is
          the body:
        </p>
        <hr />
        <p>{body}</p>
        <hr />
      </div>
    );
  }
}

export default ArticleLarge;
