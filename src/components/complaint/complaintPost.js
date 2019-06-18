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
            <div>
                <ul>
                    {this.props.userComplaint.map((data) => {
                        console.log(data);
                        return (
                            <ComplaintThread complaint={data}/>
                        )
                    })}
                </ul>
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
