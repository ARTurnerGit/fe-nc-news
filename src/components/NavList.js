import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class NavList extends React.Component {
  state = { topics: [] };

  componentDidMount() {
    this.requestTopics();
  }

  requestTopics = () => {
    return api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  render() {
    const { topics } = this.state;
    const { handleNavClick, currentPath } = this.props;
    return (
      <ul className="nav__list">
        Topics
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="nav__element">
              <Link
                to={`/${topic.slug}`}
                name={`/${topic.slug}`}
                onClick={() => handleNavClick(topic.slug)}
                className={
                  currentPath.includes(topic.slug) ? "selected--nav" : "normal"
                }
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
