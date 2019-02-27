import React from 'react';
import Comment from './Comment'
import * as Icon from 'react-feather';
import './CommentSection.css'
import { Input } from 'reactstrap';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInput: "",
            likes: props.data.likes,
            comments: props.data.comments 
        }
    }

    handleInputChange = e => {
        this.setState({
            comment: e.target.value
        }) 
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments, {
                    text: this.state.comment,
                    username: "groucho"
                }
            ],
            comment: ""
        })
    }

    increaseLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return(
            <div className="commentSection" >
                <div className="icon-section" >
                    <div className="icons">
                        <Icon.Heart 
                        className="post-icons"
                        onClick={this.increaseLikes}
                        />
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
                <form onSubmit={this.addNewComment}>
                <div className="new-comment">
                    <Input 
                    name="comment"
                    placeholder="comment..."
                    onChange={this.handleInputChange}
                    value={this.state.comment}/>
                </div>
                </form>
            </div>
        )
    }

}
export default CommentSection;


