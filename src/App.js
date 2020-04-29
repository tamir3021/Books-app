import React from 'react';
import './App.scss';
import NavigationBar from './navigationBar/NavigationBar';
import Content from './content/Content';
import TopNav from './topNav/TopNav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="App-main">
          <TopNav></TopNav>
          <div className="mainArea">
            <NavigationBar />
            <Content />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
