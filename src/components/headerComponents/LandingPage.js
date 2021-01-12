import React from 'react';
import {NavLink} from 'react-router-dom';

const LandingPage = () => (
    <div className='row'>
        <div className='column'>
            <p>App Name</p>
            <p>Description</p>
            <NavLink to='/login' activeClassName='is-active' exact={true}>Login</NavLink>
            <NavLink to='/signUp' activeClassName='is-active'>Sign Up</NavLink>
        </div>
        <div className='column'>
            Display picture
        </div>
    </div>
)

export {LandingPage as default};