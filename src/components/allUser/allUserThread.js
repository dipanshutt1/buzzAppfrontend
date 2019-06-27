import React, {Component} from 'react';
import {connect} from "react-redux";
import {resolveUserStatus,allUser} from "../../action/allUserAction";

class AllUserThread extends Component {
    state={
        userAction:['Activate','Deactivate'],
        resolve:'Activate'
    };
    componentDidMount() {
        this.props.allUser();
    }

    handleClick=(e)=>{
        e.preventDefault();
        const formData=new FormData;
        formData.append('resolve',this.state.resolve);
        formData.append('googleId',this.props.allUser.googleId);

        this.props.resolveUserStatus(formData);


    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
        this.props.resolveUserStatus();

    };
    render() {
        console.log('deoeoaoao',this.props.user);
        const{userName, userImg,email,department,userRole}=this.props.user
        return (
            <tr>
                <td>{userName}</td>
                <td>{userRole}</td>
                <td>{email}</td>
                <td>
                    <select name="userActionfilter" onChange={this.handleChange} name={'resolve'}>
                        <option value="Activate">Activate</option>
                        <option value="Deactivate">Deactivate</option>
                    </select>
                </td>
                <button onClick={this.handleClick}>Commit</button>
            </tr>
        );
    }
}
const mapStateToProps=(state)=> {
    return {
        resolveUser: state.allUserReducer
    }
}
const mapDispatchToProps={
    resolveUserStatus,
    allUser
}
export default connect(mapStateToProps,mapDispatchToProps)(AllUserThread);