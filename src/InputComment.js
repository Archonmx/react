import React from 'react'

export default (props) => {
    return (
        <form onSubmit={props.add}>
            <label>Имя
            <input type="text" name="name" value={props.name} onChange={props.inputChange}/>
            </label>
            <label>Комментарий
            <input type="textarea" name="text" value={props.text} onChange={props.inputChange}/>
            </label>
            <button>Добавить</button>
        </form>
    )
}