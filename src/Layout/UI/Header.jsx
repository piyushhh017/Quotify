import React from 'react'
import { Link, NavLink } from 'react-router'
import '../../css/header.css'

const Header = () => {
  return (
    <div className='headerDiv'>
      <span></span>
        <div className="logo">
            <h1><Link className='h1'>Quotify</Link></h1>
        </div>
        <div className="options">
            <li><NavLink to={'/'} className='navLink'>Home</NavLink></li>
            <li><NavLink to={'/Quotes'} className='navLink'>Quotes</NavLink></li>
            <li><NavLink to={'/Profile'} className='navLink'>Profile</NavLink></li>
            <li><NavLink to={'/About'} className='navLink'>About</NavLink></li>
        </div>
  </div>
  )
}

export default Header
