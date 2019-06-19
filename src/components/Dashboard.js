import React, {Component} from 'react';
import Menu from './Menu';
import Complaint from './complaint/complaint'
import Resolve from './resolve/Resolve';
import {Route} from 'react-router-dom';
import Buzz from './buzz/Buzz';
import User from './userProfile/user'
import './dashboard.css'
import {connect} from "react-redux";

class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbarLogout'>
                        <button onClick={this.logout}>Logout</button>
                    </nav>
                    <div className='banner'></div>
                </header>
                <main>
                    <aside>
                        <Menu/>
                        <User/>

                    </aside>
                    <section>
                        <Route
                            exact path={`${this.props.match.path}/buzz`}
                            component={Buzz}
                        />
                        <Route
                            exact path="/dashboard/complaint"
                            component={Complaint}
                        />
                        {this.props.user.userProfile.userRole === 'USER' ? null : <Route
                            exact path="/dashboard/resolve"
                            component={Resolve}
                        />}


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
