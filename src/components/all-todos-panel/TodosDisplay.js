import React from 'react'
import './TodosDisplay.css'
import { MdRemoveCircle, MdDone } from 'react-icons/md'
function TodosDisplay() {
    return (
        <>
            <ul className='todos-list'>
                <li>
                    <div className="todo-texts">
                        <h1>todo1 title</h1>
                        <p>todo1 description</p>
                    </div>
                    <div className="todo-option-btns">
                        <button title='remove'><MdRemoveCircle /></button>
                        <button title='done'><MdDone /></button>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default TodosDisplay