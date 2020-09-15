import React, {useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'
import InputComment from "./InputComment";
import "./style.css";
import Comments from "./Comments";

const COMMENTS = "comments";

function Widget() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [comments, setComments] = useState(load());

    useEffect(() => {
        save()
    }, [comments])

    function save() {
        localStorage.setItem(COMMENTS, JSON.stringify(comments))
    }

    function load() {
        return JSON.parse(localStorage.getItem(COMMENTS)) || []
    }

    function deleteComment(index) {
        const tmp = comments.concat();
        tmp.splice(index, 1)
        console.log(tmp)
        setComments(tmp);
    }

    const addComment = (event) => {
        event.preventDefault()
        const comment = {
            author: name,
            text: text,
            timestamp: new Date().toLocaleString()
        }
        const tmp = comments.concat();
        tmp.push(comment);
        setComments(tmp);

        setName("");
        setText("");
    }

    return (
        <div className="fixed-container main">
            <Comments
                comments={comments}
                delete={deleteComment}
                self={this}
            />
            <InputComment
                name={name}
                text={text}
                setName={setName}
                setText={setText}
                add={addComment}
            />
        </div>
    )

}

ReactDOM.render(
    <Widget/>,
    document.querySelector('#app')
)