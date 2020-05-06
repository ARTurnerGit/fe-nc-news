import React from "react";
import * as api from "../../api";

class VotingButtons extends React.Component {
  state = { userVote: 0 };

  requestVoteChange = (changeInVotes) => {
    const { article_id, comment_id } = this.props;
    if (article_id !== undefined) {
      return api.patchArticleByArticleId({
        article_id,
        changeInVotes,
      });
    } else if (comment_id !== undefined) {
      return api.patchCommentByCommentId({
        comment_id,
        changeInVotes,
      });
    }
  };

  handleUserVote = (vote) => {
    const { userVote } = this.state;
    if (userVote === 0) {
      this.setState({ userVote: vote });

      this.requestVoteChange(vote).catch(() => {
        this.setState({ userVote: 0 });
      });
    } else if (vote === userVote) {
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
    const { userVote } = this.state;
    const { votes } = this.props;
    return (
      <>
        <button
          onClick={() => this.handleUserVote(1)}
          className={
            userVote === 1
              ? "article__voting--upvote selected"
              : "article__voting--upvote"
          }
        >
          &#8593;
        </button>
        <p className="article__voting--count">{votes + userVote}</p>
        <button
          onClick={() => this.handleUserVote(-1)}
          className={
            userVote === -1
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
