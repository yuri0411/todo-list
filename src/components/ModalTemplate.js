import React, { useEffect, useState } from 'react'
import Palette from './Palette'
import axios from 'axios'
import dayjs from 'dayjs'
import { logDOM } from '@testing-library/react'

const ModalTemplate = props => {
    const { close, colors, selectedTodo, updateTodo } = props
    const [values, setValues] = useState(selectedTodo)
    const { title, content } = values

    const onChange = e => {
        const { value, name } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    // const updateTodo = ({ title, content, color }) => {
    //     setValues({
    //         ...values,
    //         title: title,
    //         content: content,
    //         color: color,
    //     })
    // }
    const onClose = () => {
        close(false)
    }

    const onEdit = ({ id, title, content, color }) => {
        axios
            .put(`http://localhost:5000/todo/${id}`, {
                ...values,
                title,
                content,
                color,
                date: +dayjs(),
            })
            .then(function (response) {
                updateTodo(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        close(false)
    }

    const onSelectColor = color => {
        setValues({
            ...values,
            color: color,
        })
    }
    useEffect(() => {
        console.log('modal template 마운트됨')
        return () => {
            console.log('modal template 언마운트됨')
        }
    }, [])
    return (
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
                    <button onClick={() => onEdit(values)}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTemplate
