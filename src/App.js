import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Banner from "./components/Banner";
import UserDetails from "./components/UserDetails";
import NavList from "./components/NavList";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import ErrorMessage from "./components/subcomponents/ErrorMessage";

class App extends React.Component {
  state = { username: "jessjelly" };
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
        <main>
          <Router className="main__container">
            <Articles path="/" username={this.state.username} />
            <Articles path="/:topic_slug" username={this.state.username} />
            <SingleArticle
              path="/:topic_slug/:article_id"
              username={this.state.username}
            />
            <ErrorMessage default />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
