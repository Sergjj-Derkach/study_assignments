import React from "react";
import "./App.css";
import Header from "./Header/Header";
import MainContent from "./Profile/MainContent";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;
