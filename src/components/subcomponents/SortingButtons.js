import React from "react";

// PROPS: updateQueries
class SortingButtons extends React.Component {
  state = { sort_by: "created_at", order: "desc" };

  updateSortBy = (e) => {
    const newSortField = e.target.name;
    if (newSortField !== this.state.sort_by) {
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.props.updateQueries({
        sort_by: this.state.sort_by,
        order: this.state.order,
      });
    }
  }

  render() {
    return (
      <>
        Sort by <br />
        <button
          onClick={this.updateSortBy}
          name="created_at"
          className={
            this.state.sort_by === "created_at" ? "selected" : "normal"
          }
        >
          Date
        </button>
        <button
          onClick={this.updateSortBy}
          name="comment_count"
          className={
            this.state.sort_by === "comment_count" ? "selected" : "normal"
          }
        >
          Comment count
        </button>
        <button
          onClick={this.updateSortBy}
          name="votes"
          className={this.state.sort_by === "votes" ? "selected" : "normal"}
        >
          Votes
        </button>
        <button onClick={this.updateOrder}>{this.state.order}</button>
      </>
    );
  }
}

export default SortingButtons;
