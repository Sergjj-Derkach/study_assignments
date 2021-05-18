import React from 'react';
import "./App.css";
import Header from './Header';
import MainContent from './MainContent';
import NavBar from './NavBar';

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
