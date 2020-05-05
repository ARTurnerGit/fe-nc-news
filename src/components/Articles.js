import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";

// PROPS: username, topic_slug
class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    err: "",
  };

  componentDidMount() {
    this.requestArticlesAndSetState();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order ||
      prevProps.topic_slug !== this.props.topic_slug
    ) {
      this.requestArticlesAndSetState();
    }
  }

  requestArticlesAndSetState() {
    const { sort_by, order } = this.state;
    const { topic_slug: topic } = this.props;
    api
      .getArticles({
        sort_by,
        order,
        topic,
      })
      .then((articles) => {
        this.setState({ articles, err: "" });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ err: err.response.data.msg });
      });
  }

  updateQueries = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
  };

  render() {
    if (this.state.err.length !== 0) return <h3>{this.state.err}</h3>;
    else
      return (
        <section>
          <SortingButtons updateQueries={this.updateQueries} />
          {this.state.articles.map((article) => {
            return (
              <ArticleSmall
                key={article.article_id}
                username={this.props.username}
                {...article}
              />
            );
          })}
        </section>
      );
  }
}

export default Articles;
