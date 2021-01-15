// React imports
import React from 'react';
import {NavLink} from 'react-router-dom';

// images
import moviePic from '../../images/kimi-no-nawa.jpg';

// bootstrap imports
import Button from 'react-bootstrap/Button';

const LandingPage = () => (
    <div className='row'>
        <div className='leftColumn'>
            <h1 className='landingPage-header'>Movie and Chill</h1>
            <p className='landingPage-description'>Our recommendation engine learns what you like as you use us, making better recommendations over-time!</p>
            <div className='button-container'>
                <NavLink to='/login' activeClassName='is-active' exact={true}>
                    <Button className='button'>Login</Button>
                </NavLink>
                <NavLink to='/signUp' activeClassName='is-active'>
                    <Button className='button'>Sign Up</Button>
                </NavLink>
            </div>
        </div>
        <div className='rightColumn'>
            <img className='landingPageMovie' src={moviePic} />
        </div>
    </div>
)

export {LandingPage as default};