import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

// Component imports
import Header from '../components/Header'
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const LandingPageRouter = () => 
(
    <div className='NavBarRouter'>
        <Switch>
            <Route path="/login" component={Login} exact={true}/>
            <Route path="/signup" component={SignUp} exact={true} />
        </Switch>
    </div>
)

export {LandingPageRouter as default};