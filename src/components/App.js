import React from 'react'
import './app.css'
export default function App() {
    return (
        <div className='app-container'>
            <div className="app">
                <div className="display">
                    <ul className='tasks-list'>
                        <li className='tasks-list-items'>
                            <div className="tasks-list-items-texts">
                                <h2>title</h2>
                                <p>description</p>
                            </div>
                            <div className="tasks-list-items-options">
                                <button>R</button>
                                <button>D</button>
                            </div>
                        </li>
                        <li className='tasks-list-items'>
                            <div className="tasks-list-items-texts">
                                <h2>title</h2>
                                <p>description</p>
                            </div>
                            <div className="tasks-list-items-options">
                                <button>R</button>
                                <button>D</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="new-task-panel">
                    <form >
                        <input type="text" placeholder='title...' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='description...'></textarea>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
