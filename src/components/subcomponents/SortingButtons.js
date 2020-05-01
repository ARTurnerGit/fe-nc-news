import React from "react";

class SortingButtons extends React.Component {
  state = { sort_by: "created_at", order: "desc", isDescending: true };

  updateState = (e) => {
    if (e.target.name === this.state.sort_by) {
      if (this.state.isDescending) {
        this.setState({ order: "asc", isDescending: false });
      } else {
        this.setState({ order: "desc", isDescending: true });
      }
    } else {
      this.setState({
        sort_by: e.target.name,
        order: "desc",
        isDescending: true,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>SORT BY</p>
        <button onClick={this.updateState} name="created_at">
          Date
        </button>
        <button onClick={this.updateState} name="comment_count">
          Comment count
        </button>
        <button onClick={this.updateState} name="votes">
          Votes
        </button>
      </div>
    );
  }
}

export default SortingButtons;
