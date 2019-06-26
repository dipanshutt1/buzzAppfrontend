import React, {Component} from 'react';
import moment from 'moment'
import './buzz.css'

class BuzzThread extends Component {
    render() {

        const{category,content,imageUrl,date_created,posted_by,thumbnail}=this.props.post
        console.log(this.props.post);
        console.log("@@@@@@@",imageUrl)
        return (
                <div className='card' style={{marginTop:"20px"}}>
                    <div className="card-header">
                        <div className="profile">
                            <span className='user-thumbnail'><img src={thumbnail} alt="" width="40px"/></span>
                            <span style={{marginLeft:"20px"}} className='buzz-name'>{posted_by}</span>
                        </div>
                            <p className='text-lg-right'>{moment(date_created).fromNow()}</p>
                    </div>
                <div className="card-body">
                    <div>
                        <span style={{background:"#4631ff",padding:"10px",color:"white",fontWeight:"700",borderRadius:"5px"}} className='card-content'>{category}</span>
                    </div>
                    <div className=''>
                            <div style={{margin:"10px"}}>{content}</div>

                        {/*<li className='buzz-description'>{description}</li>*/}
                        <img src={imageUrl} style={{borderRadius:"5px", width:"500px"}} className="card-img-bottom" alt="" height="auto" />
                    </div>
                </div>
                </div>

        );
    }
}

export default BuzzThread;



