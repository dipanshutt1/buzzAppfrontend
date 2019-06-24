import React, {Component} from 'react';
import Menu from '../menu/Menu';
import Complaint from '../complaint/complaint'
import Resolve from '../resolve/Resolve';
import {Route} from 'react-router-dom';
import Buzz from '../buzz/Buzz';
import User from '../userProfile/user'
import './dashboard.css'
import {connect} from "react-redux";
import banner from '../../assets/banner.jpeg'
import AllUser from "../allUser/allUser";
import ttnlogo from '../../assets/ttnlogo.png';

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
                        <img src={ttnlogo} alt="image/*"/>
                        <i onClick={this.logout} className="fa fa-sign-out fa-3x" aria-hidden="true"></i>
                    </nav>
                    <div id="carouselExampleSlidesOnly" className="carouselBanner carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="bannerItem d-block w-100" src={banner} accept='image/*'></img>
                            </div>
                            <div className="carousel-item">
                                <img className="bannerItem d-block w-100" src={banner} accept='image/*'></img>
                            </div>
                            <div className="carousel-item">
                                <img className="bannerItem d-block w-100" src={banner} accept='image/*'></img>
                            </div>
                        </div>
                    </div>
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
                        {this.props.user.userProfile.userRole==='USER' ? null :
                            <Route
                                exact path="/dashboard/allUser"
                                component={AllUser}
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
