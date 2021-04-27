import React, { useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import './App.css'
import TodoItemList from './components/TodoItemList'

export const content = [
    {
        id: 1,
        tab: 'Today',
        type: 'ONE_DAY',
    },
    {
        id: 2,
        tab: 'This Week',
        type: 'ONE_WEEK',
    },
    {
        id: 3,
        tab: 'This Month',
        type: 'ONE_MONTH',
    },
]

function App() {
    const [todos, setTodos] = useState([])
    const [activeTab, setActiveTab] = useState(content[0])

    const addTodo = todo => {
        setTodos(todos.concat(todo))
    }
    const delTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = () => {
        console.log('edit')
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
        <TodoTemplate
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            addTodo={addTodo}
            title="ToDo"
            colors={colors}
        >
            <TodoItemList
                activeTab={activeTab.type}
                todos={todos}
                setTodos={setTodos}
                delTodo={delTodo}
                editTodd={editTodo}
            />
        </TodoTemplate>
    )
}

export default App
