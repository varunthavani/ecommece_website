import React from 'react'
import TopBar from '../layout/TopBar.jsx'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <hr className='text-gray-500'/>
    </div>
  )
}

export default Header
