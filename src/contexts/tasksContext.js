import React, { createContext, useState } from 'react'

const tasksContext = createContext()


function TasksContextProvider({ children }) {
    const [allTasks, setAllTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function removeTaskHandler(id) {
        const removeItem = allTasks.filter((item) => { return item.id !== id })
        setAllTasks(removeItem)
    }
    return (
        <tasksContext.Provider value={{
            allTasks,
            setAllTasks,
            newTaskTitle,
            setNewTaskTitle,
            newTaskDescription,
            setNewTaskDescription,
            removeTaskHandler,
        }}>
            {children}
        </tasksContext.Provider>
    )
}

export { tasksContext, TasksContextProvider }
