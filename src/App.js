import React,{Component} from 'react';
import './App.css';
import Routes from './routes';
import {BrowserRouter} from "react-router-dom";

export default class App extends Component{
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </div>
        )
    }
}



// import Login from './components/login/login';
// import {Redirect, Route, BrowserRouter as Router} from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard";
// import TokenComponent from './components/Token'
// import AccountError from './components/Error/AccountError';
// import ErrorPage from './components/Error/ErrorPage'
//
// export default class App extends Component {
//   render() {
//      return (
//         <div>
//             <Router>
//                 <Route exact path={'/'} component={Login}/>
//                 <Route exact path={'/token'} component={TokenComponent}/>
//                 <Route exact path={'/accountError'} component={AccountError}/>
//                 <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
//                 <Route exact path='/pagenotfound' component={ErrorPage}/>
//                 {/*<Redirect from='*' to='/pagenotfound' />*/}
//             </Router>
//         </div>
//     );
//   }
// }
//
// const PrivateRoute = ({component: Component, ...rest}) => {
//     if(localStorage.getItem('token')) {
//         return <Route {...rest} render={(props) => {
//             return (
//                 <React.Fragment>
//                 {/*<User />*/}
//                 <Component {...props}/>
//                 </React.Fragment>
//         )
//         }
//         }/>
//
//     } else {
//         return <Route {...rest} render={(props) => {
//             return <Redirect {...props} to={'/'}/>
//         }
//         }/>
//     }
// };
//
//
