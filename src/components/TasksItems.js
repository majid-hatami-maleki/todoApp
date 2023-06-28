import React, { useContext, useMemo } from 'react'
import './tasksItems.css'
import { MdDeleteOutline, MdDone } from 'react-icons/md'
import AnimatedBtns from './AnimatedBtns'
import { tasksContext } from '../contexts/tasksContext'

export default function TasksItems(props) {
    const { id, title, description, isDone } = props
    const contextData = useContext(tasksContext)
    return (
        <>
            {useMemo(() => {
                return !isDone ? (
                    <li className='active-tasks-list-items'>
                        <div className="tasks-list-items-texts">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="tasks-list-items-options">
                            <AnimatedBtns
                                title={'remove'}
                                icon={<MdDeleteOutline />}
                                func={() => { contextData.removeTaskHandler(id) }}
                            />
                            <AnimatedBtns
                                title={'done'}
                                icon={<MdDone />}
                                func={() => { contextData.doneTaskHandler(id) }}
                            />
                        </div>
                    </li>
                ) : (
                    <li className='deActive-tasks-list-items'>
                        <div className="tasks-list-items-texts">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="tasks-list-items-options">
                            <AnimatedBtns
                                title={'remove'}
                                icon={<MdDeleteOutline />}
                                func={() => { contextData.removeTaskHandler(id) }}
                            />
                            <AnimatedBtns
                                title={'done'}
                                icon={<MdDone />}
                                func={() => { contextData.doneTaskHandler(id) }}
                            />
                        </div>
                    </li>
                )
            }, [contextData.allTasks])
            }
        </>
    )
}
