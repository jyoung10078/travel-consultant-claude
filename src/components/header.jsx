import React from 'react'
import logo from '../assets/claude-travel-logo.png'
export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <h1>Travel Consultant Claude</h1>
        </header>
    )
}

