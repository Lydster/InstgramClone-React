import React from 'react';
import Post from './Post';
import './PostContainer.css'

const PostContainer = (props) => {  
    return(
        <div>
            {props.data.map((post, idx) => {
            return <Post data={post} key={idx}/> })}
        </div>
    )
}

export default PostContainer;