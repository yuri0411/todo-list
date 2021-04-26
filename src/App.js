import React, { useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import './App.css'
import TodoItemList from './components/TodoItemList'

function App() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos(todos.concat(todo))
    }
    const colors = [
        '#ffcfcf',
        '#ffa5a5',
        '#5c969e',
        '#3d7ea6',
        '#f1db9a',
        '#b1ccdb',
    ]

    return (
        <TodoTemplate addTodo={addTodo} title="ToDo" colors={colors}>
            <TodoItemList todos={todos} setTodos={setTodos} />
        </TodoTemplate>
    )
}

export default App
