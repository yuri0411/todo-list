import React from 'react'

const TodoItem = ({ title, content }) => {
    return(
        <div className="item-wrapper">
            <div className="item-wrapper-header">
                <div className="item-wrapper-title">
                    title
                    <div className="item-wrapper-date">date</div>
                </div>
                <button>
                    edit
                </button>
            </div>
            <div className="item-wrapper-content">
                content
            </div>
        </div>
    )
}

export default TodoItem