import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Banner from "./components/Banner";
import UserDetails from "./components/UserDetails";
import NavList from "./components/Navbar";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

class App extends React.Component {
  // hardcoded username for the time being
  state = { username: "grumpy19" };
  render() {
    return (
      <div className="App">
        <Banner />
        <UserDetails username={this.state.username} />
        <NavList />
        <Router>
          <Articles path="/" username={this.state.username} />
          <Articles path="/:topic_slug" username={this.state.username} />
          <SingleArticle
            path="/:topic_slug/:article_id"
            username={this.state.username}
          />
        </Router>
      </div>
    );
  }
}

export default App;
