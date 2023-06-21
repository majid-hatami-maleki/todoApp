import React, { useContext } from 'react'
import './app.css'

import TasksItems from './TasksItems'
import NewTaskForm from './NewTaskForm'
import { tasksContext } from '../contexts/tasksContext'
export default function App() {
    const fetchTasks = useContext(tasksContext)
    return (
        <div className='app-container'>
            <div className="app">
                <div className="display">
                    <ul className='tasks-list'>
                        {fetchTasks.allTasks.map(task => (
                            <TasksItems key={task.id} {...task} />
                        ))}
                    </ul>
                </div>
                <div className="new-task-panel">
                    <NewTaskForm />
                </div>
            </div>
        </div>
    )
}
