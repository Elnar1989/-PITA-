import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import SignIn from "../Auth/Forms/SignIn/SignIn";
import SignUp from "../Auth/Forms/SignUp/SignUp";
import app from "./app.module.css";
import Tool from "../T/Tool";
import Pain from "../P/Pain";
import Moderator from "../A/Moderator/Moderator";
import SignOut from "../Auth/Forms/SignOut/SignOut";
import Inspiration from "../I/Inspiration";
import { useSelector } from "react-redux";
import Admin from "../A/Admin/Admin";
import { useEditContext } from "../../contexts/PostContext";
import { Scene } from "three";
import Main from "../Main/Main";

// import TestUsers from "../TestUsers/TestUsers";

function App() {
  const user = useSelector((state) => state.user);
  const { toggleHeader } = useEditContext();
  console.log(toggleHeader);
  return (
    <div
      className={app.container}
      style={!toggleHeader ? {} : { justifyContent: "start" }}
    >
      <div className={app.color}></div>
      <div className={app.color}></div>
      <div className={app.color}></div>
      <Header />
      <Switch>
        {toggleHeader && (
          <Route path="/">
            <Main />
          </Route>
        )}
        <Route path="/pain">
          <Pain />
        </Route>
        <Route path="/inspiration">
          <Inspiration />
        </Route>
        <Route path="/tools">
          <Tool />
        </Route>
        <Route path="/ability">
          {user && user.admin ? <Admin /> : <Moderator />}
        </Route>
        <Route path="/logout">
          <SignOut />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
