import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Banner from "./components/Banner";
import UserDetails from "./components/UserDetails";
import NavList from "./components/Navbar";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Banner />
        <UserDetails />
        <NavList />
        <Router>
          <Articles path="/" />
          <Articles path="/:topic_slug" />
          <SingleArticle path="/:topic_slug/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
