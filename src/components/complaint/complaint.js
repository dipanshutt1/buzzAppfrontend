import React, {Component} from 'react';
import ComplaintForm from "./ComplaintForm";
import ComplaintPost from "./complaintPost";

class Complaint extends Component {
    render() {
        return (
            <div>
                <ComplaintForm/>
                <ComplaintPost/>
            </div>
        );
    }
}

export default Complaint;


