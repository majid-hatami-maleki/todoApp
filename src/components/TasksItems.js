import React from 'react'
import './tasksItems.css'
import { MdDeleteOutline, MdDone } from 'react-icons/md'
export default function TasksItems(props) {
    const { title, description } = props
    return (
        <>
            <li className='tasks-list-items'>
                <div className="tasks-list-items-texts">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="tasks-list-items-options">
                    <button
                        title='remove'>
                        <MdDeleteOutline />
                    </button>
                    <button
                        title='done'>
                        <MdDone />
                    </button>
                </div>
            </li>
        </>
    )
}
