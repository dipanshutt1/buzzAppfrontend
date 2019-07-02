import React, {Component} from 'react';
import {connect} from "react-redux";
import{resolveCommit} from "../../action/resolveAction";
import ComplaintDetails from "../complaint/complaintDetails";

class ResolveThread extends Component {

    state = {
        statusList: ['Open', 'Active', 'Closed']
    };
    handleClick= e =>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('statusList',this.state.resolve);
        formData.append('issue_id', this.props.allComplaint.issue_id)
        this.props.resolveCommit(formData);
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {department, issue_id, assigned_to, name, status, email,} = this.props.allComplaint;

        return (

            <tr>
                <td>{department}</td>
                <td>{issue_id}</td>
                <td>{assigned_to}</td>
                <td>{name}</td>

                {(this.props.statusSelect && status !== 'Closed') ?
                    <React.Fragment>
                        <td>
                            <select onChange={this.handleChange} name={'resolve'} value={status}>
                                {this.state.statusList.map((status) => {
                                    return (
                                        <option value={status}>{status}</option>
                                    )
                                })}
                            </select>
                        </td>
                        <td>
                            <button onClick={this.handleClick} > Commit</button>
                        </td>
                    </React.Fragment>
                    :
                    <td><span>{status}</span></td>
                    }
                    </tr>
                    )
                    }
                    }
    const mapStateToProps=(state)=>{
    return {resolveCommit:state.resolveReducer}
    }
    const mapDispatchToProps={
        resolveCommit
    }
                    export default connect(mapStateToProps,mapDispatchToProps)(ResolveThread);