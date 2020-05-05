import React from "react";

// PROPS: updateQueries
class SortingButtons extends React.Component {
  state = { sort_by: "created_at", order: "desc" };

  updateState = (e) => {
    const newSortField = e.target.name;
    if (newSortField !== this.state.sort_by) {
      this.setState({
        sort_by: newSortField,
        order: "desc",
      });
    } else {
      this.setState((currentState) => {
        const newOrder = currentState.order === "asc" ? "desc" : "asc";
        return { order: newOrder };
      });
    }
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
      <div>
        SORT:
        <button onClick={this.updateState} name="created_at">
          Date
        </button>
        <button onClick={this.updateState} name="comment_count">
          Comment count
        </button>
        <button onClick={this.updateState} name="votes">
          Votes
        </button>
        Sorted {this.state.order}
      </div>
    );
  }
}

export default SortingButtons;
