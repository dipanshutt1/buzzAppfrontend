import React, {Component} from 'react';

class UserProfileThread extends Component {
    render() {
        console.log(this.props.user);
        const{userName, userImg,email,department,userRole}=this.props.user
        return (
            <div className="userProfile d-flex">
                    <img className="img-thumbnail img-fluid rounded-circle profileWrapper" src={userImg}/>
                    <div className="profileWrapper">
                        <h4>{userName}</h4>
                        <h6>{department}</h6>
                        {/*<h6 className="text-center">Role : {userRole}</h6>*/}
                        <h6 className="text-center">{email}</h6>
                    </div>
            </div>
        );
    }
}

export default UserProfileThread;