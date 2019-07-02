import React, {Component} from 'react';
import ComplaintDetails from "./complaintDetails";

class ComplaintThread extends Component {


    render() {
        const{department,issue_id,assigned_to,status}=this.props.complaint
        return (
            <tr>
                <td>{department}</td>
                <td><ComplaintDetails issue_id={issue_id} /></td>
                <td>{assigned_to}</td>
                <td>{status}</td>
            </tr>
        )
    }
}

export default ComplaintThread;