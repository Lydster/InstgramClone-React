import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

const Comment = (props) => {
    return(
   <div className="comment">
       <p>{props.data.username}: </p>
       <p> {props.data.text}</p>
   </div>

    )
}

export default Comment;