import React, {Component} from 'react';
import {connect} from "react-redux";
import BuzzThread from "./buzzThread";
import {showBuzz} from "../../action/buzzAction";

class BuzzPost extends Component {
    componentDidMount() {
        this.props.showBuzz();
        console.log(this.props);
    }

    render() {
        console.log('heheke',this.props.data)
        return (
            <div>
                <ul>
                    {this.props.userPost.map((data)=>{
                        return(
                            <BuzzThread post={data}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps', state);
    return{userPost:state.buzzReducer.buzzPost}
}

const mapDispatchToProps = {
    showBuzz
}
export default connect(mapStateToProps,mapDispatchToProps)(BuzzPost);