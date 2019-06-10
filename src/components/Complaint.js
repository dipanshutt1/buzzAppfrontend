import React, {Component} from 'react';

class Complaint extends Component {
    constructor(props){
        super(props);
        this.state={
            department:'admin',
            concern:''
        }
    }
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="department">Select Department</label>
                    <select name={'department'} id="">
                        <option value="Admin">Admin</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                    </select>
                    <label htmlFor="issue">Issue Title</label>
                    <select name="" id="">
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                    </select>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" />
                    <label htmlFor="email">Email id</label>
                    <input type="text"/>
                    <label htmlFor="concern">Your Concern</label>
                    <textarea name={'concern'}cols="30" rows="10" />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Complaint;