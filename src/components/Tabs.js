import React, { useState } from 'react'
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)
    const content = [
        {
            id: 1,
            tab: 'Today',
            action: () => today(),
        },
        {
            id: 2,
            tab: 'This Week',
            action: () => week(),
        },
        {
            id: 3,
            tab: 'This Month',
            action: () => month(),
        },
    ]
    const today = () => {
        console.log('today')
    }
    const week = () => {
        console.log('week')
    }
    const month = () => {
        console.log('month')
    }
    const isOn = id => {
        setActiveTab(id)
    }
    return (
        <div className="tabs-wrapper">
            {content.map((section, i) => (
                <div
                    className={'tabs-wrapper-item'}
                    key={section.id}
                    onClick={section.action}
                >
                    {section.tab}
                </div>
            ))}
        </div>
    )
}

export default Tabs
