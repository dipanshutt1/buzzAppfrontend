import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {connect} from "react-redux";
import './menu.css';

class Menu extends Component {
    render() {
        console.log('Menu Render',this.props.user.userProfile);
        return (
            <div className="menu">

                        <Link className=" myBtn buzz myBtn1" to="/dashboard/buzz">
                            Buzz
                        </Link>
                        <Link className="myBtn buzz myBtn1"to="/dashboard/complaint">
                            Complaint
                        </Link>
                    {this.props.user.userProfile.userRole === 'USER' ? null :
                        <Link className ="myBtn buzz myBtn1"to="/dashboard/resolve">
                            Resolve
                        </Link>
                    }
                    {this.props.user.userProfile.userRole==='USER' ? null :
                        <Link className="myBtn buzz myBtn1"to="/dashboard/allUser">
                            All Users
                        </Link>
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

export default connect(mapStateToProps, undefined)(Menu);

