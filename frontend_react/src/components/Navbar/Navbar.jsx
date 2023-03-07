import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt='logo' />
      </div>
    </nav>
  )
}

export default Navbar