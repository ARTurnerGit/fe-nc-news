import React from "react";
import * as api from "../../api";

// PROPS: votes, article_id, username
class VotingButtons extends React.Component {
  state = { userVote: 0 };

  componentDidMount() {
    let previousVote =
      JSON.parse(
        window.localStorage.getItem(
          `${this.props.username}${this.props.article_id}`
        )
      ) || 0;
    this.setState({ userVote: previousVote });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.userVote !== this.state.userVote) {
      // store the vote locally
      window.localStorage.setItem(
        `${this.props.username}${this.props.article_id}`,
        JSON.stringify(this.state.userVote)
      );
    }
  }

  handleUserVote = (vote) => {
    if (this.state.userVote === 0) {
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
      if (vote === this.state.userVote) {
        this.setState({ userVote: 0 });
        api
          .patchArticleByArticleId({
            article_id: this.props.article_id,
            changeInVotes: -vote,
          })
          .catch(() => {
            this.setState({ userVote: vote });
          });
      } else {
        this.setState({ userVote: vote });
        api
          .patchArticleByArticleId({
            article_id: this.props.article_id,
            changeInVotes: 2 * vote,
          })
          .catch(() => {
            this.setState({ userVote: 0 });
          });
      }
    }
  };

  // inside this add conditional formatting to show what has been clicked
  render() {
    console.log(this.state);
    return (
      <>
        <button
          onClick={() => this.handleUserVote(1)}
          className={this.state.userVote === 1 && "selected"}
        >
          +1
        </button>
        {this.props.votes + this.state.userVote}
        {/* {this.props.votes} */}
        <button
          onClick={() => this.handleUserVote(-1)}
          className={this.state.userVote === -1 && "selected"}
        >
          -1
        </button>
      </>
    );
  }
}

export default VotingButtons;
