import React from "react";
import './createTodoButton.css';
import { TodoContext } from '../TodoContext'

function CreateTodoButton () {
    const {setOpenModal, openModal} = React.useContext(TodoContext)

    const click = () => {
        setOpenModal( openModal => !openModal)
    }

    return (
        <button
            className={`create-todo-btn ${!!openModal && "todo-btn_close"}`}
            onClick={click}
        >{!!openModal ? "x" : "+"}</button>
    )
}

export { CreateTodoButton }