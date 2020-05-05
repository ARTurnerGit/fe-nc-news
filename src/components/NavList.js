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
      <ul className="nav__list">
        {this.state.topics.map((topic) => {
          return (
            <li key={topic.slug} className="nav__element">
              <Link to={`/${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavList;
