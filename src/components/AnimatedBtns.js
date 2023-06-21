import React from 'react'
import './AnimatedBtns.css'
export default function AnimatedBtns({ icon, title }) {
    return (
        <>
            <button
                title={title}>
                {icon}
            </button>
        </>
    )
}
