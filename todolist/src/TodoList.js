import React from "react";
import Todo from "./Todo";

function TodoList ({todos, toggleTodo}){
    return (
        <ul>
        {todos.map(todo => (
            <li>
            <Todo todo={todo} toggleTodo= {toggleTodo}/>
            </li>
        ))}
        </ul>
    )
}

export default TodoList