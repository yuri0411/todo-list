
import React, {useState} from 'react';

const content = [
    {
        id: 1,
        tab: 'Today',
        action: () => today()
    },
    {
        id: 2,
        tab: 'This Week',
        action: () => week()
    },
    {
        id: 3,
        tab: 'This Month',
        action: () => month()
    }
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

// const useTabs = (initialTab, allTabs) => {
//     const [ activeTab , setActiveTab ] = useState(initialTab);
//
// }
const Tabs = () => {
    // const currentItem = useTabs(0, content);

    return(
        <div className="tabs-wrapper">
            {content.map((section, i) => (
                <div
                    className={"tabs-wrapper-item"}
                     key={section.id}
                     onClick={section.action}
                >
                    {section.tab}
                </div>
            ))}
            <div>
                {/*{currentItem.content}*/}
            </div>
        </div>
    )
}

export default Tabs