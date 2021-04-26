import React from 'react'
import Dropdown from './Dropdown'

const TodoItem = ({ title, content, date, color, setTodos }) => {
    return (
        <div className="item-wrapper" style={{ background: color }}>
            <div className="item-wrapper-header">
                <div className="item-wrapper-title">
                    {title}
                    <div className="item-wrapper-date">{date}</div>
                </div>
                <Dropdown setTodos={setTodos} />
            </div>
            <div className="item-wrapper-content">{content}</div>
        </div>
    )
}

export default TodoItem
