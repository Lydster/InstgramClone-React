import React from 'react';
import './App.css';
import PostsPage from './PostsPage'
import Login from './components/Login/Login'
import withConditionalRender from './components/withConditional/withConditional'



const ToShow = withConditionalRender(PostsPage)(Login);



class App extends React.Component {
  constructor() {
    super();
  this.state = {
      inputText: ''
  }
}



render() {
  return(
    <ToShow />
  )
}

}
export default App;
