import React, { useContext } from "react";
import { GlobalContext } from "../AppState/GlobalContext";

function HomeScreen() {
  const { currentUser } = useContext(GlobalContext);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>WELCOME MR </h1>
        <br />
        <h3>{currentUser && currentUser.email}</h3>
      </center>
    </div>
  );
}

export default HomeScreen;
