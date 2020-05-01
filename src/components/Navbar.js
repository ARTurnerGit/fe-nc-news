import React from "react";
import { Link } from "@reach/router";

class NavList extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/topic_slug">SOME TOPIC LINK TO /:topic_slug</Link>
          </li>
          <li>
            <Link to="/topic_slug">SOME TOPIC LINK TO /:topic_slug</Link>
          </li>
          <li>
            <Link to="/topic_slug">SOME TOPIC LINK TO /:topic_slug</Link>
          </li>
          <li>
            <Link to="/topic_slug">SOME TOPIC LINK TO /:topic_slug</Link>
          </li>
          <li>
            <Link to="/topic_slug">SOME TOPIC LINK TO /:topic_slug</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavList;
