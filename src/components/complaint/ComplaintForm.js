import React, {Component} from 'react';
import {addComplaint} from "../../action/complaintAction";
import {connect} from 'react-redux';
import swal from 'sweetalert';

class ComplaintForm extends Component {
    constructor(props){
        super(props);
        this.state={
            department:'IT',
            concern:'',
            title:'',
            image:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleFileUpload=(e)=>{
        this.setState({
            image:e.target.files[0]
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const newComplaint=this.state;
        const complaintData=new FormData();
        complaintData.append('department',newComplaint.department);
        complaintData.append('concern',newComplaint.concern);
        complaintData.append('title',newComplaint.title);
        complaintData.append('image',newComplaint.image);
        console.log('complaint data',complaintData)
        this.props.addComplaint(complaintData);

        this.setState({
            department:newComplaint.department,
            concern:'',
            title:'',
            image:''
        })
    }
    handleSweetAlert=(e)=>{
        swal({
            text: "Your complaint has been locked",
            icon: "success",
            button: "Okay!",
        });
    }
    render() {
        return (
            <div className="form-component">
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor="department" className="form-label" style={{width:"100%"}}>Select Department</label>
                            <select name={'department'} style={{margin:"0"}} className="form-control myBtn1 myBtn" onChange={this.handleChange}>
                                <option value={'IT'}>IT</option>
                                <option value={'INFRASTRUCTURE'}>INFRASTRUCTURE</option>
                                <option value={'HR'}>HR</option>
                            </select>
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor="title" className="form-label" style={{width:"100%"}}>Title</label>
                            <input type="text"
                                   className="form-control"
                                   name={'title'}
                                   onChange={this.handleChange}
                                   value={this.state.title}/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="concern" className="form-label">Your Concern</label>
                        <textarea name={'concern'}
                                  className="form-control"
                                  style={{outline:"none"}}

                                  // cols="30"
                                  rows="5"
                                  onChange={this.handleChange}
                                  value={this.state.concern} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fav-upload"><i className="fa fa-upload fa-2x" aria-hidden="true"></i>
                            Choose file..</label>
                            <input type="file"
                                   className="fileupload"
                                   id="fav-upload"
                                   name='image'
                                   accept='image/*'
                                   onChange={this.handleFileUpload}
                                   height="200px"
                                    />
                        </div>
                        <div className="form-group col-md-6">
                            <input className="myBtn myBtn1" style={{padding:"10px"}} type="submit" onClick={this.handleSweetAlert}
                                   value={'POST'}/>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state);
    return {
        complaint:state.complaintReducer
    }
}

const mapDispatchToProps={
    addComplaint
}
export default connect(mapStateToProps, mapDispatchToProps)(ComplaintForm);