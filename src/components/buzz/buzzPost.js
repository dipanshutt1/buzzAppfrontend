import React, {Component} from 'react';
import {connect} from "react-redux";
import BuzzThread from "./buzzThread";
import {showBuzz} from "../../action/buzzAction";
// import InfiniteScroll from 'react-infinite-scroller';

class BuzzPost extends Component {
    constructor(props){
        super(props);
        this.state={
            skip:0
        }
    }
    componentDidMount() {
        this.props.showBuzz();
        console.log(this.props);
    }
    // handleLoading=()=>{
    //         this.setState({
    //             skip:this.state.skip + 5
    //         },()=>{
    //             this.props.showBuzz(this.state.skip);
    //         })
    //
    // }

    render() {
        console.log('heheke',this.props.data);
        console.log('skip ',this.state.skip);
        console.log('userpost are ',this.props.userPost.length);
        return (
            <div>
                <ul>
                    {this.props.userPost.map((data)=>{
                        console.log('my data is',data)
                        return(
                            <BuzzThread post={data}/>
                        )
                    })}
                </ul>

                {/*<InfiniteScroll*/}
                {/*pageStart={0}*/}
                {/*loadMore={this.handleLoading}*/}
                {/*hasMore={this.state.skip<this.props.userPost.length}*/}
                {/*loader={<div className="loader" key={0}>Loading Posts...</div>}*/}
                {/*>*/}
                {/*    <div>*/}
                {/*        /!*{this.props.userPost.map((data)=>{*!/*/}
                {/*        /!*    console.log('my data is',data)*!/*/}
                {/*        /!*    return(*!/*/}
                {/*        /!*        <BuzzThread post={data}/>*!/*/}
                {/*        /!*    )*!/*/}
                {/*        /!*})}*!/*/}
                {/*    </div>*/}
                {/*</InfiniteScroll>*/}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps', state);
    return{
        userPost:state.buzzReducer.buzzPost
    }

}

const mapDispatchToProps = {
    showBuzz
}
export default connect(mapStateToProps,mapDispatchToProps)(BuzzPost);