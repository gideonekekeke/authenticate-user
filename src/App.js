import React from "react";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import NavBar from "./NavBar";
import Course from "./Home/Course";
import Study from "./Home/Study";
import { GlobalProvider } from "./AppState/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/signup" component={Register} />
            <Route path="/course" component={Course} />
            <Route path="/study" component={Study} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
