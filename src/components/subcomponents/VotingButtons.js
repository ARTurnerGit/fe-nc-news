import React from "react";
import * as api from "../../api";

// PROPS: votes, article_id
class VotingButtons extends React.Component {
  state = { userVote: 0 };

  handleUserVote = (vote) => {
    if (vote !== this.state.userVote) {
      this.setState({ userVote: vote });
      api
        .patchArticleByArticleId({
          article_id: this.props.article_id,
          changeInVotes: vote,
        })
        .catch(() => {
          this.setState({ userVote: 0 });
        });
    } else {
      this.setState({ userVote: 0 });
      api
        .patchArticleByArticleId({
          article_id: this.props.article_id,
          changeInVotes: -vote,
        })
        .catch(() => {
          this.setState({ userVote: 0 });
        });
    }
  };

  // inside this add conditional formatting to show what has been clicked
  render() {
    return (
      <>
        <button onClick={() => this.handleUserVote(1)} name="upvote">
          +1
        </button>
        {this.props.votes + this.state.userVote}
        <button onClick={() => this.handleUserVote(-1)} name="downvote">
          -1
        </button>
      </>
    );
  }
}

export default VotingButtons;
