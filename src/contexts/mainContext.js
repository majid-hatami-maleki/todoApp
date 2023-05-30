import React, { createContext } from "react";

const todoContext = createContext()


const TodoContextProvider = ({ children }) => {
    return (
        <todoContext.Provider value={null}>
            {children}
        </todoContext.Provider>
    )
}

export { TodoContextProvider, todoContext }