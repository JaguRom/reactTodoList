import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const initialTodos = [
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build a todo app", completed: false},
  ];

  const [todos, setTodos] = useState (initialTodos);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map (todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos (updatedTodos);
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;
