import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router';
import {createBrowserHistory as history} from 'history';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateUser = (e) =>
    {
        e.preventDefault();

        const request_url = 'http://movierecommendation-env.eba-cgphmqy7.us-east-2.elasticbeanstalk.com/api';
        const api_endpoint = '/user/login';
        const request_body = {
            email: email,
            password: password
        };

        axios.post(request_url + api_endpoint, request_body)
        .then(result => {
            console.log(result);
            console.log(result.data);
        })
        .catch((err) => {
            // err.response.data returns the json message if request is bad (status code 400s)
            console.log(err.response.status);
            console.log(err.response.data);
        });
    }

    return(
        <div className='login-container'>
            <h2 className='login-header'>Login</h2>
            <div>{`Currently, the email is ${email} and the password is ${password}`}</div>
            <Form className='form' onSubmit={validateUser}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control as='input' type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted" onChange={(e) => setEmail(e.target.value)}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control as='input' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <div className='login-buttons-container'>
                    <Button className='back-button'>
                        <Link to='/'>Back</Link>
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>   
    )
}

export default withRouter(Login);