import React, { useContext } from 'react'
import './new-task-form.css'
import { tasksContext } from '../contexts/tasksContext'
export default function NewTaskForm() {
    const fetchTasks = useContext(tasksContext)
    function submitHandler(e) {
        e.preventDefault()
        const newTask = {
            id: `task - ${fetchTasks.allTasks.length + 1}`,
            title: fetchTasks.newTaskTitle,
            description: fetchTasks.newTaskDescription,
            isDone: false
        }
        fetchTasks.setAllTasks(prevTasks => [...prevTasks, newTask])
        fetchTasks.setNewTaskTitle('')
        fetchTasks.setNewTaskDescription('')
    }
    return (
        <>
            <form className='new-task-form'
                onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder='title...'
                    value={fetchTasks.newTaskTitle}
                    onChange={(e) => fetchTasks.setNewTaskTitle(e.target.value)}
                />
                <textarea
                    cols="50"
                    rows="15"
                    placeholder='description...'
                    value={fetchTasks.newTaskDescription}
                    onChange={(e) => fetchTasks.setNewTaskDescription(e.target.value)}
                ></textarea>
                <input type="submit" />
            </form>
        </>
    )
}
