import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Banner from "./components/Banner";
import UserDetails from "./components/UserDetails";
import NavList from "./components/NavList";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import UserPage from "./components/UserPage";
import ErrorMessage from "./components/subcomponents/ErrorMessage";

class App extends React.Component {
  state = { username: "jessjelly", currentPath: "" };

  componentDidMount() {
    this.getCurrentPath();
  }

  handleNavClick = (nextPath) => {
    this.setState({ currentPath: nextPath });
  };

  getCurrentPath = () => {
    this.setState({ currentPath: window.location.pathname });
  };

  render() {
    const { username, currentPath } = this.state;
    return (
      <div className="App">
        <header className="banner__container">
          <Banner
            handleNavClick={this.handleNavClick}
            currentPath={currentPath}
          />
          <UserDetails
            username={username}
            handleNavClick={this.handleNavClick}
          />
        </header>
        <nav className="nav__container">
          <NavList
            handleNavClick={this.handleNavClick}
            currentPath={currentPath}
          />
        </nav>
        <main>
          <Router className="main__container">
            <Articles
              path="/"
              username={username}
              handleNavClick={this.handleNavClick}
            />
            <Articles
              path="/:topic_slug"
              username={username}
              handleNavClick={this.handleNavClick}
            />
            <SingleArticle
              path="/:topic_slug/:article_id"
              username={username}
              handleNavClick={this.handleNavClick}
            />
            <UserPage
              path="/user/:username"
              handleNavClick={this.handleNavClick}
            />
            <ErrorMessage default />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
