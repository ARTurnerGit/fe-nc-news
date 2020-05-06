import React from "react";

class SortingButtons extends React.Component {
  state = { sort_by: "created_at", order: "desc" };

  updateSortBy = (e) => {
    const { sort_by } = this.state;
    const newSortField = e.target.name;

    if (newSortField !== sort_by) {
      this.setState({
        sort_by: newSortField,
        order: "desc",
      });
    } else {
      this.updateOrder();
    }
  };

  updateOrder = () => {
    this.setState((currentState) => {
      const newOrder = currentState.order === "asc" ? "desc" : "asc";
      return { order: newOrder };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;

    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      this.props.updateQueries({
        sort_by,
        order,
      });
    }
  }

  render() {
    const { sort_by, order } = this.state;
    return (
      <>
        Sort by <br />
        <button
          onClick={this.updateSortBy}
          name="created_at"
          className={sort_by === "created_at" ? "selected" : "normal"}
        >
          Date
        </button>
        <button
          onClick={this.updateSortBy}
          name="comment_count"
          className={sort_by === "comment_count" ? "selected" : "normal"}
        >
          Comment count
        </button>
        <button
          onClick={this.updateSortBy}
          name="votes"
          className={sort_by === "votes" ? "selected" : "normal"}
        >
          Votes
        </button>
        <button onClick={this.updateOrder}>{order}</button>
      </>
    );
  }
}

export default SortingButtons;
