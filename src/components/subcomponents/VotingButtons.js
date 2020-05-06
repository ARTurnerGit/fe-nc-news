import React from "react";
import * as api from "../../api";

// PROPS: votes, article_id, comment_id, username
class VotingButtons extends React.Component {
  state = { userVote: 0 };

  requestVoteChange = (voteChange) => {
    if (this.props.article_id !== undefined) {
      return api.patchArticleByArticleId({
        article_id: this.props.article_id,
        changeInVotes: voteChange,
      });
    } else if (this.props.comment_id !== undefined) {
      return api.patchCommentByCommentId({
        comment_id: this.props.comment_id,
        changeInVotes: voteChange,
      });
    }
  };

  handleUserVote = (vote) => {
    if (this.state.userVote === 0) {
      this.setState({ userVote: vote });
      this.requestVoteChange(vote).catch(() => {
        this.setState({ userVote: 0 });
      });
    } else if (vote === this.state.userVote) {
      this.setState({ userVote: 0 });
      this.requestVoteChange(-vote).catch(() => {
        this.setState({ userVote: vote });
      });
    } else {
      this.setState({ userVote: vote });
      this.requestVoteChange(2 * vote).catch(() => {
        this.setState({ userVote: -vote });
      });
    }
  };

  render() {
    return (
      <>
        <button
          onClick={() => this.handleUserVote(1)}
          className={
            this.state.userVote === 1
              ? "article__voting--upvote selected"
              : "article__voting--upvote"
          }
        >
          &#8593;
        </button>
        <p className="article__voting--count">
          {this.props.votes + this.state.userVote}
        </p>
        <button
          onClick={() => this.handleUserVote(-1)}
          className={
            this.state.userVote === -1
              ? "article__voting--downvote selected"
              : "article__voting--downvote"
          }
        >
          &#8595;
        </button>
      </>
    );
  }
}

export default VotingButtons;
