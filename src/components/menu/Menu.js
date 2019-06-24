import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {connect} from "react-redux";
import './menu.css';

class Menu extends Component {
    render() {
        console.log('Menu Render',this.props.user.userProfile);
        return (
            <div className="menu">
                    <button className="myBtn btn-outline-primary btn btn-block">
                        <Link to="/dashboard/buzz">
                            Buzz
                        </Link>
                    </button>
                    <button className="myBtn btn btn-outline-primary btn-block">
                        <Link to="/dashboard/complaint">
                            Complaint
                        </Link>
                    </button>
                    {this.props.user.userProfile.userRole === 'USER' ? null : <button className="myBtn btn btn-outline-primary btn-block">
                        <Link to="/dashboard/resolve">
                            Resolve
                        </Link>
                    </button>}
                    {this.props.user.userProfile.userRole==='USER' ? null :
                    <button className="myBtn btn btn-outline-primary btn-block">
                        <Link to="/dashboard/allUser">
                            All Users
                        </Link>
                    </button>}


            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        user: store.userProfileReducer
    }
};

export default connect(mapStateToProps, undefined)(Menu);

