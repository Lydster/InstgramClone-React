import React from 'react';
import Post from './Post';
import './PostContainer.css'

const PostContainer = (props) => {  
    return(
        <div className="post-container">
            {props.data.map((post, idx) => {
            return <Post data={post} key={idx}/> })}
        </div>
    )
}

export default PostContainer;