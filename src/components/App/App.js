import React from 'react'
import './app.css'
export default function App() {
  return (
    <div className='app-container'>
        <h1 className='app-title'>TODO APP</h1>
        <div className='todo-app-container'>
            <ul>
                <li></li>
            </ul>
            <div className="create-todo-panel">
                <input type="text" />
                <button>add</button>
            </div>
        </div>
    </div>
  )
}
