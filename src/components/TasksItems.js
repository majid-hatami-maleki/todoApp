import React from 'react'
import './tasksItems.css'
export default function TasksItems() {
    return (
        <>
            <li className='tasks-list-items'>
                <div className="tasks-list-items-texts">
                    <h2>title</h2>
                    <p>description</p>
                </div>
                <div className="tasks-list-items-options">
                    <button>R</button>
                    <button>D</button>
                </div>
            </li>
        </>
    )
}
