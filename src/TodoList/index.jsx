import React from "react";
import './todolist.css'

function TodoList (props) {
    return (
        <ol className="todo-list">
            {props.children}
        </ol>
    )
}

export { TodoList }