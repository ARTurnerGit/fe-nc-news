import React from "react";
import * as api from "../api";

// PROPS: username
class UserDetails extends React.Component {
  state = { name: "", avatar_url: "" };

  componentDidMount() {
    api.getUserByUsername(this.props.username).then(({ name, avatar_url }) => {
      this.setState({ name, avatar_url });
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
