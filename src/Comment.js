import React from 'react'

export default class Comment extends React.Component {
    render() {
        return (
            <div className="1">
                <div>{this.props.author}</div>
                <div>{this.props.text}</div>
                <div>{this.props.timestamp}</div>
                <button onClick={this.props.delete}>Удалить</button>
            </div>
        )
    }
}