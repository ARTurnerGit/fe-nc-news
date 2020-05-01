import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";

class Articles extends React.Component {
  state = { articles: [], sort_by: "created_at", order: "desc" };

  componentDidMount() {
    api.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    return (
      <section>
        <SortingButtons />
        {this.state.articles.map((article) => {
          return <ArticleSmall key={article.article_id} {...article} />;
        })}
      </section>
    );
  }
}

export default Articles;
