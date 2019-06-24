import React, {Component} from 'react';
import {addBuzz} from '../../action/buzzAction';
import {connect} from 'react-redux';
import './buzz.css';

class BuzzForm extends Component {
    constructor(props){
        super(props);
        this.state={
            buzzContent:'',
            category:'activity',
            image:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const newBuzz=this.state;
        const formData=new FormData();
        formData.append('buzzContent',newBuzz.buzzContent);
        formData.append('category',newBuzz.category);
        formData.append('image',newBuzz.image);
        // console.log('hi', formData);
        this.props.addBuzz(formData);
        this.setState({
            buzzContent:'',
            category:'activity',
            image:''
        })
    }
    handleFileUpload=(e)=>{
        this.setState({
            image:e.target.files[0]
        });
    }
    render() {
        return (
            <div>
                <form
                      onSubmit={this.handleSubmit}
                      action='http://localhost:8080/dashboard/buzz'
                      method="POST"
                      encType={'multipart/form-data'}
                      >
                    <div className="form-row">
                        <label htmlFor="create buzz">Create Buzz</label>
                    </div>
                    <div>
                        <textarea name='buzzContent'
                                  placeholder={'Create your buzz here!!!!!'}
                                  value={this.state.buzzContent}
                                  onChange={this.handleChange}
                                  className="form-control"
                                  rows="7"

                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="file"
                                   name='image'
                                   accept='image/*'
                                   onChange={this.handleFileUpload}
                                   height="200px"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <select name={'category'} className="form-control   " onChange={this.handleChange}>
                                <option value={'activity'}>Activity</option>
                                <option value={'LostFound'}>Lost & Found</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-row">
                        <input type={'submit'}
                               value={'POST'}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("inside mapStateToProps", state);
    return { userfeed: state.buzzReducer }
}

// const mapDispatchToProps = (dispatch) => ({
// addBuzz: (data) => dispatch(addBuzz(data))
// });
const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm)
