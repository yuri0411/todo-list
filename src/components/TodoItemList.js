import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

const TodoItemList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/todo')
            .then(function (response) {
                setTodos(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    console.log(todos)
    return (
        <div>
            {todos.map(item => (
                <TodoItem
                    title={item.title}
                    content={item.content}
                    date={item.date}
                />
            ))}
        </div>
    )
}

export default TodoItemList
