import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {connect} from "react-redux";


class Menu extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li>
                        <Link to="/dashboard/buzz">
                            Buzz
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/complaint">
                            Complaint
                        </Link>
                    </li>
                    {this.props.user.userProfile.userRole === 'USER' ? null : <li>
                        <Link to="/dashboard/resolve">
                            Resolve
                        </Link>
                    </li>}

                </ul>


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

