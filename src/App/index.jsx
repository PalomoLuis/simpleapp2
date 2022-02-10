import React, { useState } from 'react';
import './App.css';
import { AppUi } from '../AppUI';
import { TodoProvider } from '../TodoContext';



// const defaultTodos = [
//   { id: 'todo_1', text: 'tarea 1', completed: false},
//   { id: 'todo_2', text: 'tarea 2', completed: false},
//   { id: 'todo_3', text: 'tarea 3', completed: false},
//   { id: 'todo_4', text: 'tarea 4', completed: false},
//   { id: 'todo_5', text: 'tarea 5', completed: false},
// ]

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
