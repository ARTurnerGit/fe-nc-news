import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Banner from "./components/Banner";
import UserDetails from "./components/UserDetails";
import NavList from "./components/NavList";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

class App extends React.Component {
  // hardcoded username for the time being
  state = { username: "grumpy19" };
  render() {
    return (
      <div className="App">
        <header className="banner__container">
          <Banner />
          <UserDetails username={this.state.username} />
        </header>
        <nav className="nav__container">
          <NavList />
        </nav>
        <main className="main__container">
          <Router>
            <Articles path="/" username={this.state.username} />
            <Articles path="/:topic_slug" username={this.state.username} />
            <SingleArticle
              path="/:topic_slug/:article_id"
              username={this.state.username}
            />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
