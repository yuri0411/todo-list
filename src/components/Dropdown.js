import React, { useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import axios from 'axios'

const Dropdown = ({ selected }) => {
    const list = [
        {
            item: '편집',
            action: () => {
                console.log('edit')
            },
        },
        {
            item: '삭제',
            action: () => {
                onRemove()
            },
        },
    ]
    const [openTooltip, setOpenTooltip] = useState(false)
    const tooltip = () => {
        setOpenTooltip(!openTooltip)
    }
    const onRemove = () => {
        axios
            .delete('http://localhost:5000/todo')
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className="dropdown-wrapper">
            <button onClick={tooltip}>
                <MdMoreHoriz size={24} color="white" />
            </button>
            {openTooltip ? (
                <div className="dropdown-wrapper-content">
                    {list.map((item, i) => (
                        <div
                            key={i}
                            className="dropdown-wrapper-content-item"
                            onClick={item.action}
                        >
                            {item.item}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default Dropdown
