import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";
import LoadingMessage from "./subcomponents/LoadingMessage";
import ErrorMessage from "./subcomponents/ErrorMessage";
import Pagination from "./subcomponents/Pagination";

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    err: "",
    isLoading: true,
    limit: 5,
    p: 1,
    total_p: 1,
  };

  componentDidMount() {
    this.requestArticlesAndSetState();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, p, limit } = this.state;
    const { topic_slug } = this.props;

    const sort_byHasChanged = prevState.sort_by !== sort_by;
    const orderHasChanged = prevState.order !== order;
    const topicHasChanged = prevProps.topic_slug !== topic_slug;
    const pageHasChanged = prevState.p !== p;
    const limitHasChanged = prevState.limit !== limit;

    if (
      sort_byHasChanged ||
      orderHasChanged ||
      pageHasChanged ||
      limitHasChanged
    ) {
      this.requestArticlesAndSetState();
    } else if (topicHasChanged) {
      this.setState({ p: 1 });
      this.requestArticlesAndSetState();
    }
  }

  requestArticlesAndSetState = () => {
    const { sort_by, order, limit, p } = this.state;
    const { topic_slug: topic, username: author } = this.props;

    api.getArticles({ topic, limit: 1000, author }).then(({ articles }) => {
      const total_p = Math.ceil(articles.length / limit);
      this.setState({ total_p });
    });

    api
      .getArticles({
        sort_by,
        order,
        topic,
        limit,
        p,
        author,
      })
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false, err: "" });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          err: `Sorry, nothing found for topic: ${topic}`,
        });
      });
  };

  updateQueries = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
  };

  updatePage = (change) => {
    this.setState((currentState) => {
      return { p: currentState.p + change };
    });
  };

  updateLimit = (newLimit) => {
    this.setState({ limit: newLimit, p: 1 });
  };

  render() {
    const { articles, err, isLoading, p, total_p, limit } = this.state;
    const { username, handleNavClick } = this.props;

    if (isLoading) return <LoadingMessage />;
    else if (err.length !== 0) return <ErrorMessage err={err} />;
    else
      return (
        <>
          <section className="main__sorting">
            <SortingButtons updateQueries={this.updateQueries} />
          </section>
          <section className="main__articles--small">
            {articles.map((article) => {
              return (
                <ArticleSmall
                  key={article.article_id}
                  username={username}
                  handleNavClick={handleNavClick}
                  {...article}
                />
              );
            })}
          </section>
          <section className="main__pagination">
            <Pagination
              p={p}
              total_p={total_p}
              limit={limit}
              updatePage={this.updatePage}
              updateLimit={this.updateLimit}
            />
          </section>
        </>
      );
  }
}

export default Articles;
