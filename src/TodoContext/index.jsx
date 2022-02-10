import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = useState('');
    
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    
      //
      let searchedTodos = []
    
      if(!searchValue.length >= 1) {
        searchedTodos = todos
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
          return todoText.includes(searchText)
        })
      }
      //
    
      const addTodo = ({ id, text }) => {
        const newTodos = [...todos];
        newTodos.push({
          id,
          completed: false,
          text
        })
        saveTodos(newTodos)
      }

      const completeTodos = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
      }
    
      const deleteTodos = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }
    
      // React.useEffect(() => {
      //   console.log('use effect')
      // }, [totalTodos])
      
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }