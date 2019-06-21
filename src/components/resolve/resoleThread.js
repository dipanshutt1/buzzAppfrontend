import React, {Component} from 'react';
import {connect} from "react-redux";
import{resolveCommit} from "../../action/resolveAction";

class ResolveThread extends Component {

    state = {
        statusList: ['Open', 'Active', 'Closed']
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('statusList',this.state.statusList);
        this.props.resolveCommit(formData);
    }
    render() {
        const {department, issue_id, assigned_to, name, status, email} = this.props.allComplaint;

        return (
            <tr>
                <td>{department}</td>
                <td>{issue_id}</td>
                <td>{assigned_to}</td>
                <td>{name}</td>

                {(this.props.statusSelect && status !== 'Closed') ?
                    <React.Fragment>
                        <td>
                            <select>
                                {this.state.statusList.map((status) => {
                                    return (
                                        <option value={status}>{status}</option>
                                    )
                                })}
                            </select>
                        </td>
                        <td>
                            <button onSubmit={this.handleSubmit} value={this.state.statusList}> Commit </button>
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