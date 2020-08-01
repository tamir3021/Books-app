import React from 'react';
import './App.scss';
import NavigationBar from './navigationBar/NavigationBar';
import Content from './content/Content';
import TopNav from './topNav/TopNav';
import { BrowserRouter as Router } from 'react-router-dom';
import  _  from 'lodash';

class App extends React.Component {
  debouncedSearch;

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
    this.debouncedSearch = _.debounce((value) => {
      this.fetchBookDetails(value);
    }, 1000);
  }

  doDebounceSearch(value) {
    if(value) {
      this.setState({searchQuery: value})
      this.debouncedSearch(value);
    }
  }

  fetchBookDetails(value) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
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
              <NavigationBar searchQuery={this.state.searchQuery} onChange={(value) => this.doDebounceSearch(value)}/>
              <Content />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
