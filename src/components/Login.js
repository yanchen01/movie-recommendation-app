import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateUser = () =>
    {

    }

    return(
        <div className='login-container'>
            <h2 className='login-header'>Login</h2>
            <div>{`Currently, the email is ${email} and the password is ${password}`}</div>
            <form className='login-form'>
                <label>
                    <p>Email:</p>
                    <input placeholder='johndoe@example.com' type='text' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input placeholder='****' type='text' onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div className='submit-bar'>
                    <Link className='login-back-button' to='/'>Back</Link>
                    <button type='submit' className='login-submit-button'>Submit</button>
                </div>
            </form>
        </div>   
    )
}

export {Login as default};