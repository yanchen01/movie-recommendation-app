import React from 'react';
import Header from './Header'
import NavBarRouter from '../routers/NavBarRouter';
import LandingPageRouter from '../routers/LandingPageRouter';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

const App = () => 
(
    <div className="App">
        <BrowserRouter>
            <Header />
            <LandingPageRouter />
            <NavBarRouter />
        </BrowserRouter>
    </div>
)

export {App as default};
