import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";
import LoadingMessage from "./subcomponents/LoadingMessage";

// PROPS: username, topic_slug
class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    err: "",
    isLoading: true,
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
        this.setState({ articles, isLoading: false, err: "" });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  }

  updateQueries = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
  };

  render() {
    if (this.state.isLoading === true) return <LoadingMessage />;
    else if (this.state.err.length !== 0) return <h3>{this.state.err}</h3>;
    else
      return (
        <>
          <section className="main__sorting">
            <SortingButtons updateQueries={this.updateQueries} />
          </section>
          <section className="main__articles--small">
            {this.state.articles.map((article) => {
              return (
                <ArticleSmall
                  className="article--small"
                  key={article.article_id}
                  username={this.props.username}
                  {...article}
                />
              );
            })}
          </section>
        </>
      );
  }
}

export default Articles;
