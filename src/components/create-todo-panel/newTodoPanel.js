import React from 'react'
import './newTodoPanel.css'
function newTodoPanel() {
    return (
        <div className='newTodoPanel-container'>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>
                    title
                    <input type="text" placeholder='set a title ...' />
                </label>
                <label>
                    description
                    <textarea name="new-todo-description-input" id="" cols="30" rows="10"></textarea>
                </label>
            </form>
        </div>
    )
}

export default newTodoPanel