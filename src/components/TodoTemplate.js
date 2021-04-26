import React, { useState } from 'react'
import Tabs from './Tabs'
import Modal from './Modal'
import { MdAdd } from 'react-icons/md'

const TodoTemplate = ({ title, children, addTodo, colors }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <main className="todo-wrapper">
            <section className="todo-wrapper-header">
                <div className="todo-wrapper-title">
                    {title}
                    <button onClick={openModal}>
                        <MdAdd />
                    </button>
                </div>
                <Tabs />
            </section>
            <section className="todo-wrapper-content">{children}</section>
            <Modal
                open={modalOpen}
                close={closeModal}
                addTodo={addTodo}
                colors={colors}
            />
        </main>
    )
}

export default TodoTemplate
