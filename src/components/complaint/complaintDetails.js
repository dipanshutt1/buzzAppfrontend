import React,{Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

class ComplaintDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image_url: "",
            concern: "",
            issue_date: "",
            email: "",
            status: "",
            title: "",
            assigned_to: "",
            department: ""
        }
    }

    handleOnClick = () => {
        const data = this.props.list.filter(element => {
            return element.issue_id === this.props.issue_id;
        });
        this.setState({
            ...data[0]
        })
    }

    render() {
        const { name, image_url, concern, issue_date, status, title, assigned_to, department } = this.state;

        return (
            <div className="complaint-modal">
                <button
                    onClick={this.handleOnClick}
                    type="button"
                    className="btn modal-btn"
                    data-toggle="modal"
                    data-target={`#myModal${this.props.issue_id}`}
                    style={{ 'color': 'steelblue', 'textDecoration':'underline' }}
                >
                    {this.props.issue_id}
                </button>

                <div className="modal fade" id={`myModal${this.props.issue_id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Complain Details</h4>
                            </div>
                            <div className="modal-body">
                                <table style={{ 'width': '100%' }}>
                                    <tbody>
                                    <tr style={{ 'border': 'none%' }}>
                                        <th>Issue ID</th>
                                        <td>{this.props.issue_id}</td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <td>{title}</td>
                                    </tr>
                                    <tr>
                                        <th>Details</th>
                                        <td style={{ 'word-break': 'break-all' }} >{concern}</td>
                                    </tr>
                                    <tr>
                                        <th>Created At</th>
                                        <td>{moment(issue_date).format('LL')}</td>
                                    </tr>
                                    {(image_url) ?
                                        <tr>
                                            <th>Image</th>
                                            <td><img src={image_url} width={'100px'} height={'100px'} alt='' /></td>
                                        </tr>
                                        : null
                                    }
                                    <tr>
                                        <th>Department</th>
                                        <td>{department}</td>
                                    </tr>
                                    <tr>
                                        <th>Raised By</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>Assigned To</th>
                                        <td>{assigned_to}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>{status}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {list: state.complaintReducer.complaint}
}
export default connect(mapStateToProps)(ComplaintDetail);