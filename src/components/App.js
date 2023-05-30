import React from 'react'
import './app.css'
import NewTodoPanel from './create-todo-panel/newTodoPanel'
function App() {
    return (
        <div className='app-container'>
            <div className="wrapper">
                <NewTodoPanel />
            </div>
        </div>
    )
}

export default App