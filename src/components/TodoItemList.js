import React from 'react'
import TodoItem from "./TodoItem";

const todo=[
    {
        title:'ddd'
    },
    {
        title:'ddd'
    },
    {
        title:'ddd'
    },
]
const TodoItemList = () => {
    const todoItem = todo.map(() => (
        <TodoItem />
    ));
    return(
        <div>{todoItem}</div>
    )
}

export default TodoItemList