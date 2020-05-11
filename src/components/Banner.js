import React from "react";
import { Link } from "@reach/router";

function Banner({ handleNavClick }) {
  return (
    <>
      <img
        className="banner__end"
        src="https://edaid-live.s3.amazonaws.com/filestore/images/manual/northcoders-appeal-view.png"
        alt="the logo for northcoders"
      />
      <h1 className="banner__title">
        <Link to="/" onClick={() => handleNavClick("/")}>
          NC NEWS
        </Link>
      </h1>
    </>
  );
}

export default Banner;
