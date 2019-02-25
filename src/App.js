import React from 'react';
import './App.css';
import dummyData from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import Post from './components/PostContainer/Post'






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
  }
}


  render() {
    return (
      <div className="App">
        <SearchBar input="text"  />
        <Post />
      </div>
    );
  }
}

export default App;
