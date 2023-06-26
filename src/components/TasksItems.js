import React, { useContext } from 'react'
import './tasksItems.css'
import { MdDeleteOutline, MdDone } from 'react-icons/md'
import AnimatedBtns from './AnimatedBtns'
import { tasksContext } from '../contexts/tasksContext'

export default function TasksItems(props) {
    const { title, description, id } = props
    const contextData = useContext(tasksContext)
    return (
        <>
            <li className='tasks-list-items'>
                <div className="tasks-list-items-texts">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="tasks-list-items-options">
                    <AnimatedBtns
                        title={'done'}
                        icon={<MdDone />}

                    />
                    <AnimatedBtns
                        title={'remove'}
                        icon={<MdDeleteOutline />}
                        func={() => { contextData.removeTaskHandler(id) }}
                    />
                </div>
            </li>
        </>
    )
}
