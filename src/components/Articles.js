import React from "react";
import * as api from "../api";
import ArticleSmall from "./subcomponents/ArticleSmall";
import SortingButtons from "./subcomponents/SortingButtons";
import LoadingMessage from "./subcomponents/LoadingMessage";
import ErrorMessage from "./subcomponents/ErrorMessage";

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

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { topic_slug } = this.props;

    const sort_byHasChanged = prevState.sort_by !== sort_by;
    const orderHasChanged = prevState.order !== order;
    const topicHasChanged = prevProps.topic_slug !== topic_slug;

    if (sort_byHasChanged || orderHasChanged || topicHasChanged) {
      this.requestArticlesAndSetState();
    }
  }

  requestArticlesAndSetState = () => {
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
        this.setState({
          isLoading: false,
          err: `Sorry, nothing found for topic: ${topic}`,
        });
      });
  };

  updateQueries = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
  };

  render() {
    const { articles, err, isLoading } = this.state;
    const { username } = this.props;

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
