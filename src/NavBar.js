import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./AppState/GlobalContext";

import { app } from "./Firebase";

function NavBar() {
  const { currentUser } = useContext(GlobalContext);
  return (
    <div
      style={{
        height: "70px",
        color: "white",
        background: "black",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>LOGO</div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div>Home</div>
        </Link>
        <Link to="/course" style={{ textDecoration: "none", color: "white" }}>
          <div>Courses</div>
        </Link>
        <Link to="/study" style={{ textDecoration: "none", color: "white" }}>
          <div>Study</div>
        </Link>

        {currentUser ? (
          <button
            onClick={() => {
              app.auth().signOut();
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            <button>Register</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
