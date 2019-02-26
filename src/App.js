import React from 'react';
import './App.css';
import dummyData from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'







class App extends React.Component {
  constructor() {
    super();
  this.state = {
      data: dummyData
  }
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SearchBar input="text"  />
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
