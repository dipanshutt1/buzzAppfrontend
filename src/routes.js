import React, {Component} from 'react';
import Login from './components/login/login';
import {Redirect, Route,Switch} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import TokenComponent from './components/Token'
import AccountError from './components/Error/AccountError';
import ErrorPage from './components/Error/ErrorPage'

export default class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} component={Login}/>
                    <Route exact path={'/token'} component={TokenComponent}/>
                    <Route exact path={'/accountError'} component={AccountError}/>
                    <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                    <Route exact path='/pagenotfound' component={ErrorPage}/>
                    <Redirect from='*' to='/pagenotfound' />
                </Switch>
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    if(localStorage.getItem('token')) {
        return <Route {...rest} render={(props) => {
            return (
                <React.Fragment>
                    {/*<User />*/}
                    <Component {...props}/>
                </React.Fragment>
            )
        }
        }/>

    } else {
        return <Route {...rest} render={(props) => {
            return <Redirect {...props} to={'/'}/>
        }
        }/>
    }
};
