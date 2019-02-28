import React from 'react';

// This is our HOC! It takes in two components and returns an anon component
const withConditionalRender = PostsPage => Login => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }
    componentDidMount() {
        if (localStorage.getItem('user')) {
            // If there is a "user" item in localStorage, render <FirstComponent />
           this.setState({ logginIn: false });
          } else {
              this.setState({loggedIn: true})
          }
    }
    render() {
        if (this.state.loggedIn) return <PostsPage />;
        return <Login />
    }
  // We can pass props to <ToShow /> if we want, and we would have access
  // to those props here

  // Now, this HOC will check to see if there is a "user" item in localStorage
  
    // If there is a "user" item in localStorage, render <FirstComponent />
   
  // If there is NOT a "user" item in localStorage, render <SecondComponent />
  
};

export default withConditionalRender;