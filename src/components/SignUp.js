import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUpEventHandler = (e) => {
        e.preventDefault();

        const request_url = 'http://movierecommendation-env.eba-cgphmqy7.us-east-2.elasticbeanstalk.com/api';
        const api_endpoint = '/user/register';
        const request_body = {
            name: name,
            email: email,
            username: username,
            password: password
        };

        console.log(request_body);

        axios.post(request_url + api_endpoint, request_body)
        .then(result => {
            console.log(result);
            console.log(result.status);
            console.log(result.data);
        })
        .catch((err) => {
            // err.response.data returns the json message if request is bad (status code 400s)
            console.log(err.response.status);
            console.log(err.response.data);
        });
    }

    return (
        <div className='login-container'>
            <h2 className='login-header'>Sign Up</h2>
            <div>{`The name is ${name}, the email is ${email}, the username is ${username}, and password is ${password}`}</div>
            <form className='login-form' onSubmit={signUpEventHandler}>
                <label>
                    <p>Name:</p>
                    <input onChange={(e) => setName(e.target.value)} placeholder='John Doe' type='text'/>
                </label>
                <label>
                    <p>Email:</p>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@example.com' type='text'/>
                </label>
                <label>
                    <p>Username:</p>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder='user' type='text'/>
                </label>
                <label>
                    <p>Password:</p>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder='****' type='text'/>
                </label>
                <div className='submit-bar'>
                    <Link className='login-back-button' to='/'>Back</Link>
                    <button type='submit' className='login-submit-button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export {SignUp as default};