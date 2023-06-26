import React from 'react'
import './AnimatedBtns.css'
export default function AnimatedBtns({ icon, title, func }) {

    return (
        <>
            <button
                onClick={func}
                title={title}
            >
                {icon}
            </button>
        </>
    )


}
