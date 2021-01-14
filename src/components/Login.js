import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

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
            <form className='login-form' onSubmit={validateUser}>
                <label>
                    <p>Email:</p>
                    <input placeholder='johndoe@example.com' type='text' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input placeholder='****' type='text' onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div className='submit-bar'>
                    <button><Link className='login-back-button' to='/'>Back</Link></button>
                    <button type='submit' className='login-submit-button'>Submit</button>
                </div>
            </form>
        </div>   
    )
}

export {Login as default};