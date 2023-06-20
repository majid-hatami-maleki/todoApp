import React, { useContext } from 'react'
import './new-task-form.css'
import { tasksContext } from '../contexts/tasksContext'
export default function NewTaskForm() {
    const fetchTasks = useContext(tasksContext)
    return (
        <>
            <form className='new-task-form'>
                <input type="text" placeholder='title...' />
                <textarea name="" id="" cols="30" rows="10" placeholder='description...'></textarea>
                <input type="submit" />
            </form>
        </>
    )
}
