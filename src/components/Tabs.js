import React from 'react';

const content = [
    {
        id: 1,
        title: 'Today'
    },
    {
        id: 2,
        title: 'This Week'
    },
    {
        id: 3,
        title: 'This Month'
    }
]

const Tabs = () => {
    return(
        <div className="todo-tabs-wrapper">
            {content.map((item, id) => (
                <button key={id}>{item.title}</button>
            ))}
        </div>
    )
}

export default Tabs