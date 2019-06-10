import React,{Component} from 'react';
import './App.css';
import Login from './components/login';
import {Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TokenComponent from './components/Token'
export default class App extends Component {
  render() {
     return (
        <div>
            <Router>
                <Route exact path={'/'} component={Login}/>
                <Route path={'/token'} component={TokenComponent}/>
                <PrivateRoute path={'/dashboard'} component={Dashboard}/>
            </Router>
        </div>
    );
  }
}           

const PrivateRoute = ({component: Component, ...rest}) => {
    if(localStorage.getItem('token')) {
        return <Route {...rest} render={(props) => {
            return <Component {...props}/>
        }
        }/>

    } else {
        return <Route {...rest} render={(props) => {
            return <Redirect {...props} to={'/'}/>
        }
        }/>
    }
};


