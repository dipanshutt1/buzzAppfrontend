import React, {Component} from 'react';

class Complaint extends Component {
    constructor(props){
        super(props);
        this.state={
            department:'admin',
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
        this.props.addComplaint(complaintData);
        this.setState({
            department:'',
            concern:'',
            title:'',
            image:''
        })
    }
    render() {
        return (
            <div>
                <form action='http://localhost:8080/dashboard/complaint'
                      method="POST"
                      encType={'multipart/form-data'}
                      onSubmit={this.handleSubmit}
                >
                    <label htmlFor="department">Select Department</label>
                    <select name={'department'}
                            onChange={this.handleChange}>
                        <option value={'Admin'}>Admin</option>
                        <option value={'IT'}>IT</option>
                        <option value={'HR'}>HR</option>
                    </select>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                           name={'title'}
                           onChange={this.handleChange}
                           value={this.state.title}/>
                    <label htmlFor="concern">Your Concern</label>
                    <textarea name={'concern'}
                              cols="30"
                              rows="10"
                              onChange={this.handleChange}
                              value={this.state.concern} />
                    <input type="file"
                           name='image'
                           accept='image/*'
                           onChange={this.handleFileUpload}/>
                    <input type="submit"
                           value={'POST'}/>
                </form>
            </div>
        );
    }
}

export default Complaint;