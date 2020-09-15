import React from 'react'

export default (props) => {
    return (
        <form className="input" onSubmit={props.add}>
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label>Имя</label>
                <input type="text" name="name" value={props.name} onChange={e => {props.setName(e.target.value)}}/>
                <label>Комментарий</label>
                <textarea rows="5" cols="45" name="text" value={props.text} onChange={e => {props.setText(e.target.value)}}/>
                <button className="send">Отправить</button>
            </fieldset>
        </form>
    )
}