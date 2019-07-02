import React, {Component} from 'react';

class UserProfileThread extends Component {
    render() {
        const{userName, userImg,email,department}=this.props.user;

        return (
            <div className="userProfile d-flex">
                <div className="innerBox">
                    <img className="img-thumbnail img-fluid rounded-circle" src={userImg}/>
                        <h4>{userName}</h4>
                        <h6>{department}</h6>
                        <h6 className="text-center">{email}</h6>
                </div>
            </div>
        );
    }
}

export default UserProfileThread;