import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import MainContent from "./Profile/MainContent";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Profile/Dialogs";
import New from "./Profile/New";
import Music from "./Profile/Music";
import Setting from "./Profile/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-main'>
          <Route path='/profile' component={MainContent} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/new' component={New} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
