import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addTodo({
            id: 'id_' + newTodoValue,
            text: newTodoValue
        })
        setOpenModal(false)
    }
    return (
        <form onSubmit={onSubmit} className="todoForm">
            <label>Nueva tarea</label>
            <textarea
                placeholder="Escribe tu tarea aquí.."
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <button
                    className="form-btn"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="form-btn from-btn-primary"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }