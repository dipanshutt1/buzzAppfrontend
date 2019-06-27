import React, {Component} from 'react';

class ComplaintThread extends Component {
    render() {
        console.log('these are props',this.props.complaint)
        const{department,issue_id,assigned_to,status}=this.props.complaint
        return (
            <tr>
                <td>{department}</td>
                <td>{issue_id}</td>
                <td>{assigned_to}</td>
                <td>{status}</td>
            </tr>
        )
    }
}

export default ComplaintThread;