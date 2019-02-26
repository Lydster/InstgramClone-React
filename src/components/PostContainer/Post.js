import React from 'react';
import CommentSection from '../CommentsSection/CommentSection'

const Post = (props) => {
    return(
        <div>
            <div className='avatar'>
                <img src={props.data.thumbnailUrl} />
                <h4>{props.data.username}</h4>
            </div>
                <img src={props.data.imageUrl} />
                <CommentSection data={props.data}/>
        </div>
    )
}
 
export default Post;