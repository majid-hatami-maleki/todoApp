import React, { createContext, useState } from 'react'

const tasksContext = createContext()


function TasksContextProvider({ children }) {
    const [allTasks, setAllTasks] = useState([])
    return (
        <tasksContext.Provider value={{
            allTasks,
            setAllTasks
        }}>
            {children}
        </tasksContext.Provider>
    )
}

export { tasksContext, TasksContextProvider }
