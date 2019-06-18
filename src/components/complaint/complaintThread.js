import React, {Component} from 'react';

class ComplaintThread extends Component {
    render() {
        console.log('these are props',this.props.complaint)
        const{department,title,issue_date,assigned_to,status}=this.props.complaint
        return (
            <div>
                <ul>
                    <li>{department}</li>
                    <li>{title}</li>
                    <li>{issue_date}</li>
                    <li>{assigned_to}</li>
                    <li>{status}</li>
                </ul>
            </div>
        );
    }
}

export default ComplaintThread;