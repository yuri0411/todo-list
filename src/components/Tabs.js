
import React, {useState} from 'react';

const content = [
    {
        id: 1,
        tab: 'Today',
        action: () => console.log('today')
    },
    {
        id: 2,
        tab: 'This Week',
        action: () => console.log('week')
    },
    {
        id: 3,
        tab: 'This Month',
        action: () => console.log('month')
    }
]
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