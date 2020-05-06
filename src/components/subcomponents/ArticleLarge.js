import React from "react";

function ArticleLarge({ title, article_id, body, topic }) {
  return (
    <div>
      <p>
        This is article {article_id}, called {title}, about {topic}. Here is the
        body:
      </p>
      <hr />
      <p>{body}</p>
      <hr />
    </div>
  );
}

export default ArticleLarge;
