import React, {Component} from 'react';

class UserProfileThread extends Component {
    render() {
        console.log(this.props.user);
        const{userName, userImg}=this.props.user
        return (
            <div>
                <ul>
                    <img src={userImg}/>
                    <li>{userName}</li>
                </ul>
            </div>
        );
    }
}

export default UserProfileThread;