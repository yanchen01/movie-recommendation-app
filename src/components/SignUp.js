import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => (
    <div className='login-container'>
        <h2 className='login-header'>Sign Up</h2>
        <form className='login-form'>
            <label>
                <p>Name:</p>
                <input placeholder='John Doe' type='text'/>
            </label>
            <label>
                <p>Email:</p>
                <input placeholder='johndoe@example.com' type='text'/>
            </label>
            <label>
                <p>Username:</p>
                <input placeholder='user' type='text'/>
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

export {SignUp as default};