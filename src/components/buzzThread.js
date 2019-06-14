import React, {Component} from 'react';

class BuzzThread extends Component {
    render() {

        const{category,content,imageUrl,date_created,like,dislike}=this.props.post
        console.log("@@@@@@@",imageUrl)
        return (
            <div>
                <ul>
                    <li>{content}</li>
                    <li>{category}</li>
                    <li><img src={imageUrl} alt="image"/></li>
                    <li>{date_created}</li>
                    {/*<li onClick={this.handleChange}>Like:{like.length}</li>*/}
                    {/*<li>Dislike:{dislike.length}</li>*/}
                </ul>
            </div>
        );
    }
}

export default BuzzThread;