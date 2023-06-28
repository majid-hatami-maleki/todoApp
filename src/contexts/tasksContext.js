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
    function doneTaskHandler(id) {
        setAllTasks(allTasks.map(item => item.id === id ? { ...item, isDone: true } : item));
    }
    // { data: this.state.data.map(el => (el.id === id ? { ...el, text } : el)) }
    return (
        <tasksContext.Provider value={{
            allTasks,
            setAllTasks,
            newTaskTitle,
            setNewTaskTitle,
            newTaskDescription,
            setNewTaskDescription,
            removeTaskHandler,
            doneTaskHandler
        }}>
            {children}
        </tasksContext.Provider>
    )
}

export { tasksContext, TasksContextProvider }
