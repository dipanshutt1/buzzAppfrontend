import React, {Component} from 'react';
import Menu from '../menu/Menu';
import Complaint from '../complaint/complaint'
import Resolve from '../resolve/Resolve';
import {Redirect, Route, Switch} from 'react-router-dom';
import Buzz from '../buzz/Buzz';
import User from '../userProfile/user'
import './dashboard.css'
import {connect} from "react-redux";
import AllUser from "../allUser/allUser";
import ttnlogo from '../../assets/ttnlogo.png';
import banner2 from '../../assets/banner2.jpg';

class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbarLogout '>
                        <a href="https://www.tothenew.com"><img src={ttnlogo} alt="image/*"/></a>
                        <i onClick={this.logout} style={{color: '#091341'}} className="fa fa-sign-out fa-2x"
                           aria-hidden="true"></i>
                    </nav>
                    <div>
                        <img className="bannerItem d-block w-100" src={banner2} accept='image/*'></img>
                    </div>
                </header>
                <main>
                    <aside className={"col-lg-3"}>
                        <User/>
                        <Menu/>
                    </aside>
                    <section>
                        <Switch>

                            <Route
                                exact
                                path={`${this.props.match.path}/`}
                                render={() => <Redirect to={
                                    {
                                        pathname: '/dashboard/buzz'
                                    }
                                }/>}
                            />

                            <Route
                                exact
                                path={`${this.props.match.path}/buzz`}
                                component={Buzz}
                            />
                            <Route
                                exact
                                path={`${this.props.match.path}/complaint`}
                                component={Complaint}
                            />
                            {
                                this.props.user.userProfile.userRole === 'USER' ?
                                    null :
                                    <Route
                                        exact
                                        path="/dashboard/resolve"
                                        component={Resolve}
                                    />
                            }
                            {
                                this.props.user.userProfile.userRole === 'IT' ?
                                    <Route
                                        exact path="/dashboard/allUser"
                                        component={AllUser}
                                    /> :
                                    null
                            }
                            <Redirect
                                to={
                                    {
                                        pathname: '/pagenotfound'
                                    }
                                }
                            />
                        </Switch>
                    </section>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userProfileReducer
    }
};

export default connect(mapStateToProps, undefined)(Dashboard);
