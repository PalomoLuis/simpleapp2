import React from "react";
import './todoItem.css';

function TodoItem ({ id, completed, text, onComplete, onDelete }) {

    return (
        <li id={id} className={`todo-item ${completed && 'todo-item-completed'}`}>
            {text}
            <i 
                className="material-icons close"
                onClick= {onDelete}
            >close</i>
            <i 
                className="material-icons check"
                onClick={onComplete}
            >check</i>
        </li>
    )
}

export { TodoItem }