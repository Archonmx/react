import React from 'react'
import ReactDOM from 'react-dom'
import Comment from "./Comment.js";
import InputComment from "./InputComment";
import styles from "./styles.css";

const COMMENTS = "comments";

class Widget extends React.Component {
    constructor(props) {
        super(props);

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
        let comments = this.state.comments.concat();
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
        let comments = this.state.comments.concat();
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
            <div className={styles.inputForm}>
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