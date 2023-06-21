import React, { createContext, useState } from 'react'

const tasksContext = createContext()


function TasksContextProvider({ children }) {
    const [allTasks, setAllTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskDescription, setNewTaskDescription] = useState('')
    return (
        <tasksContext.Provider value={{
            allTasks,
            setAllTasks,
            newTaskTitle,
            setNewTaskTitle,
            newTaskDescription,
            setNewTaskDescription,
        }}>
            {children}
        </tasksContext.Provider>
    )
}

export { tasksContext, TasksContextProvider }
