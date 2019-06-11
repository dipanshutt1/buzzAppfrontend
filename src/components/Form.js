import React, {Component} from 'react';

class Form extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         buzzContent:'',
    //         category:'activity',
    //         image:[]
    //     }
    // }
    //
    // handleChange=(e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    //
    // handleSubmit=(e)=>{
    //     this.setState({
    //
    //     })
    // }
    render() {
        return (
            <div>
                <form
                      action='http://localhost:8080/dashboard/buzz'
                      method="POST"
                      encType={'multipart/form-data'}
                      >
                    <textarea name='buzzContent'
                              placeholder={'Create your buzz here!!!!!'}
                    />
                    <select name={'category'} onChange={this.handleChange}>
                        <option value={'activity'}>Activity</option>
                        <option value={'LostFound'}>Lost & Found</option>
                    </select>
                    <input type="file" name='image'/>
                    <input type={'submit'} value={'POST'}/>
                </form>
            </div>
        );
    }
}

export default Form;