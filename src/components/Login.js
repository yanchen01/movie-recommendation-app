import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => (
    <div className='login-container'>
        <h2 className='login-header'>Login</h2>
        <form className='login-form'>
            <label>
                <p>Email:</p>
                <input placeholder='johndoe@example.com' type='text'/>
            </label>
            <label>
                <p>Password:</p>
                <input placeholder='****' type='text'/>
            </label>
            <div className='submit-bar'>
                <Link className='login-back-button' to='/'>Back</Link>
                <button className='login-submit-button'>Submit</button>
            </div>
        </form>
    </div>
)

export {Login as default};