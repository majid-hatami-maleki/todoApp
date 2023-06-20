import React from 'react'
import './app.css'
import TasksItems from './TasksItems'
import NewTaskForm from './NewTaskForm'
export default function App() {
    return (
        <div className='app-container'>
            <div className="app">
                <div className="display">
                    <ul className='tasks-list'>
                        <TasksItems />
                    </ul>
                </div>
                <div className="new-task-panel">
                    <NewTaskForm />
                </div>
            </div>
        </div>
    )
}
