import React, { useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import './App.css'
import TodoItemList from './components/TodoItemList'
import axios from 'axios'
import dayjs from 'dayjs'

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
const colors = [
    '#ffcfcf',
    '#ffa5a5',
    '#5c969e',
    '#3d7ea6',
    '#f1db9a',
    '#b1ccdb',
]

function App() {
    const [todos, setTodos] = useState([])
    const [activeTab, setActiveTab] = useState(content[0])
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTemplateOpen, setModalTemplateOpen] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null)

    const addTodo = todo => {
        setTodos(todos.concat(todo))
        console.log(todo)
    }
    const delTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = todo => {
        const startIndex = todos.findIndex(element => element.id === todo.id)
        console.log(startIndex)
        const newTodos = todos.concat()
        newTodos.splice(startIndex, 1, todo)
        setTodos(newTodos)
    }
    const openModal = () => {
        setModalOpen(true)
    }
    const openModalTemplate = todo => {
        setModalTemplateOpen(true)
        setSelectedTodo(todo)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    const closeModalTemplate = () => {
        setModalTemplateOpen(false)
    }

    return (
        <TodoTemplate
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            addTodo={addTodo}
            title="ToDo"
            colors={colors}
            open={modalOpen}
            openModal={openModal}
            closeModal={closeModal}
        >
            <TodoItemList
                filterType={activeTab.type}
                todos={todos}
                colors={colors}
                setTodos={setTodos}
                delTodo={delTodo}
                open={modalTemplateOpen}
                openModal={openModalTemplate}
                closeModal={closeModalTemplate}
                selectedTodo={selectedTodo}
                updateTodo={updateTodo}
            />
        </TodoTemplate>
    )
}

export default App
