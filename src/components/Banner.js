import React from "react";
import { Link } from "@reach/router";

function Banner() {
  return (
    <header>
      <h1>
        <Link to="/">NC NEWS, THIS IS A LINK TO /</Link>
      </h1>
    </header>
  );
}

export default Banner;
