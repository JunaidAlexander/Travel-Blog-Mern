import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="menu">
      <h3 className='header-left'>Menu</h3>
      <h1>Travel.World</h1>
      <div className="input-container">
        <input placeholder='Location be Guide'/>
      </div>
    </div>
  )
}
