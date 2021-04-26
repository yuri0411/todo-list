import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

const colors = [
    '#ffcfcf',
    '#ffa5a5',
    '#5c969e',
    '#3d7ea6',
    '#f1db9a',
    '#b1ccdb',
]
const date = dayjs('')

const Popover = props => {
    const { open, close } = props
    const [values, setValues] = useState({
        title: '',
        content: '',
    })
    const { title, content } = values
    const nextId = useRef(6)

    const onChange = e => {
        const { value, name } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const onClose = () => {
        close(false)
        setValues('')
    }

    const onSubmit = e => {
        e.preventDefault()

        axios
            .post('http://localhost:5000/todo', {
                title,
                content,
                date,
                colors,
            })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        nextId.current += 1
        setValues('')
        close(false)
    }

    return (
        <>
            {open ? (
                <div className="popover-wrapper">
                    <div className="popover-wrapper-container">
                        <div className="color-picker">
                            {colors.map(index => (
                                <div
                                    key={index}
                                    style={{
                                        background: index,
                                    }}
                                />
                            ))}
                        </div>
                        <input
                            placeholder="제목을 입력하세요"
                            name="title"
                            value={title}
                            onChange={onChange}
                        />
                        <textarea
                            name="content"
                            value={content}
                            onChange={onChange}
                            rows="5"
                            cols="33"
                            placeholder="내용을 입력하세요"
                        />
                        <div className="button-group">
                            <button onClick={onClose}>취소</button>
                            <button onClick={onSubmit}>확인</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Popover
