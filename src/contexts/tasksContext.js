import React, { createContext, useState } from 'react'

const tasksContext = createContext()


function TasksContextProvider({ children }) {
    const [allTasks, setAllTasks] = useState([
        { id: 1, title: 'html', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officia magni culpa at quam alias eos in harum, id dolores debitis voluptatem, soluta animi ratione laboriosam amet repellendus. Provident, voluptatem placeat reiciendis totam eum dolores sequi dicta odit voluptatibus, autem veniam exercitationem maiores iusto dolorem suscipit vero, molestias cumque omnis adipisci ullam facere! Amet officia modi dolores ipsa incidunt impedit architecto harum aperiam voluptatem, deleniti exercitationem officiis nisi quo magni recusandae soluta, delectus explicabo. Amet omnis tempora, tempore minus aspernatur accusantium? Deserunt corporis, perspiciatis, accusamus omnis quis natus sunt reiciendis nulla laborum cupiditate molestiae provident cum autem delectus sit maxime.' },
        { id: 2, title: 'js project', description: 'working on Javascript todo project' },
        { id: 3, title: 'css', description: 'do the project responsive' },
        { id: 4, title: 'html', description: 'learn html' },
    ])
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
