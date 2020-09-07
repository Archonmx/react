import React from 'react'

export default (props) => {
    return (
        <form
            className={styles.inputForm}
            onSubmit={props.add}>
            <label>Имя</label>
            <input type="text" name="name" value={props.name} onChange={props.inputChange}/>
            <label>Комментарий</label>
            <input type="textarea" name="text" value={props.text} onChange={props.inputChange}/>
            <button className={styles.test}>Добавить</button>
        </form>
    )
}