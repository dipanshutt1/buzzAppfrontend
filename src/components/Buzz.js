import React,{Component} from "react";

export default class BuzzComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            buzzContent:'',
            category:'activity',
            image:[]
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.buzzContent){
            this.setState({
                buzzContent:'',
                category:'activity',
                image:[]
            })
        }
        else{
            alert('write something in buzz');
        }
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name={'buzzContent'}
                              value={this.state.buzzContent}
                              placeholder={'Create your buzz here!!!!!'}
                    />
                    <select name={'category'}>
                        <option value={'activity'}>Activity</option>
                        <option value={'LostFound'}>Lost & Found</option>
                    </select>
                    <input type={'submit'} value={'POST'}/>
                </form>
            </div>
        )
    }
}