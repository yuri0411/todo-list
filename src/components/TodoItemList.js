import React from 'react'
import TodoItem from "./TodoItem";


const todo=[
    {
        id: 1,
        title: '프로젝트 생성하기',
        content: 'todo list 만들기',
        date: '21년 4월 22일'
    },
    {
        id: 2,
        title:'오늘 할 일',
        content: '약속',
        date: '21년 4월 11일'
    },
    {
        id: 3,
        title:'집에 가고싶다',
        content: '집에 보내줘라',
        date: '21년 4월 1일'
    },
]

const TodoItemList = () => {
    const todoItem = todo.map((item) => (
        <TodoItem title={item.title} content={item.content} date={item.date}/>
    ));
    return (
        <div>{todoItem}</div>
    )
}

export default TodoItemList