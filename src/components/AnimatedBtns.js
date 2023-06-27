import React from 'react'
import './AnimatedBtns.css'
export default function AnimatedBtns({ icon, title, func }) {

    return (
        <>
            <button
                className='animated-btn'
                onClick={func}
                title={title}
            >
                {icon}
            </button>
        </>
    )


}
