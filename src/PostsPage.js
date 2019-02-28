import React from 'react';
import dummyData from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class PostsPage extends React.Component {
    constructor() {
      super();
    this.state = {
        data: [],
        searchData: []
    }
  }
  
  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }
  
  searchBarHandler = e => {
    const posts = this.state.data.filter( post => {
      if (post.username.includes(e.target.value)) {
        console.log(post)
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }
  
    render() {
      console.log(this.state)
      return (
        <div className="App">
          <SearchBar input="text" searchBarHandler={this.searchBarHandler} />
          <PostContainer data={
            this.state.searchData.length > 0 ? 
            this.state.searchData :
            this.state.data}/>
        </div>
      );
    }
  }
  
  export default PostsPage;
  