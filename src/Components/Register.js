import React, { useState } from "react";
// import { Button } from "antd";
import { app } from "../Firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const db = app.firestore().collection("views");

const Register = () => {
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  // const [fileUrl, setFileUrl] = useState("");

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const SignUpUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await db.doc(newUser.user.uid).set({
      name,
      email,
      password,
      bio,
    });
  };
  const signInUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/");
  };

  return (
    <div>
      <center></center>
      <br />
      <br />
      <br />
      <center>
        {toggle ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
              width: "300px",
            }}
          >
            {/* <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              type="file"
              placeholder="file"
              value={fileUrl}
              onChange={(e) => {
                setFileUrl(e.target.value);
              }}
            /> */}

            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="biography"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                SignUpUser();
              }}
            >
              Register
            </button>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>Already have an an Account, please</div>
              <div
                style={{ marginLeft: "5px", color: "blue", cursor: "pointer" }}
                onClick={onToggle}
              >
                sign in here
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
              width: "300px",
            }}
          >
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <br />
            <button
              onClick={() => {
                signInUser();
              }}
            >
              {" "}
              Sign In
            </button>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>Don't have an an Account, please</div>
              <div
                style={{ marginLeft: "5px", color: "blue", cursor: "pointer" }}
                onClick={onToggle}
              >
                sign Up here
              </div>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default Register;
