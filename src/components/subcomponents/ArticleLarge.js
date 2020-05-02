import React from "react";

class ArticleLarge extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          This is article {this.props.article_id}, called {this.props.title},
          about {this.props.topic}. Here is the body:
        </p>
        <hr />
        <p>{this.props.body}</p>
        <hr />
      </div>
    );
  }
}

export default ArticleLarge;
