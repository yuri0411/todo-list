import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import dayjs from 'dayjs'

const TodoItemList = props => {
    const { todos, setTodos, delTodo, editTodd, activeTab } = props
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
    console.log(activeTab)

    const todayZero = +dayjs()
        .set('hour', 0)
        .set('minutes', 0)
        .set('seconds', 0)
    const weekZero = +dayjs()
        .subtract(6, 'day')
        .set('hour', 0)
        .set('minutes', 0)
        .set('seconds', 0)
    const monthZero = +dayjs()
        .set('date', 1)
        .set('hour', 0)
        .set('minutes', 0)
        .set('seconds', 0)

    // const filtered = todos => {
    //     if (activeTab === 'ONE_DAY') {
    //         todos.filter(todo => todo.date > todayZero)
    //     } else if (activeTab === 'ONE_WEEK') {
    //         todos.filter(todo => todo.date > weekZero)
    //     } else if (activeTab === 'ONE_MONTH') {
    //         todos.filter(todo => todo.date > monthZero)
    //     }
    // }
    return (
        <div>
            {todos
                .filter(
                    item => activeTab === 'ONE_MONTH' && item.date > monthZero,
                )
                .map((item, id) => (
                    <TodoItem
                        key={id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        color={item.color}
                        delTodo={delTodo}
                        editTodo={editTodd}
                    />
                ))}
        </div>
    )
}

export default TodoItemList
