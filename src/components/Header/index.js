import React from 'react'
import './Header.css'
import logo from './logo.png'

const Header = () => (
  <header>
    <a href='/' className='logo'>
      <img src={logo} alt="seu salário" className="logo"/>
    </a>
  </header>
)

export default Header
