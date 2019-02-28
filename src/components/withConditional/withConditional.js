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
        console.log(localStorage)
        if (!localStorage.getItem('user')) {

           this.setState({ loggedIn: false });
          } else {
              this.setState({loggedIn: true})
          }
    }
    render() {
        if (this.state.loggedIn) return <PostsPage />;
        return <Login />
    }
  
  
};

export default withConditionalRender;