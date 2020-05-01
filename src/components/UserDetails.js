import React from "react";
import { Link } from "@reach/router";

function UserDetails() {
  return (
    <div>
      <p>
        YOU ARE CURRENTLY LOGGED IN AS{" "}
        <Link to="/userid">
          <em>INSERT NAME HERE</em>
        </Link>
      </p>
    </div>
  );
}

export default UserDetails;
