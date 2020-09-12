import React from 'react'

export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="comment__head">
                    <div>{this.props.author}</div>
                    <div className={"comment-head__right"}>
                        <div className={"time"}>{this.props.timestamp}</div>
                        <input type="send" className={"red-cross"} onClick={this.props.delete}/>
                    </div>
                </div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}