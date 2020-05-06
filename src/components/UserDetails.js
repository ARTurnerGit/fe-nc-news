import React from "react";
import * as api from "../api";
import LoadingMessage from "./subcomponents/LoadingMessage";
import ErrorMessage from "./subcomponents/ErrorMessage";

class UserDetails extends React.Component {
  state = { name: "", avatar_url: "", isLoading: true, err: "" };

  componentDidMount() {
    this.requestUserDetails();
  }

  requestUserDetails = () => {
    const { username } = this.props;
    return api
      .getUserByUsername(username)
      .then(({ name, avatar_url }) => {
        this.setState({ name, avatar_url, isLoading: false, err: "" });
      })
      .catch((err) =>
        this.setState({ isLoading: false, err: "User not found" })
      );
  };

  render() {
    const { isLoading, err, avatar_url } = this.state;
    const { username } = this.props;

    if (isLoading) return <LoadingMessage />;
    else if (err.length !== 0) return <ErrorMessage err={err} />;
    else
      return (
        <div className="banner__end">
          <label className="banner__username">
            <img
              src={avatar_url}
              alt="some sort of avatar"
              className="banner__userimage"
            />
            {username}
          </label>
        </div>
      );
  }
}

export default UserDetails;
