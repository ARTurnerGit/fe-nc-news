import React from "react";
import UserDetails from "./UserDetails";
import Articles from "./Articles";

function UserPage({ username, handleNavClick }) {
  return (
    <>
      <div className="userPage__header">
        <UserDetails username={username} handleNavClick={handleNavClick} />
      </div>

      <Articles author={username} handleNavClick={handleNavClick} />
    </>
  );
}

export default UserPage;
