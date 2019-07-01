import React, {Component} from 'react';
import {addBuzz} from '../../action/buzzAction';
import {connect} from 'react-redux';
import './buzz.css';

class BuzzForm extends Component {
    constructor(props){
        super(props);
        this.state={
            buzzContent:'',
            category:'Activity',
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
            category:'Activity',
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
            <div className="form-component">
                <form
                      onSubmit={this.handleSubmit}
                      action='http://localhost:8080/dashboard/buzz'
                      method="POST"
                      encType={'multipart/form-data'}
                      >
                    {/*<div className="form-row">*/}
                    {/*</div>*/}
                    <div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="create buzz">To The New Buzz  </label><i className="fa fa-pencil fa-2x     "></i>
                        </div>
                        <textarea style={{border:"2px solid #091341"}}
                                  name='buzzContent'
                                  placeholder={'Create your buzz here!!!!!'}
                                  value={this.state.buzzContent}
                                  onChange={this.handleChange}
                                  className="form-control"
                                  rows="7"
                                  required={true}
                    />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fav-upload"><i className="fa fa-upload fa-2x" aria-hidden="true"style={{paddingTop:"15px"}}></i>
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
                            <select name={'category'} className="form-control myBtn myBtn1" onChange={this.handleChange} name={'category'}>
                                <option value={'Activity'}>Activity</option>
                                <option value={'Lost & Found'}>Lost & Found</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-row">
                        <input type={'submit'}
                               value={'POST'}
                               className="myBtn"
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
