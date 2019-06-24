import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {connect} from "react-redux";


class Menu extends Component {
    render() {
        return (
            <div>

                    <button className="btn btn-outline-primary btn-lg btn-block">
                        <Link to="/dashboard/buzz">
                            Buzz
                        </Link>
                    </button>
                    <button className="btn btn-outline-primary btn-lg btn-block">
                        <Link to="/dashboard/complaint">
                            Complaint
                        </Link>
                    </button>
                    {this.props.user.userProfile.userRole === 'USER' ? null : <button className="btn btn-outline-primary btn-lg btn-block">
                        <Link to="/dashboard/resolve">
                            Resolve
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

