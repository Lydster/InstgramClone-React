import React from 'react';
import PropTypes from 'prop-types';


const Comment = (props) => {
    return(
   <div>
       <p>{props.data.username}</p>
       <p>{props.data.text}</p>
   </div>

    )
}

export default Comment;