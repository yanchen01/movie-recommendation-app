import React from 'react';

const Login = () => (
    <div className='login-container'>
        <h2 className='login-header'>Login</h2>
        <form className='login-form'>
            <label>
                <p>Email:</p>
                <input placeholder='' type='text'/>
            </label>
            <label>
                <p>Password:</p>
                <input placeholder='' type='text'/>
            </label>
            <div>
                <button className='login-submit-button'>Submit</button>
            </div>
        </form>
        <button className='login-back-button'>Back</button>
    </div>
)

export {Login as default};