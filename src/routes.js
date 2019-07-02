import React, {Component} from 'react';
import Login from './components/login/login';
import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import TokenComponent from './components/Token'
import AccountError from './components/Error/AccountError';
import ErrorPage from './components/Error/ErrorPage'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path='/pagenotfound'
                        component={ErrorPage}
                    />
                    <Route
                        exact
                        path={'/'}
                        component={Login}
                    />
                    <Route
                        exact
                        path={'/token'}
                        component={TokenComponent}
                    />
                    <Route
                        exact
                        path={'/accountError'}
                        component={AccountError}
                    />
                    <PrivateRoute
                        path={'/dashboard'}
                        component={Dashboard}
                    />
                    <Redirect
                        to={
                            {
                                pathname: '/pagenotfound'
                            }
                        }
                    />

                </Switch>
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    if (localStorage.getItem('token')) {
        return <Route
            {...rest}
            render={(props) => (
                <Component
                    {...props}
                />
            )
            }
        />

    } else {
        return <Route {...rest} render={(props) => (
            <Redirect
                {...props}
                to={'/'}
            />
        )
        }
        />
    }
};
