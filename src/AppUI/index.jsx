import React from "react";
import { TodoContext } from "../TodoContext";
import { Header } from '../Header';
import { Finder } from '../Finder';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUi () {
    const {
      error,
      loading,
      searchedTodos,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)

    return (
        <div className="App">
        <Header
          dark={false}
          img={{ url: 'www.google.com', name: 'logo' }}
          menuList={[
            {name: 'home', link:'#home'},
            {name: 'todos', link:'#todos'},
            {name: 'more info', link:'#moreInfo'}
          ]}
        ></Header>
        <section className='body-section'>
          <Finder />
            <TodoList>
              {error && <p>¡Desesperate, hubo un error!</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}
    
              {
                searchedTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    todos={searchedTodos}
                    onComplete={() => completeTodos(todo.id)}
                    onDelete={() => deleteTodos(todo.id)}
                  />
                ))
              }
            </TodoList>

            {!!openModal && (
              <Modal>
                <TodoForm></TodoForm>
              </Modal>
            )}
            
            <CreateTodoButton
              setOpenModal={setOpenModal}
            />
        </section>
      </div>
    )
}

export { AppUi }