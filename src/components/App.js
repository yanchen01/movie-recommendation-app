// React imports
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Component imports
import Header from './Header'
import NavBarRouter from '../routers/NavBarRouter';
import LandingPageRouter from '../routers/LandingPageRouter';

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
