import React from 'react'

export default (props) => {
    return (
        <div className="comment">
            <div className="comment__head">
                <div>{props.author}</div>
                <div className="comment-head__right">
                    <div className="time">{props.timestamp}</div>
                    <input type="send" className="red-cross" onClick={() => props.delete(props.id)}/>
                </div>
            </div>
            <div>{props.text}</div>
        </div>
    )
}