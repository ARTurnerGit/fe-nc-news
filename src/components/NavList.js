import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class NavList extends React.Component {
  state = { topics: [], currentSlug: "" };

  componentDidMount() {
    this.requestTopics();
  }

  requestTopics = () => {
    return api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  handleClick = () => {};

  render() {
    const { topics } = this.state;

    return (
      <ul className="nav__list">
        Topics
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="nav__element">
              <Link
                onClick={this.getCurrentSlug}
                to={`/${topic.slug}`}
                name={topic.slug}
              >
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavList;
