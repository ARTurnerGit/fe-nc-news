import React from "react";
import * as api from "../api";

class UserDetails extends React.Component {
  state = { username: "", avatar_url: "", name: "" };

  componentDidMount() {
    api.getUserByUsername(this.props.username).then((user) => {
      this.setState({ ...user });
    });
  }

  render() {
    return (
      <div>
        <p>
          YOU ARE CURRENTLY LOGGED IN AS <em>{this.props.username}</em>, real
          name {this.state.name}. This is your avatar:
          <img src={this.state.avatar_url} alt="some sort of avatar" />
        </p>
      </div>
    );
  }
}

export default UserDetails;
