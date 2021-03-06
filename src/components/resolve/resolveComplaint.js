import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResolveThread from './resoleThread';
import {showAllComplaint, showMyComplaint} from "../../action/resolveAction";

class ResolveComplaint extends Component {
    componentDidMount() {
        this.props.showAllComplaint();
    }

    constructor(props){
        super(props);
        this.state = {
            complaintFilter: 'all'
        }
    }
    handleChange=(e)=>{
        console.log(`hey there ${e.target.value}`);
        this.setState({
            [e.target.name]:e.target.value,
        });
        if(e.target.value === 'my'){
            this.props.showMyComplaint();
        } else {
            this.props.showAllComplaint();
        }
    }

    render() {
        console.log('resolve props',this.props.data);
        return (
            <div>
                <div className="form-label form-component">Complaints</div>
                <select name="complaintFilter" style={{padding:"10px",width:"40%"}} className="myBtn myBtn1" onChange={this.handleChange}>
                    <option value="all">All complaints</option>
                    <option value="my">Assigned to me</option>
                </select>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>Department</th>
                            <th scope='col'>Issue Id</th>
                            <th scope='col'>Assign To</th>
                            <th scope='col'>Locked By</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.Complaint.map((data)=>{
                        return(
                            <ResolveThread allComplaint={data} statusSelect={this.state.complaintFilter === 'my'}/>
                            )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        Complaint:state.resolveReducer.Complaint,
        user: state.userProfileReducer
    }
}
const mapDispatchToProps= {
    showAllComplaint,
    showMyComplaint
}

export default connect(mapStateToProps,mapDispatchToProps)(ResolveComplaint);