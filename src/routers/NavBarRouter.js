import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

// Component imports
import Header from '../components/Header'
import LandingPage from '../components/headerComponents/LandingPage';
import About from '../components/headerComponents/About';
import Contact from '../components/headerComponents/Contact';

const NavBarRouter = () => 
(
    <div className='NavBarRouter'>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </div>
)

export {NavBarRouter as default};