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
        setComments([...comments].filter((_, i) => i !== index));
    }

    const addComment = (event) => {
        event.preventDefault()
        const comment = {
            author: name,
            text: text,
            timestamp: new Date().toLocaleString()
        }
        setComments([...comments, comment]);

        setName("");
        setText("");
    }

    return (
        <div className="fixed-container main">
            <Comments
                comments={comments}
                delete={deleteComment}
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