import React from 'react'
import TodoTemplate from "./components/TodoTemplate";
import './App.css'
import TodoItemList from "./components/TodoItemList";

function App() {

    return (
        <TodoTemplate title="ToDo" children={<TodoItemList />} >

        </TodoTemplate>
    );
}

export default App;