import React from 'react'
import './app.css'
import NewTodoPanel from './create-todo-panel/newTodoPanel'
import TodosDisplay from './all-todos-panel/TodosDisplay'
function App() {
    return (
        <div className='app-container'>
            <div className="wrapper">
                <NewTodoPanel />
                <TodosDisplay />
            </div>
        </div>
    )
}

export default App