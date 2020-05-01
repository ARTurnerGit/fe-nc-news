import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    topic: "",
  };

  componentDidMount() {
    api
      .getArticles({
        sort_by: this.state.sort_by,
        order: this.state.order,
        topic: this.props.topic_slug,
      })
      .then((articles) => {
        this.setState({ articles, topic: this.props.topic_slug });
      });
  }

  updateQueries = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order ||
      prevProps.topic_slug !== this.props.topic_slug
    ) {
      api
        .getArticles({
          sort_by: this.state.sort_by,
          order: this.state.order,
          topic: this.props.topic_slug,
        })
        .then((articles) => {
          this.setState({ articles, topic: this.props.topic_slug });
        });
    }
  }

  render() {
    return (
      <section>
        <SortingButtons updateQueries={this.updateQueries} />
        {this.state.articles.map((article) => {
          return <ArticleSmall key={article.article_id} {...article} />;
        })}
      </section>
    );
  }
}

export default Articles;
