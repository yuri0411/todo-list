import React, { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import Palette from './Palette'

const Modal = props => {
    const { open, close, addTodo, colors } = props
    const [values, setValues] = useState({
        title: '',
        content: '',
        color: '',
    })
    const { title, content } = values

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
                ...values,
                date: +dayjs(),
            })
            .then(function (response) {
                addTodo(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        setValues('')
        close(false)
    }
    const onSelectColor = color => {
        setValues({
            ...values,
            color: color,
        })
    }
    return (
        <>
            {open ? (
                <div className="popover-wrapper">
                    <div className="popover-wrapper-container">
                        <Palette
                            colors={colors}
                            // select={color}
                            onSelect={onSelectColor}
                        />
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
