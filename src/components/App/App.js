import React from 'react'
import './app.css'
import {MdDone , MdOutlineRemove , MdModeEdit} from 'react-icons/md'
export default function App() {
  return (
    <div className='app-container'>
        <h1 className='app-title'>TODO APP</h1>
        <div className='todo-app-container'>
            <ul className='todo-app-display'>
                <li>
                    <p>item 1</p>
                    <div className="todo-item-options">
                        <button title='remove'><MdOutlineRemove/></button>
                        <button title='Done'><MdDone/></button>
                        <button title='Edit'><MdModeEdit/></button>
                    </div>
                </li>
            </ul>
            <div className="create-todo-panel">
                <input type="text" />
                <button>add</button>
            </div>
        </div>
    </div>
  )
}
