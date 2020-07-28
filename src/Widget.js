import React from 'react'
import ReactDOM from 'react-dom'
import Comment from "./Comment.js";
import InputComment from "./InputComment";

const COMMENTS = "comments";

class Widget extends React.Component {
    constructor() {
        super();

        this.state = {
            comments: this.load(),
            name: "",
            text: ""
        }
    }

    load() {
        return JSON.parse(localStorage.getItem(COMMENTS)) || []
    }

    save() {
        localStorage.setItem(COMMENTS, JSON.stringify(this.state.comments))
    }

    deleteComment(index) {
        let comments = this.state.comments;
        comments.splice(index, 1)
        this.setState({comments})
    }

    inputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addComment = (event) => {
        event.preventDefault()
        const comment = {
            author: this.state.name,
            text: this.state.text,
            timestamp: new Date().toLocaleString()
        }
        let comments = this.state.comments;
        comments.push(comment);
        this.setState({
            comments: comments,
            name: "",
            text: ""
        })
    }

    render() {
        this.save();

        return (
            <div className="fixed-container">
                {this.state.comments.map((comment, index) => {
                    return <Comment
                        key={index}
                        author={comment.author}
                        text={comment.text}
                        timestamp={comment.timestamp}
                        delete={this.deleteComment.bind(this, index)}
                    />
                })}
                <InputComment
                    name={this.state.name}
                    text={this.state.text}
                    inputChange={this.inputChange}
                    add={this.addComment}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <Widget/>,
    document.querySelector('#app')
)