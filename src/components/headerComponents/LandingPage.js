import React from 'react';
import {NavLink} from 'react-router-dom';
import moviePic from '../../images/kimi-no-nawa.jpg';

const LandingPage = () => (
    <div className='row'>
        <div className='column'>
            <p>App Name</p>
            <p>Description</p>
            <NavLink to='/login' activeClassName='is-active' exact={true}>Login</NavLink>
            <br />
            <br />
            <NavLink to='/signUp' activeClassName='is-active'>Sign Up</NavLink>
        </div>
        <div className='column'>
            <img className='landingPageMovie' src={moviePic} />
        </div>
    </div>
)

export {LandingPage as default};