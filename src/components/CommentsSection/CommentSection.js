import React from 'react';
import Comment from './Comment'
import * as Icon from 'react-feather';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInput: "",
            likes: props.data.likes,
            comments: props.data.comments 
        }
    }
    render() {
        return(
            <div className="commentSection" >
                <div className="icon-section" >
                    <div className="icons">
                        <Icon.Heart className="post-icons"/>
                        <Icon.MessageCircle className="post-icons"/>
                    </div>
                    <p className="likes">Likes: {this.state.likes}</p>
                </div>
                <div className="actual-comments">
                    {this.state.comments.map((comment, idx) => {
                        return(
                             <Comment data={comment} key={idx}/> 
                             )
                    })}
                </div>
                
            </div>
        )
    }

}
export default CommentSection;


