import React from 'react'
import Dropdown from './Dropdown'
import dayjs from 'dayjs'

const TodoItem = ({
    // id,
    // title,
    // content,
    // date,
    // color,
    delTodo,
    onEdit,
    openModal,
    ...item
}) => {
    const { id, title, content, date, color } = item
    return (
        <div className="item-wrapper" style={{ background: color }}>
            <div className="item-wrapper-header">
                <div className="item-wrapper-title">
                    {title}
                    <div className="item-wrapper-date">
                        {dayjs(date).format('YYYY년MM월DD일')}
                    </div>
                </div>
                <Dropdown
                    delTodo={delTodo}
                    onEdit={onEdit}
                    todo={item}
                    openModal={openModal}
                />
            </div>
            <div className="item-wrapper-content">{content}</div>
        </div>
    )
}

export default TodoItem
