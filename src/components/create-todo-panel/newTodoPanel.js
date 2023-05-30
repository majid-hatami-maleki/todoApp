import React from 'react'
import './newTodoPanel.css'
function NewTodoPanel() {
    return (
        <div className='newTodoPanel-container'>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>
                    title
                    <input type="text" placeholder='set a title ...' />
                </label>
                <label>
                    description
                    <textarea
                        name="new-todo-description-input"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder='write your todo description...'
                    ></textarea>
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewTodoPanel