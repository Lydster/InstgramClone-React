import React from 'react';
import CommentSection from '../CommentsSection/CommentSection'
import './PostContainer.css'




const Post = (props) => {
    return(
        <div>
            <div className='avatar'>
                <img src={props.data.thumbnailUrl} alt="avatar" />
                <h4>{props.data.username}</h4>
            </div>
                <img src={props.data.imageUrl} alt="photo relating to text"/>
                <CommentSection data={props.data}/>
        </div>
    )
}
 
export default Post;