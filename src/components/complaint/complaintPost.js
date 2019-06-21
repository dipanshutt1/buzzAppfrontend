import React,{Component} from 'react';
import {connect} from 'react-redux';
import ComplaintThread from './complaintThread';
import {showComplaint} from '../../action/complaintAction';

class ComplaintPost extends Component {
    componentDidMount() {
        this.props.showComplaint();
    }

    render() {
        return (
            <div className='complaint-list'>
                <div className='complaint-title'>Your Complaints</div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope='col'>Department</th>
                                <th scope='col'>ISSUE ID</th>
                                <th scope='col'>ASSIGNED TO</th>
                                <th scope='col'>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.userComplaint.map((data) => {
                            console.log(data);
                            return (
                                <ComplaintThread complaint={data}/>
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
            userComplaint:state.complaintReducer.complaint
        }
    }

    const mapDispatchToProps={
    showComplaint
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplaintPost);
