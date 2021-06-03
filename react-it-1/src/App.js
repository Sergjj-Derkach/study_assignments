import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Profile/Dialogs/Dialogs";
import News from "./Profile/New/New";
import Music from "./Profile/Music/Music";
import Setting from "./Profile/Settings/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-main">
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
