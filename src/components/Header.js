// React imports
import React from 'react';
import {NavLink} from 'react-router-dom';

// bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap'

const Header = () => 
(
    <header>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Nav.Link as={NavLink} to='/' className='navbar-title'>React-Bootstrap</Nav.Link>
            <Nav>
                <Nav.Link as={NavLink} to='/' className='navbar-item' exact={true}>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/about' className='navbar-item'>About</Nav.Link>
                <Nav.Link as={NavLink} to='/contact' className='navbar-item'>Contact</Nav.Link>
            </Nav>
        </Navbar>
    </header>
)

export {Header as default};