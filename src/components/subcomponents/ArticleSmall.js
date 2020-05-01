import React from "react";

class ArticleSmall extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>Hi, I'm a small article about {this.props.topic}</p>
      </div>
    );
  }
}

export default ArticleSmall;
