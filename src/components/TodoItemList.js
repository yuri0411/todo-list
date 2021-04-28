import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import dayjs from 'dayjs'

const TodoItemList = props => {
    const {
        todos,
        setTodos,
        delTodo,
        editTodd,
        filterType,
        openModal,
        closeModal,
        open,
    } = props
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

    const filterByType = item => {
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

        // switch (filterType) {
        //     case 'ONE_DAY':
        //         return item.date > todayZero;
        //     case 'ONE_WEEK':
        //         return item.date > weekZero
        //     case 'ONE_MONTH':
        //         return item.date > monthZero
        //     default:
        //         return item.date > todayZero
        // }

        if (filterType === 'ONE_DAY') {
            return item.date > todayZero
        } else if (filterType === 'ONE_WEEK') {
            return item.date > weekZero
        } else if (filterType === 'ONE_MONTH') {
            return item.date > monthZero
        }
    }

    return (
        <div>
            {todos.filter(filterByType).map((item, id) => (
                <TodoItem
                    key={id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                    color={item.color}
                    delTodo={delTodo}
                    editTodo={editTodd}
                    open={open}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            ))}
        </div>
    )
}

export default TodoItemList
