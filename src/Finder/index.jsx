import React from "react";
import { TodoContext } from "../TodoContext";
import './finder.css';

function Finder () {

    const { searchValue, setSearchValue, totalTodos, completedTodos } = React.useContext(TodoContext);

    // let { todoList } = props
    const onSearchValueChange = (event) => {
        let value = event.target.value
        console.log(value);
        setSearchValue(value);
    }

    return (
        <section className="finder">
            <p>Tienes {completedTodos} de {totalTodos} tareas coTodosmpletadas</p>
            <div className="search">
                <input
                    type='text'
                    placeholder="buscar"
                    value={searchValue}
                    onChange={(e) => onSearchValueChange(e)}
                />
                <button className="icon-search">
                    <i className="material-icons">search</i>
                </button>
            </div>
        </section>
    )
}

export { Finder }