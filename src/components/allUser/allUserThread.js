import React, {Component} from 'react';

class AllUserThread extends Component {
    handleClick=(e)=>{
        e.preventDefault();
        const formData=new FormData;


    }
    render() {
        console.log('deoeoaoao',this.props.user);
        const{userName, userImg,email,department,userRole}=this.props.user
        return (
            <tr>
                <td>{userName}</td>
                <td>{userRole}</td>
                <td>{email}</td>
                <td><button onClick={this.handleClick}>Delete</button></td>
            </tr>
        );
    }
}

export default AllUserThread;