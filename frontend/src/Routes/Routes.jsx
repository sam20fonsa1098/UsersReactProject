import React from 'react';

import {Switch, Route, Redirect} from 'react-router';

import Home from '../components/home/Home';
import Users from '../containers/Users/Users';

export default props => {
    return (
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/users' component = {Users}/>
            <Redirect from = '*' to = '/'/>
        </Switch>
    );
}