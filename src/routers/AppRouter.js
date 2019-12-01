import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/home" component={Home} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;