import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => 
(
    <header>
        <div className='navbar'>
            <div className='title'>ML-based Movie Recommednations</div>
            <div className='navbar-items'>
                <NavLink to='/' className='navbar-item' activeClassName='is-active' exact={true}>Home</NavLink>
                <NavLink to='/about' className='navbar-item' activeClassName='is-active'>About</NavLink>
                <NavLink to='/contact' className='navbar-item' activeClassName='is-active'>Contact</NavLink>
            </div>
        </div>
    </header>
)

export {Header as default};