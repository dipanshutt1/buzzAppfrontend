import React, {Component} from 'react';
import {connect} from "react-redux";
import {resolveUserStatus,allUser} from "../../action/allUserAction";

class AllUserThread extends Component {
    state={
        resolve:'Activate'
    };
    componentDidMount() {
        // this.props.resolveUserStatus();
        // this.props.allUser();
    }

    handleClick=(e,googleId)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('resolve',this.state.resolve);
        formData.append('googleId',googleId);
        console.log(`Google Id ${googleId}`);
        this.props.resolveUserStatus(formData);
    };
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        console.log('deoeoaoao',this.props.user);
        const{userName, userImg,email,department,userRole,googleId}=this.props.user
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
                <button style={{marginTop:"10px"}} onClick={(e) =>this.handleClick(e, googleId)}>Commit</button>
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
}
export default connect(mapStateToProps,mapDispatchToProps)(AllUserThread);