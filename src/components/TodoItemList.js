import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

const TodoItemList = props => {
    const { todos, setTodos } = props
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
            {todos.map((item, id) => (
                <TodoItem
                    key={id}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                    background={item.background}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoItemList
