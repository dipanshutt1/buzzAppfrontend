import React, {Component} from 'react';
import moment from 'moment'
import './buzz.css';
import {connect} from "react-redux";
import {postLike,postDislike} from '../../action/buzzAction';

class BuzzThread extends Component {
    Like = () => {
        console.log(`hey there ${this.props.post._id}`)
        const formData=new FormData();
        formData.append('buzzId', this.props.post._id)
        this.props.postLike(formData);
    }

    Dislike = () => {
        const formData=new FormData();
        formData.append('buzzId', this.props.post._id)
        this.props.postDislike(formData);
    }
    render() {

        const{category,content,imageUrl,date_created,posted_by,like,dislike,thumbnail}=this.props.post
        return (
                <div className='card' style={{marginTop:"20px"}}>
                    <div className="card-header">
                        <div className="profile">
                            <div className='user-thumbnail'><img src={thumbnail} alt="" width="40px"/></div>
                            <div>
                                <span style={{marginLeft:"20px"}} className='buzz-name'>{posted_by}</span> <br/>
                                <span style={{marginLeft:"20px", background:'#B6B4B0',padding:'5px' , color:"black",fontWeight:"400",borderRadius:"5px"}} className='card-content'>{category}</span>
                            </div>
                        </div>
                            <p className='text-lg-right'>{moment(date_created).fromNow()}</p>
                    </div>
                <div className="card-body">
                    <div>

                    </div>
                    <div className=''>
                            <div style={{margin:"10px"}}>{content}</div>

                        <img src={imageUrl} style={{borderRadius:"5px", width:"500px"}} className="card-img-bottom" alt="" height="auto" />
                    </div>

                </div>
                    <div className='reactions'>
                        <i className="fa fa-thumbs-up thumpsicon" aria-hidden="true" onClick={this.Like}><span className='liketext'>{like.length}</span></i>
                        <i className="fa fa-thumbs-down" aria-hidden="true" onClick={this.Dislike} ><span className='liketext'>{dislike.length} </span></i>
                    </div>
                </div>

        );
    }
}
const mapDispatchToProps = {
    postLike,
    postDislike
}

export default connect(null, mapDispatchToProps)(BuzzThread);



