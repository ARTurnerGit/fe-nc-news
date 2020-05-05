import React from "react";
import * as api from "../api";
import LoadingMessage from "./subcomponents/LoadingMessage";

// PROPS: username
class UserDetails extends React.Component {
  state = { name: "", avatar_url: "", isLoading: true, err: "" };

  componentDidMount() {
    api
      .getUserByUsername(this.props.username)
      .then(({ name, avatar_url }) => {
        this.setState({ name, avatar_url, isLoading: false, err: "" });
      })
      .catch((err) =>
        this.setState({ isLoading: false, err: err.response.data.msg })
      );
  }

  render() {
    if (this.state.isLoading === true) return <LoadingMessage />;
    else if (this.state.err.length !== 0) return <h3>User not found</h3>;
    else
      return (
        <>
          <label className="banner__username">
            <img
              src={this.state.avatar_url}
              alt="some sort of avatar"
              className="banner__userimage"
            />
            {this.props.username}
          </label>
        </>
      );
  }
}

export default UserDetails;
