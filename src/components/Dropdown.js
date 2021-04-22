import React, {useState} from 'react';
import {MdMoreHoriz} from "react-icons/md";


const list =[
    {
        item: '편집',
    },
    {
        item: '삭제',
    }
]
const Dropdown = ({ selected }) => {

    const [openTooltip, setOpenTooltip] = useState(false)
    const tooltip = () => {
        setOpenTooltip(!openTooltip)
    }
    return(
        <div className="dropdown-wrapper">
            <button onClick={tooltip}>
                <MdMoreHoriz size={24} color="white" />
            </button>
            { openTooltip
                ? (
                    <div className="dropdown-wrapper-content">
                        {list.map((item) => (
                            <div className="dropdown-wrapper-content-item">
                                {item.item}
                            </div>
                        ))}
                    </div>
                )
                : null
            }
        </div>
    )
}

export default Dropdown