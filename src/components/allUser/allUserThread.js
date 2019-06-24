import React, {Component} from 'react';

class AllUserThread extends Component {
    render() {
        console.log('deoeoaoao',this.props.user);
        const{userName, userImg,email,department,userRole}=this.props.user
        return (
            <tr>
                <td>{userName}</td>
                <td>{userRole}</td>
                <td>{email}</td>
            </tr>
        );
    }
}

export default AllUserThread;