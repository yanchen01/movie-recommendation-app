import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        const token = '';
        const request_url = '';
        const api_endpoint = '/user/login';
        const request_body = {
            name: name,
            email: email,
            username: username,
            password: password
        };

        const authorization = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.post(request_url + api_endpoint, {request_body})
        .then(result => {
            console.log(result);
            console.log(result.status);
            console.log(result.data);
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className='login-container'>
            <h2 className='login-header'>Sign Up</h2>
            <div>{`The name is ${name}, the email is ${email}, the username is ${username}, and password is ${password}`}</div>
            <form className='login-form'>
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