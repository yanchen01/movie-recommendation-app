import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

// Component imports
import Header from '../components/Header'
import LandingPage from '../components/headerComponents/LandingPage';
import About from '../components/headerComponents/About';
import Contact from '../components/headerComponents/Contact';

const NavBarRouter = () => 
(
    <BrowserRouter>
        <div className='NavBarRouter'>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>
)

export {NavBarRouter as default};