import React from 'react'
import { content } from '../App'

const Tabs = ({ setActiveTab, activeTab }) => {
    const isOn = section => {
        setActiveTab(section)
    }
    return (
        <div className="tabs-wrapper">
            {content.map(section => (
                <div
                    className={
                        section.id === activeTab.id
                            ? 'tabs-wrapper-item active'
                            : 'tabs-wrapper-item'
                    }
                    key={section.id}
                    onClick={() => isOn(section)}
                >
                    {section.tab}
                </div>
            ))}
        </div>
    )
}

export default Tabs
