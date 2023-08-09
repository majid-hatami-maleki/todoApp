import React, { useMemo, useState } from 'react'
import './app.css'
import { MdDone, MdOutlineRemove, MdModeEdit } from 'react-icons/md'
export default function App() {
    const [inputValue, setInputValue] = useState('')
    const [allTodosArray, setAllTodosArray] = useState([])
    const todoClickHandler = (e) => {
        const newObj = {}
        newObj.id = allTodosArray.length + 1
        newObj.value = inputValue
        newObj.class = 'active-todo-lis'
        setAllTodosArray(prevState => {
            return [...prevState, newObj]
        })
        setInputValue('')
    }
    const removeTodoHandler = (item)=>{
        const filteredItem = allTodosArray.filter((todo)=> todo.id !== item.id)     
        setAllTodosArray([...filteredItem])
    }
    const doneTodoHandler = (item)=>{
        let copyArray = allTodosArray
        const foundItem = copyArray.find((todo)=> item.id === todo.id)
        foundItem.class = 'deActive-todo-lis'
        setAllTodosArray([...copyArray])
    }
    return (
        <div className='app-container'>
            <h1 className='app-title'>TODO APP</h1>
            <div className='todo-app-container'>
                <ul className='todo-app-display'>
                    {useMemo(() => {
                        return allTodosArray.map((todo) => {
                            return <li key={todo.id} className={`${todo.class}`}>
                                <p>{todo.value}</p>
                                <div className="todo-item-options">
                                    <button
                                        title='remove'
                                        onClick={()=>{removeTodoHandler(todo)}}
                                    >
                                        <MdOutlineRemove />
                                    </button>
                                    <button 
                                    title='Done'
                                    onClick={()=>{doneTodoHandler(todo)}}
                                     ><MdDone /></button>
                                    <button title='Edit'><MdModeEdit /></button>
                                </div>
                            </li>
                        })
                    }, [allTodosArray])}
                </ul>
                <div className="create-todo-panel">
                    <input type="text" value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') todoClickHandler()
                        }}
                    />
                    <button
                        onClick={(e) => { todoClickHandler() }}
                    >add</button>
                </div>
            </div>
        </div>
    )
}
