import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
    return(
        <div>
            {props.Comments.map( comment, idx) => {
                <Comment comment={comment} key={idx} />
            }}
        </div>
    )
}
 
export default CommentSection;