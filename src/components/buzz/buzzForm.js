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
                <form className='buzzForm'
                      onSubmit={this.handleSubmit}
                      action='http://localhost:8080/dashboard/buzz'
                      method="POST"
                      encType={'multipart/form-data'}
                      >
                    <label className='label' htmlFor="create buzz">Create Buzz</label>
                    <textarea className='buzzContent' name='buzzContent'
                              placeholder={'Create your buzz here!!!!!'}
                              value={this.state.buzzContent}
                              onChange={this.handleChange}
                              cols="45"
                              rows="10"
                    />
                    <div className='fromWrapper'>
                        <input type="file"
                               name='image'
                               accept='image/*'
                               onChange={this.handleFileUpload}
                        />
                        <select name={'category'} onChange={this.handleChange}>
                            <option value={'activity'}>Activity</option>
                            <option value={'LostFound'}>Lost & Found</option>
                        </select>
                    </div>

                    <input className='btn' type={'submit'}
                           value={'POST'}
                    />
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
