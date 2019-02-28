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



class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return(
            <FormContainer>
                <h2>Login</h2>
                <Form className="form">
                <Col>
                    <FormGroup className='form-group' >
                        <Label>User</Label>
                        <Input
                            type="email"
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
                <Button>Submit</Button>
                </Form>
            </FormContainer>
        )
    }
    
}


export default Login;