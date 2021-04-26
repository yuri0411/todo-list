import React, { createContext, useContext, useReducer, useRef } from 'react'

const TodoStateContext = createContext(null)
const TodoDispatchContext = createContext(null)
const TodoNextIdContext = createContext(null)

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo)
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error(`Unhandled action type ${action.type}`)
    }
}

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer)
    const nextId = useRef(6)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    return useContext(TodoStateContext)
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext)
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext)
}
