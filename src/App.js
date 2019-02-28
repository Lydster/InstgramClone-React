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

signIn = e => {
  // sets a "user" item to localStorage for our HOC to check and
  // render the correct component
  e.preventDefault();
  localStorage.setItem('user', this.state.inputText);
  window.location.reload();
};

render() {
  return(
    <ToShow />
  )
}

}
export default App;
