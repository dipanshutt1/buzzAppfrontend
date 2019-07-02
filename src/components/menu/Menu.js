import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import './menu.css';
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Menu extends Component {
    render() {
        return (
            <div className="menu">

                <Link className=" myBtn buzz" to="/dashboard/buzz">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                    <span>Buzz</span>
                </Link>
                <Link className="myBtn buzz" to="/dashboard/complaint">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <span>Complaint</span>
                </Link>
                {this.props.user.userProfile.userRole === 'USER' ? null :
                    <Link className="myBtn buzz" to="/dashboard/resolve">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <span>Resolve</span>
                    </Link>
                }
                {this.props.user.userProfile.userRole === 'IT' ?
                    <Link className="myBtn buzz" to="/dashboard/allUser">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <span>All Users</span>
                    </Link>: null

                }
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        user: store.userProfileReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

