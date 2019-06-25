import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserProfileThread from './userProfileThread';
import {userProfile} from '../../action/userProfileAction';
import './userProfile.css';

class UserProfile extends Component {
    componentDidMount() {
        this.props.userProfile();
    }

    render() {
        console.log(`hello ${JSON.stringify(this.props.userProfileData)}`);
        return (
            <div>
                <ul>
                    <UserProfileThread user={this.props.userProfileData}/>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfileData: state.userProfileReducer.userProfile
    }
}
const mapDispatchToProps = {
    userProfile
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);