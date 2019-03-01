import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import './Login.css'
import styled from 'styled-components'

const FormContainer = styled.div`
    border: 1px solid lightgray;
    width: 400px;
    margin: 50px auto;
    border-radius: 5px;
    padding: 20px;
`;

const H2style = styled.h2`
    text-align: center
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
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
           
            <FormContainer >
                <H2style>Welcome to InstaFunForeverReactFun</H2style>
                <Form className="form" onSubmit={this.signIn}>
                <Col>
                    <FormGroup className='form-group' >
                        <Label>Username</Label>
                        <Input
                            type="username"
                            name="username"
                            id="exampleUsername"
                            placeholder="cool-guy"
                        />
                    </FormGroup>    
                </Col>
                <Col>
                    <FormGroup className='form-group'>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                    </FormGroup>
                </Col>
                <Button type="submit">Submit</Button>
                </Form>
            </FormContainer>
        )
    }
    
}


export default Login;