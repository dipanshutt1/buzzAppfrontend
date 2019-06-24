import React, {Component} from 'react';

class UserProfileThread extends Component {
    render() {
        console.log(this.props.user);
        const{userName, userImg,email,department,userRole}=this.props.user
        return (
            <React.Fragment>
                    <img className="img-thumbnail img-fluid rounded-circle" src={userImg}/>
                    <div className="profileWrapper">
                        <h4 className="text-center">{userName}</h4>
                        <h6 className="text-center">{department}</h6>
                        {/*<h6 className="text-center">Role : {userRole}</h6>*/}
                        <h6 className="text-center">{email}</h6>
                    </div>
            </React.Fragment>
        );
    }
}

export default UserProfileThread;