import React from "react";
import { Link } from "@reach/router";

function Banner() {
  return (
    <>
      <h1 className="banner__title">
        <Link to="/">NC NEWS</Link>
      </h1>
    </>
  );
}

export default Banner;
