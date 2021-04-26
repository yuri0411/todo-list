import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

const date = dayjs('')

const Modal = props => {
    const { open, close, setTodos, colors } = props
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
        date.format('YYYY년MM월DD일')
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
                                    onClick={() => console.log(index)}
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

export default Modal
