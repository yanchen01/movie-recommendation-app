import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap'

// <header>
//     <div className='navbar'>
//         <div className='title'>ML-based Movie Recommendations</div>
//         <div className='navbar-items'>
//             <NavLink to='/' className='navbar-item' activeClassName='is-active' exact={true}>Home</NavLink>
//             <NavLink to='/about' className='navbar-item' activeClassName='is-active'>About</NavLink>
//             <NavLink to='/contact' className='navbar-item' activeClassName='is-active'>Contact</NavLink>
//         </div>
//     </div>
// </header>

/*
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href='/' className='navbar-item'>Home</Nav.Link>
                <Nav.Link href='/about' className='navbar-item'>About</Nav.Link>
                <Nav.Link href='/contact' className='navbar-item'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
*/

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