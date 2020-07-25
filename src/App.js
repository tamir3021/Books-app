import React from 'react';
import './App.scss';
import NavigationBar from './navigationBar/NavigationBar';
import Content from './content/Content';
import TopNav from './topNav/TopNav';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'node-sass';
import { _ } from 'lodash';

class App extends React.Component {

  doDebounceSearch(value) {
    _.debounce(() => {
        this.fetchBookDetails(value);
    }, 300)
  }

  fetchBookDetails(value) {
    fetch("https://www.googleapis.com/books/v1/volumes?q=thestand")
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <main className="App-main">
            <TopNav></TopNav>
            <div className="mainArea">
              <NavigationBar onChange={(value) => this.doDebounceSearch(value)}/>
              <Content />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
