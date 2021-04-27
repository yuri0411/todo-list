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

    const filtered = item => {
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

        if (activeTab === 'ONE_DAY') {
            console.log(item.date > todayZero)
        } else if (activeTab === 'ONE_WEEK') {
            console.log(item.date > weekZero)
        } else if (activeTab === 'ONE_MONTH') {
            console.log(item.date > monthZero)
        }
    }
    return (
        <div>
            {todos
                .filter(item => filtered(item.date))
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
