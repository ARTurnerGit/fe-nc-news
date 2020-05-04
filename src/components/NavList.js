import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class NavList extends React.Component {
  state = { topics: [] };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <nav>
        <ul>
          {this.state.topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavList;
