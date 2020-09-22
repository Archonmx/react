import React from 'react'
import Comment from "./Comment";

export default (props) => {
    return (
        <div className="comments">
            {props.comments.map((comment, index) => {
                return <Comment
                    id={index}
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    timestamp={comment.timestamp}
                    delete={props.delete}
                />
            })}
        </div>
    )
}